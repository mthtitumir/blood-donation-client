"use client";

import NoData from "@/components/shared/NoData/NoData";
import Spinner from "@/components/shared/Spinner/Spinner";
import { bloodTypes } from "@/constants";
import { Icons } from "@/icons";
import { useGetMyRequestsQuery } from "@/redux/features/requests/requestsApi";
import { TRequest } from "@/types";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const MyBloodRequests = () => {
  const { data, isLoading } = useGetMyRequestsQuery({});
  const requests = data?.data;
  if (isLoading && !requests) {
    return <Spinner />;
  }
  return (
    <Box>
      <Box textAlign="center" my={2}>
        <Typography component="h1" variant="h5" fontWeight={500}>
          Your Blood Requests
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {requests.length > 0 &&
          requests.map((request: TRequest) => (
            <Grid key={request.id} item xs={12} sm={6}>
              <Box
                sx={{
                  border: "1px solid #610834",
                  borderRadius: "5px",
                  p: 3,
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" gap={2} alignItems="center">
                    <Icons.BloodOutlined size={25} color="#bb0a1e" />
                    <Typography variant="h5">Blood Request</Typography>
                  </Stack>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography fontWeight={600} color="white">
                      {bloodTypes[request?.bloodType]}
                    </Typography>
                  </Box>
                </Stack>
                <Stack my={1}>
                  <Typography>
                    Patient:{" "}
                    {request?.requester?.userProfile?.name || "No name"}
                  </Typography>
                  <Typography>Reason: {request.reason}</Typography>
                  <Typography>
                    Quantity: {request?.quantity || 450} ML
                  </Typography>
                  <Typography>
                    Donation Date: {request.dateOfDonation}
                  </Typography>
                  <Typography>Phone Number :{request.phoneNumber}</Typography>
                </Stack>
                <Stack direction="row" gap={3} my={1}>
                  <Box>
                    <Icons.LocationFill size={40} color="black" />
                  </Box>
                  <Box>
                    <Typography>{request.hospitalName}</Typography>
                    <Typography>{request.hospitalAddress}</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" justifyContent="flex-end" gap={2}>
                  <Button>{request?.requestStatus}</Button>
                </Stack>
              </Box>
            </Grid>
          ))}
      </Grid>
      {requests.length == 0 && <NoData />}
    </Box>
  );
};

export default MyBloodRequests;
