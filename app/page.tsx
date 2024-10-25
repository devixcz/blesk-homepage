import {Container} from "@mui/material";
import {Banner, BannerVariants} from "./components/Banners";
import Grid from '@mui/material/Grid2';

const bannerData = {
  title: "Takhle nejednají muži, míní Kalousek. A tepe „poslušnou“ Pekarovou!",
  overline: "Fiala si kopl do mrtvoly?!",
  href: "https://www.blesk.cz",
  image: "/img/banners/full.png",
}


const banners = Object.keys(BannerVariants).map(variantKey => ({
  ...bannerData,
  variant: variantKey
}));

console.log(banners);

export default function Home() {
  return (
    <Container>
      <Grid container spacing={4}>
        {banners.map((banner, index) => (
          <Grid key={index}>
            <Banner {...banner} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
