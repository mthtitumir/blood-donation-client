"use client";

import NoData from "@/components/shared/NoData/NoData";
import Spinner from "@/components/shared/Spinner/Spinner";
import { useGetAllUserQuery } from "@/redux/features/user/userApi";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: `email`,
    headerName: "Email",
    width: 150,
    renderCell: (params) => {
      const user = params.row.user;
      return `${user.email}`;
    },
  },
  {
    field: `availability`,
    headerName: "Availability",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "bloodType",
    headerName: "Blood Type",
    width: 160,
  },
  {
    field: "lastDonationDate",
    headerName: "Last Donation",
    width: 160,
  },
  {
    field: `role`,
    headerName: "Role",
    width: 150,
    renderCell: (params) => {
      const user = params.row.user;
      return `${user.role}`;
    },
  },
];

const ManageUsers = () => {
  const { data, isLoading } = useGetAllUserQuery({});
  const users = data?.data;
  if (!users && isLoading) {
    return <Spinner />;
  }
  return (
    <Box>
      <Box textAlign="center" my={2}>
        <Typography component="h1" variant="h5" fontWeight={500}>
          All Users
        </Typography>
      </Box>

      {users.length > 0 && (
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={users}
            columns={columns}
            hideFooter
            loading={isLoading}
          />
        </Box>
      )}
      {users.length === 0 && <NoData />}
    </Box>
  );
};

export default ManageUsers;
