import { Icons } from "@/icons";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SearchDonor = () => {
  return (
    <Container>
      <Box my={5}>
        <Typography
          variant="h5"
          component="h1"
          fontWeight={600}
          textAlign="center"
        >
          Find A Donor
        </Typography>
        <Box sx={{ flexGrow: 1, my: 3 }}>
          <Grid
            container
            spacing={2}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
              <Grid item key={data} xs={12} sm={3}>
                <Box
                component={Link}
                href={`/donors/${"id"}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #610834",
                    borderRadius: 2,
                    // boxShadow: 1
                    boxShadow: "5px 5px 5px #610834",
                    '&:hover': {
                      boxShadow: "5px 5px #610834",
                    },
                  }}
                >
                  <Box sx={{ p: 1, borderRight: "1px solid #610834" }}>
                    <Image
                      width={60}
                      height={60}
                      src={
                        "https://mth-titumir.web.app/assets/Titumir-Picture%20copy-f6460935.png"
                      }
                      alt="donor"
                    />
                  </Box>
                  <Box p={1}>
                    <Box display="flex" gap={3} alignItems="center">
                      <Typography component="h1" fontWeight={600}>
                        M. T. H. Titumir
                      </Typography>
                      <Icons.Circle style={{ color: "green" }} size="12px" />
                    </Box>
                    <Typography>Dhaka, Ban</Typography>
                    <Typography>A+</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button component={Link} href="/donors" sx={{ }}>
            All Donors
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SearchDonor;
