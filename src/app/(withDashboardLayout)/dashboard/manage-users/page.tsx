"use client";

import NoData from "@/components/shared/NoData/NoData";
import Spinner from "@/components/shared/Spinner/Spinner";
import { Role, Status } from "@/constants";
import {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} from "@/redux/features/user/userApi";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const { data, isLoading } = useGetAllUserQuery({});
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const users = data?.data;
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
      width: 100,
    },
    {
      field: "bloodType",
      headerName: "Blood Type",
      width: 120,
    },
    {
      field: `role`,
      headerName: "Role",
      width: 120,
      renderCell: (params) => {
        const user = params?.row?.user;
        return `${user.role}`;
      },
    },
    {
      field: `isBanned`,
      headerName: "Status",
      width: 80,
      renderCell: (params) => {
        const user = params?.row?.user;
        return `${user.isBanned ? "Banned" : "Active"}`;
      },
    },
    {
      field: `edit_role`,
      headerName: "Edit Role",
      width: 150,
      renderCell: (params) => {
        const user = params?.row?.user;
        return (
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              size="small"
              value={user.role}
              defaultValue="Edit Role"
              onChange={(e) => handleUpdateUserRole(e.target.value, user?.id)}
            >
              <MenuItem disabled value="">
                Edit Role
              </MenuItem>
              {Object.values(Role)?.map((r) => (
                <MenuItem key={r} value={r}>
                  {Role[r]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      },
    },
    {
      field: `edit_status`,
      headerName: "Edit Status",
      width: 150,
      renderCell: (params) => {
        const user = params?.row?.user;
        return (
          <FormControl sx={{ minWidth: 100 }}>
            <Select
              size="small"
              value={user?.isBanned ? "Banned" : "Active"}
              onChange={(e) => handleUpdateUserStatus(e.target.value, user?.id)}
            >
              <MenuItem disabled value="">
                Ban User
              </MenuItem>
              {Object.keys(Status)?.map((r) => (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      },
    },
  ];
  const handleUpdateUserRole = async (value: string, id: string) => {
    setUserId(id);

    try {
      const res = await updateUserRole({
        id: userId as string,
        updatedUserRoleData: { role: value },
      }).unwrap();
      if (res.data.id) {
        toast.success(res.message || "User role updated!");
      }
    } catch (error: any) {
      toast.error(error.message || "User role update failed!");
    }
  };

  const handleUpdateUserStatus = async (value: string, id: string) => {
    setUserId(id);

    try {
      console.log(userId);
      const res = await updateUserStatus({
        id: userId as string,
        updatedUserStatusData: { isBanned: value == "Active" ? false : true },
      }).unwrap();
      console.log(res);
      if (res.data.id) {
        toast.success(res.message || "User status updated!");
      }
    } catch (error: any) {
      toast.error(error.message || "User status update failed!");
    }
  };

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
