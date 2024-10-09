import {Container} from "@mui/material";
import {Banner} from "./components/Banners";
import Grid from '@mui/material/Grid2';

const bannerData = {
  title: "Takhle nejednají muži, míní Kalousek. A tepe „poslušnou“ Pekarovou!",
  overline: "Fiala si kopl do mrtvoly?!",
  href: "https://www.blesk.cz",
  image: "/img/banners/full.png",
}


const banners = [{
  variant: "full",
  ...bannerData
},
{
  variant: "square-big",
  ...bannerData
},
{
  variant: "square-small",
  ...bannerData
},
{
  variant: "rectangle-vertical-small",
  ...bannerData
},
{
  variant: "rectangle-horizontal-small",
  ...bannerData
},
{
  variant: "rectangle-vertical-big",
  ...bannerData
},
{
  variant: "rectangle-horizontal-big",
  ...bannerData
}
];

export default function Home() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid>
            <Banner {...banners[0]} />
        </Grid>
        <Grid>
            <Banner {...banners[1]} />
        </Grid>
        <Grid>
            <Banner {...banners[3]} />
        </Grid>
        <Grid>
            <Banner {...banners[2]} />
        </Grid>
        <Grid>
            <Banner {...banners[4]} />
        </Grid>
      </Grid>
    </Container>
  );
}
