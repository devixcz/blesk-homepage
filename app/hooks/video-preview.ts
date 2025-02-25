import React, { useState, useEffect, useRef } from "react";

interface VideoPreviewHookProps {
  videoUrl: string;
  previewDuration?: number;
  frameRate?: number;
}

interface VideoPreviewHookResult {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  hovered: boolean;
  setHovered: (value: boolean) => void;
  loading: boolean;
}

const useVideoPreview = ({
  videoUrl,
  previewDuration = 3,
  frameRate = 12,
}: VideoPreviewHookProps): VideoPreviewHookResult => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) {
      return;
    }

    const totalFrames = previewDuration * frameRate;
    const interval = previewDuration / totalFrames;
    const frameDelay = 800 / frameRate;

    let frame = 0;
    let animationFrameId: number | undefined;

    const animate = () => {
      if (hovered && frame < totalFrames) {
        video.currentTime = frame * interval;
        frame++;

        timeoutRef.current = setTimeout(() => {
          animationFrameId = requestAnimationFrame(animate);
        }, frameDelay);
      } else {
        video.currentTime = 0;
        frame = 0;
      }
    };

    const startAnimation = () => {
      if (video.readyState >= 3) {
        setLoading(false);
        animate();
      }
    };

    const handleVideoLoad = () => {
      video.muted = true;
      if (hovered) {
        startAnimation();
      }
    };

    if (hovered) {
      setLoading(true);

      if (video.readyState >= 3) {
        startAnimation();
      } else {
        video.addEventListener("canplay", handleVideoLoad);
        video.load();
      }
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      video.currentTime = 0;
      setLoading(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      video.removeEventListener("canplay", handleVideoLoad);
    };
  }, [hovered, videoUrl, previewDuration, frameRate]);

  return { videoRef, hovered, setHovered, loading };
};

export { useVideoPreview };
