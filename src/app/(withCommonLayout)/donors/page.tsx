import DonorCard from "@/components/ui/donorsPage/DonorCard/DonorCard";
import SearchAndFilters from "@/components/ui/donorsPage/SearchAndFilter/SearchAndFilters";
import { Icons } from "@/icons";
import { TUserProfile } from "@/types";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const DonorListPage = async ({ searchParams }: any) => {
  const { bloodType, availability, searchTerm } = searchParams;

  const queryParams = new URLSearchParams();
  if (bloodType) queryParams.set("bloodType", bloodType);
  if (availability) queryParams.set("availability", availability);
  if (searchTerm) queryParams.set("searchTerm", searchTerm);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user?${queryParams.toString()}`
  );
  const { data } = await res.json();

  return (
    <Container>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" component="h1" fontWeight={600}>
            Donors
          </Typography>
          <SearchAndFilters />
        </Stack>
      </Box>
      <Box sx={{ flexGrow: 1, my: 3 }}>
        <Grid container spacing={2}>
          {data.map((donor: TUserProfile) => (
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
