"use client"

import UserProfile from "@/components/ui/donorsPage/UserProfile/UserProfile";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { createRowData } from "@/utils/CreateRowData";
import { Box } from "@mui/material";

const MyProfile = () => {
  const { data: user, isLoading } = useGetMeQuery({});
  const data = user?.data;
  const rows = [
    createRowData("Name", data?.name),
    createRowData("Email", data?.user?.email),
    createRowData("Blood Group", data?.bloodType),
    createRowData("Age", data?.age),
    createRowData("Location", data?.location),
    createRowData("Last Donation", data?.lastDonationDate),
  ];
  return (
    <Box>
      <UserProfile rows={rows} data={data} />
    </Box>
  );
};

export default MyProfile;
