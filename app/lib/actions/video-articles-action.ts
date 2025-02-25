"use server";

import axios from "axios";

import { Article } from "@/app/contexts/ArticlesContext";

interface VideoFile {
  id: number;
  quality: string;
  file_type: string;
  width: number | null;
  height: number | null;
  link: string;
}

interface VideoPicture {
  id: number;
  picture: string;
  nr: number;
}

interface VideoUser {
  id: number;
  name: string;
  url: string;
}

interface PexelsVideo {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: VideoUser;
  video_files: VideoFile[];
  video_pictures: VideoPicture[];
}

interface PexelsVideoResponse {
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: PexelsVideo[];
}

/**
 * Transform Pexels videos data into our Article format
 * Uses video creator's name as title, video URL as href, and video thumbnail as image
 */
const transformVideos = (data: PexelsVideoResponse): Article[] => {
  return data.videos.map((video) => ({
    title: video.user.name,
    href: video.video_files[video.video_files.length - 1].link,
    image: {
      src: video.image,
      alt: video.user.name,
    },
    section: "video",
    metadata: {
      duration: video.duration,
      width: video.width,
      height: video.height,
    },
  }));
};

export async function fetchVideoArticlesAction() {
  try {
    const response = await axios.get<PexelsVideoResponse>(
      "https://api.pexels.com/videos/popular",
      {
        headers: {
          Authorization:
            "vM9XVoTizoFEzlkXlqGN6EnhiSfYc5Rq1jfoIzdmWsdHBceY28qiGwFP",
        },
      }
    );
    return {
      data: response.data ? transformVideos(response.data) : [],
      error: null,
    };
  } catch (error) {
    console.error("Chyba při načítání video článků:", error);
    return {
      data: [],
      error: error instanceof Error ? error.message : "Neznámá chyba",
    };
  }
}
