import DonorCard from "@/components/ui/donorsPage/DonorCard.tsx/DonorCard";
import { TUser } from "@/types";
import { Box, Container, Grid, Typography } from "@mui/material";

const DonorListPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donor/donor-list`
  );
  const { data } = await res.json();
  console.log(data);

  return (
    <Container>
      <Box>
        <Typography variant="h5" component="h1" fontWeight={600}>
          All Donors
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, my: 3 }}>
        <Grid container spacing={2}>
          {data.map((donor: TUser) => (
            <Grid key={donor.id} item xs={12} sm={4}>
              <DonorCard donor={donor} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DonorListPage;
