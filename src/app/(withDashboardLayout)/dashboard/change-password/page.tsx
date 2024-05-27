"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { logoutUser } from "@/services/serverActions/logoutUser";
import toast from "react-hot-toast";
import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";
import { Icons } from "@/icons";
import { useState } from "react";

const ChangePassword = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await changePassword({
        oldPassword: values?.oldPassword,
        newPassword: values?.newPassword,
      });
      console.log(res);     

      if (res.data && res.data.success === true) {
        logoutUser(router);
        toast.success("Password Changed Successfully");
      } else {
        throw new Error("Incorrect Old Password");
      }
    } catch (error) {
      toast.error("Incorrect Old Password");
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 60,
              height: 60,
            },
          }}
        >
          <Icons.Password />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
          Change password
        </Typography>
      </Stack>
      <MyForm
        onSubmit={onSubmit}
        defaultValues={{ oldPassword: "", newPassword: "" }}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <MyInput
              name="oldPassword"
              type="password"
              label="Old Password"
              fullWidth
              sx={{ mb: 2 }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <MyInput
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
              sx={{ mb: 2 }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <MyInput
              onChange={(e) => {
                setConfirmNewPass(e.target.value);
              }}
              name="confirmNewPassword"
              type="password"
              label="Confirm New Password"
              fullWidth
              sx={{ mb: 2 }}
              required
            />
          </Grid>
          {(newPass != "" && confirmNewPass != "") && (
            <Grid item xs={12} sm={12} md={6}>
              {newPass == confirmNewPass ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "center",
                  }}
                >
                  <Icons.Tick style={{ color: "green" }} />
                  <Typography>Passwords Match</Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "center",
                  }}
                >
                  <Icons.Cross style={{ color: "red", fontWeight: "bold" }} />
                  <Typography color="red">Passwords not match</Typography>
                </Box>
              )}
            </Grid>
          )}
        </Grid>

        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          change Password
        </Button>
      </MyForm>
    </Box>
  );
};

export default ChangePassword;
