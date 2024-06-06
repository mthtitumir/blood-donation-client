import { Box, Container, Stack, Typography } from "@mui/material";
import "./OurImpact.css";

const OurImpact = () => {
  return (
    <Stack className="our-impact-container">
      <Stack
        sx={{
          height: "400px",
          bgcolor: "black",
          opacity: 0.7,
          width: "100%",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ zIndex: 1000, color: "white", opacity: 1 }}
        >
          Helping 2000+ People
        </Typography>
      </Stack>
    </Stack>
  );
};

export default OurImpact;

{
  /* <Box
      my={5}
      sx={{
        position: 'relative',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // overflow: 'hidden',
        // '&::before': {
        //   content: '""',
        //   position: 'absolute',
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0
          backgroundImage: 'url("https://www.codeur.com/tuto/wp-content/uploads/2021/12/diaporama-image.jpg")',
          backgroundSize: 'cover',
          // background: url(../images/backgroundImage.jpg) no-repeat center center fixed;
          opacity: 0.1,
          zIndex: -1,
        // },
      }}
    >
      <Container>
        hello
      </Container>
    </Box> */
}
