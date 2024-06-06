import { queryItems } from "@/utils/QueryItems";
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
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        rowGap={3}
      >
        {queryItems?.map((item) => (
          <Grid
            key={item.text}
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
              <item.icon size={30} style={iconStyle} />
            </Box>
            <Typography
              fontSize={14}
              fontWeight={500}
              sx={{ color: "#636873" }}
            >
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Query;
