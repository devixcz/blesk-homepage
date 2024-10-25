'use client';

import { useState } from 'react';
import { Container, Typography, TextField, Paper } from "@mui/material";
import { Banner, RectangleHorizontalBannerVariants, RectangleVerticalBannerVariants, SquareBannerVariants } from "@/app/components/Banners";
import Grid from '@mui/material/Grid2';

const initialBannerData = {
  title: "Kousnul mě, tvrdí Dopita!",
  overline: "Rvačka Soukupa s manželem Hanychové:",
  href: "https://www.blesk.cz",
  image: "/img/banners/full.png",
};

export default function Home() {
  const [bannerData, setBannerData] = useState(initialBannerData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const RectangleHorizontalBanners = Object.keys(RectangleHorizontalBannerVariants).map(variantKey => ({
    ...bannerData,
    variant: variantKey,
  }));

  const RectangleVerticalBanners = Object.keys(RectangleVerticalBannerVariants).map(variantKey => ({
    ...bannerData,
    variant: variantKey,
  }));

  const SquareBanners = Object.keys(SquareBannerVariants).map(variantKey => ({
    ...bannerData,
    variant: variantKey,
  }));

  return (
    <Container>
      <Typography variant="h1">Banner Variants Sandbox</Typography>
      <Paper sx={{ p: 5, my: 5 }}>
        <Grid container spacing={2}>
            <Grid  size={12}>
                <Typography variant="h5">Vsupní Data</Typography>
            </Grid>
            <Grid size={12}>
            <TextField
                fullWidth
                label="Title"
                name="title"
                value={bannerData.title}
                onChange={handleChange}
            />
            </Grid>
            <Grid size={12}>
            <TextField
                fullWidth
                label="Overline"
                name="overline"
                value={bannerData.overline}
                onChange={handleChange}
            />
            </Grid>
            <Grid size={12}>
            <TextField
                fullWidth
                label="Href"
                name="href"
                value={bannerData.href}
                onChange={handleChange}
            />
            </Grid>
            <Grid size={12}>
            <TextField
                fullWidth
                label="Image URL"
                name="image"
                value={bannerData.image}
                onChange={handleChange}
            />
            </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={4} sx={{mt: 10, borderTop: '1px solid #ccc'}}>
        <Typography variant="h2">Horizontal Rectangles</Typography>
        {RectangleHorizontalBanners.map((banner, index) => (
          <Grid size={12} key={index}>
            <Typography variant="h3">{banner.variant}</Typography>
            <Banner {...banner} />
          </Grid>
        ))}
      </Grid>

      
      <Grid container spacing={4} sx={{mt: 10, borderTop: '1px solid #ccc'}}>
      <Typography variant="h2">Vertical Rectangles</Typography>
        {RectangleVerticalBanners.map((banner, index) => (
          <Grid size={12} key={index}>
            <Typography variant="h3">{banner.variant}</Typography>
            <Banner {...banner} />
          </Grid>
        ))}
      </Grid>

      
      <Grid container spacing={4} sx={{mt: 10, borderTop: '1px solid #ccc'}}>
      <Typography variant="h2">Squares</Typography>
        {SquareBanners.map((banner, index) => (
          <Grid size={12} key={index}>
            <Typography variant="h3">{banner.variant}</Typography>
            <Banner {...banner} />
          </Grid>
        ))}
      </Grid>


      <Grid container spacing={4} sx={{mt: 10, borderTop: '1px solid #ccc'}}>
      <Typography variant="h2">Layout Examples</Typography>
        <Grid>
            <Typography variant="h3">Square + 1/3</Typography>
            <Grid spacing={2} container>
                <Banner variant='square-two-thirds' {...bannerData} />
                <Banner variant='rectangle-vertical-third' {...bannerData} />
            </Grid>
        </Grid>

        <Grid>
            <Typography variant="h3">1/3 + 1/3 + 1/3</Typography>
            <Grid spacing={2} container>
                <Banner variant='rectangle-vertical-third' {...bannerData} />
                <Banner variant='rectangle-vertical-third' {...bannerData} />
                <Banner variant='rectangle-vertical-third' {...bannerData} />
            </Grid>
        </Grid>

        <Grid>
            <Typography variant="h3">Auto</Typography>
            <Grid spacing={2} container>
                <Banner variant='rectangle-horizontal-half' {...bannerData} />
                <Banner variant='square-third' {...bannerData} />
                <Banner variant='square-third' {...bannerData} />
                <Banner variant='square-third' {...bannerData} />
                <Banner variant='square-third' {...bannerData} />
                <Banner variant='rectangle-horizontal-half' {...bannerData} />
                
            </Grid>
        </Grid>

        <Grid>
            <Typography variant="h3">Square full</Typography>
            <Grid spacing={2} container>
                <Banner variant='square-full' {...bannerData} />
                
            </Grid>
        </Grid>

    </Grid>
    </Container>
    
  );
}
