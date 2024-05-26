"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { loginUser } from "@/services/serverActions/loginUser";
import toast from "react-hot-toast";
import { storeUserInfo } from "@/services/auth.service";
import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/jwt";
import { setUser } from "@/redux/features/auth/authSlice";
import { TUser } from "@/types";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginUser] = useLoginMutation();

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);
    try {
      const resLogin = await loginUser({ email: values?.email, password: values?.password }).unwrap();
      console.log({resLogin});
      if (resLogin.data && resLogin.data.accessToken) {
        const user =  verifyToken(resLogin.data.accessToken) as TUser;
        dispatch(setUser({ user, token: resLogin.data.accessToken }));
        router.push(`/`);
        toast.success("Logged in successfully!");
      }
    } catch (error) {
      toast.error("Login failed!");
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login
              </Typography>
              <Typography variant="h5" component="h1" fontWeight={600}>
                Bl
                <Box component="span" color={"primary.main"}>
                  oo
                </Box>
                d & Connect
              </Typography>
            </Box>
          </Stack>
          <Box>
            <MyForm
              onSubmit={handleLogin}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12}>
                  <MyInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MyInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Link href={"/forgot-password"}>
                <Typography
                  mb={1}
                  textAlign="end"
                  component="p"
                  fontWeight={300}
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Link>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create an account</Link>
              </Typography>
            </MyForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
