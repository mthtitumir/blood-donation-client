import assets from "@/assets";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Container>
      <Grid container alignItems="center" my={5}>
        <Grid
          xs={12}
          sm={8}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ px: 2 }}>
            <Typography variant="h5" component="h1" fontWeight={600}>
              About Us
            </Typography>
            <Typography sx={{ my: 2 }}>
              At{" "}
              <Box
                sx={{ color: "primary.main" }}
                component="span"
                fontWeight={600}
              >
                Blood & Connect
              </Box>
              , our mission is to inspire and empower individuals to make a
              life-saving impact through blood donation. We aim to create a
              community of heroes who are dedicated to giving the gift of life
              and supporting those in need. Together, we can save lives and make
              a difference.
            </Typography>
            <Typography sx={{ my: 2 }}>
              Our team is a passionate group of healthcare professionals,
              volunteers, and advocates committed to promoting the importance of
              blood donation. With diverse backgrounds in medicine, community
              outreach, and education, we work tirelessly to ensure that every
              donation counts and reaches those who need it most. Meet our
              dedicated team members who are the driving force behind our
              mission.
            </Typography>
            <Typography sx={{ my: 2 }}>
              We would love to hear from you! Whether you have questions, want
              to get involved, or need more information, feel free to reach out
              to us.
            </Typography>
            <Button>More Info</Button>
          </Box>
        </Grid>
        <Grid xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 2,
              borderRight: "1px solid #610834",
            }}
          >
            <Image
              src={assets.images.about_us_banner}
              alt="hand with hand"
              width={600}
              height={600}
              style={{ borderRadius: 10 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
