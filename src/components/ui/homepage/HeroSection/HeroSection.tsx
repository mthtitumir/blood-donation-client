import assets from "@/assets";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        // display: "flex",
      }}
    >
      <Grid container>
        <Grid xs={12} sm={8}>
          <Image
            width={800}
            height={820}
            src={assets.images.hero_banner}
            alt="Hero section banner"
          />
        </Grid>
        <Grid
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h1"
              textAlign="right"
              fontWeight={600}
            >
              Save Life
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              fontWeight={600}
              color="primary.main"
              textAlign="right"
            >
              Donate Blood
            </Typography>
            <Typography sx={{ textAlign: "right", my: 4 }}>
              One pint of your blood can save up to three lives. Your donation
              can provide critical care for those in emergencies. Embrace the
              power within you to change lives. Donate blood today and become a
              hero in someone’s life.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "end" }}>
              <Button>Donate</Button>
              <Button variant="outlined">Get Blood Now</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
