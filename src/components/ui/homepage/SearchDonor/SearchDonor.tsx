import { Icons } from "@/icons";
import { TUserProfile } from "@/types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SearchDonor = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user`);
  // console.log(res);
  const { data } = await res.json();
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
          <Grid container spacing={2}>
            {data.map((user: TUserProfile) => (
              <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
                <Box
                  component={Link}
                  href={`/donors/${user?.id}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #610834",
                    borderRadius: 2,
                    boxShadow: "5px 5px 5px #610834",
                    "&:hover": {
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
                        {user?.name}
                      </Typography>
                      <Icons.Circle style={{ color: user?.availability ? "green" : "gray" }} size="12px" />
                    </Box>
                    <Typography>{user?.location}</Typography>
                    <Typography>{user?.bloodType}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button component={Link} href="/donors" sx={{}}>
            All Donors
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SearchDonor;
