import { Icons } from "@/icons";
import { Box, Container, Grid, Typography } from "@mui/material";

const Query = () => {
  const iconStyle = {
    color: "#610834",
  };
  const boxHoverStyle = {
    "&:hover": {
      bgcolor: "#A5A9B1",
    },
  };
  return (
    <Container sx={{ my: 12 }}>
      <Grid container alignItems="center" justifyContent="space-evenly" rowGap={3}>
        <Grid
          container
          item
          display="flex"
          direction="column"
          gap={3}
          alignItems="center"
          justifyContent="center"
          xs={6}
          sm={2}
        >
          <Box sx={boxHoverStyle} p={2} borderRadius="50%" bgcolor="#E9EAEC">
            <Icons.BloodFill size={30} style={iconStyle} />
          </Box>
          <Typography fontSize={14} fontWeight={500} sx={{ color: "#636873" }}>
            Can I Give Blood
          </Typography>
        </Grid>
        <Grid
          container
          item
          display="flex"
          direction="column"
          gap={3}
          alignItems="center"
          justifyContent="center"
          xs={6}
          sm={2}
        >
          <Box sx={boxHoverStyle} p={2} borderRadius="50%" bgcolor="#E9EAEC">
            <Icons.LocationFill size={30} style={iconStyle} />
          </Box>
          <Typography fontSize={14} fontWeight={500} sx={{ color: "#636873" }}>
            Where to give blood
          </Typography>
        </Grid>
        <Grid
          container
          item
          display="flex"
          direction="column"
          gap={3}
          alignItems="center"
          justifyContent="center"
          xs={6}
          sm={2}
        >
          <Box sx={boxHoverStyle} p={2} borderRadius="50%" bgcolor="#E9EAEC">
            <Icons.Medicine size={30} style={iconStyle} />
          </Box>
          <Typography fontSize={14} fontWeight={500} sx={{ color: "#636873" }}>
            Iron deficiency
          </Typography>
        </Grid>
        <Grid
          container
          item
          display="flex"
          direction="column"
          gap={3}
          alignItems="center"
          justifyContent="center"
          xs={6}
          sm={2}
        >
          <Box sx={boxHoverStyle} p={2} borderRadius="50%" bgcolor="#E9EAEC">
            <Icons.GlassFill size={30} style={iconStyle} />
          </Box>
          <Typography fontSize={14} fontWeight={500} sx={{ color: "#636873" }}>
            Prepare and aftercare
          </Typography>
        </Grid>
        <Grid
          container
          item
          display="flex"
          direction="column"
          gap={3}
          alignItems="center"
          justifyContent="center"
          xs={6}
          sm={2}
        >
          <Box sx={boxHoverStyle} p={2} borderRadius="50%" bgcolor="#E9EAEC">
            <Icons.DonateBlood size={30} style={iconStyle} />
          </Box>
          <Typography fontSize={14} fontWeight={500} sx={{ color: "#636873" }}>
            How to give blood
          </Typography>
        </Grid>
        <Grid
          container
          item
          display="flex"
          direction="column"
          gap={3}
          alignItems="center"
          justifyContent="center"
          xs={6}
          sm={2}
        >
          <Box sx={boxHoverStyle} p={2} borderRadius="50%" bgcolor="#E9EAEC">
            <Icons.Covid size={30} style={iconStyle} />
          </Box>
          <Typography fontSize={14} fontWeight={500} sx={{ color: "#636873" }}>
            Covid essentials
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Query;
