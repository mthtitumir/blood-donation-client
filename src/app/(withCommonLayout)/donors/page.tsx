import MyInput from "@/components/forms/MyInput";
import DonorCard from "@/components/ui/donorsPage/DonorCard.tsx/DonorCard";
import { Icons } from "@/icons";
import { TUser } from "@/types";
import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const DonorListPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donor/donor-list`
  );
  const { data } = await res.json();
  console.log(data);

  return (
    <Container>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" component="h1" fontWeight={600}>
            All Donors
          </Typography>
          <Box>
            <TextField size="small" placeholder="Search donor" />
          </Box>
          <Stack direction="row">
            <Box>
              <Icons.FilterSquare />
            </Box>
          </Stack>
        </Stack>
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
