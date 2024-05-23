import assets from "@/assets";
import { Box, Container } from "@mui/material";
import impactBanner from '@/assets/images/our_impact_banner.jpg';

const OurImpact = () => {
  return (
    <Box
      my={5}
      sx={{
        // position: 'relative',
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
          backgroundPosition: 'center',
          opacity: 0.7,
          zIndex: -1,
        // },
      }}
    >
      <Container>
        hello
      </Container>
    </Box>
  );
};

export default OurImpact;
