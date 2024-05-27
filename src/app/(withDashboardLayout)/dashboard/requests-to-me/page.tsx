"use client";

import NoData from "@/components/shared/NoData/NoData";
import Spinner from "@/components/shared/Spinner/Spinner";
import { useGetRequestsToMeQuery } from "@/redux/features/requests/requestsApi";
import { TRequest } from "@/types";
import { Box, Typography } from "@mui/material";

const RequestsToMe = () => {
  const { data, isLoading } = useGetRequestsToMeQuery({});
  const requests = data?.data;
  if (isLoading && !requests) {
    return <Spinner />;
  }
  return (
    <Box>
      <Box textAlign="center" mt={2}>
        <Typography component="h1" variant="h5" fontWeight={500}>
          Blood Requests To You
        </Typography>
      </Box>
      <Box>
        {requests.length > 0 &&
          requests.map((request: TRequest) => (
            <Box
              key={request.id}
              sx={{
                border: "1px solid #610834",
                borderRadius: "5px",
                p: 3,
                m: 3,
              }}
            >
              <Typography>Blood Group : {request.bloodType}</Typography>
              <Typography>Quantity: {request?.quantity || 450} ML</Typography>
              <Typography>Donation Date: {request.dateOfDonation}</Typography>
              <Typography>Phone Number :{request.phoneNumber}</Typography>
              <Typography>Hospital Name :{request.hospitalName}</Typography>
              <Typography>Location: {request.hospitalAddress}</Typography>
              <Typography>Reason: {request.reason}</Typography>
            </Box>
          ))}
        {requests.length == 0 && (
          <NoData />
        )}
      </Box>
    </Box>
  );
};

export default RequestsToMe;
