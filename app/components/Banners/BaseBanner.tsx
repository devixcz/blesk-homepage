import React from "react";
import { Typography, Grid2 as Grid } from '@mui/material';
import Link from 'next/link';

export interface BannerDimensions {
  height: number;
  width: number;
}

export interface BannerImage {
  src: string;
  alt: string;
}

export interface BaseBannerProps {
  title: string;
  href: string;
  overline?: string;
  image: string | BannerImage;
  dimensions: BannerDimensions;
}

export const BaseBanner = ({ title, href, overline, dimensions, image }: BaseBannerProps) => {
  const calculateFontSize = (title: string, dimensions: BannerDimensions) => {
    const baseFontSize = dimensions.height / 9;
    return baseFontSize;
  };

  const calculateHeighPercent = (width: number, height: number) => {
    return `${(height / width) * 100}%`;
  }

  return (
    <Link href={href} passHref>
      <Grid
        container
        sx={{
          width: {
            xs: '100%',
            md: dimensions.width,
          },
          height:  {
            xs: calculateHeighPercent(dimensions.width , dimensions.height),
            md: dimensions.height,
          },
          backgroundImage: `url(${typeof image === 'string' ? image : image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'primary.contrastText',
          alignItems: 'flex-end',
          p: 4,
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.95,
          }
        }}
      >
        <Grid>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: 'primary.main',
              fontWeight: 900,
              fontSize: '1.5rem',
              px: 2,
            }}
          >
            {overline}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              textShadow: '0px 2px 4px #0F171F33',
              fontSize: calculateFontSize(title, dimensions),
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};
