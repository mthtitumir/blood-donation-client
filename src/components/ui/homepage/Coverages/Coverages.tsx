import assets from "@/assets";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Coverages = () => {
  return (
    <Box bgcolor="black" py={3} my={8}>
      <Container>
        <Grid container alignItems="center" my={5}>
          <Grid
            item
            xs={12}
            sm={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Image
                width={436}
                height={603}
                src={assets.images.bd_map}
                alt="bangladesh map"
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            container
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                component="h1"
                color="white"
                fontWeight={600}
                my={2}
              >
                Saving Lives Across Bangladesh,
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                fontWeight={600}
                color="white"
                my={2}
              >
                One Drop at a Time,
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                fontWeight={600}
                color="white"
                my={2}
              >
                From Dhaka to Chittagong,
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                fontWeight={600}
                color="white"
                my={2}
              >
                We’ve Got You Covered.
              </Typography>
              <Typography sx={{ textAlign: "", my: 4, color: "white" }}>
                Every City, Every Village, Every Life Matters
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined">Donate</Button>
                <Button component={Link} href="/donors">Get Blood Now</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Coverages;
