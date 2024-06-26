"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";
import MySelect from "@/components/forms/MySelect";
import MyDatePicker from "@/components/forms/MyDatePicker";
import { FormatDate } from "@/utils/FormatDate";
import { bloodGroups } from "@/constants";
import { registerUser } from "@/services/serverActions/registerUser";
import toast from "react-hot-toast";
import { loginUser } from "@/services/serverActions/loginUser";
import { storeUserInfo } from "@/services/auth.service";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  age: 18,
  location: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    values.lastDonationDate = FormatDate(values.lastDonationDate);
    values.age = Number(values.age);
    // console.log({ values });
    try {
      const res = await registerUser(values);
      // console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await loginUser({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      toast.error(err.message);
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
              <Typography variant="h3" fontWeight={600} color="primary.main">
                Welcome
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={500}>
                Register now to donate or request for blood.
              </Typography>
            </Box>
          </Stack>

          <Box>
            <MyForm onSubmit={handleRegister} defaultValues={defaultValues}>
              <Grid container spacing={2} my={1}>
                <Grid item xs={12}>
                  <MyInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyInput
                    label="Age"
                    type="number"
                    fullWidth={true}
                    name="age"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MySelect
                    label="Blood Type"
                    items={bloodGroups}
                    fullWidth={true}
                    name="bloodType"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyInput label="Location" fullWidth={true} name="location" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyDatePicker
                    label="Last Donation"
                    fullWidth={true}
                    name="lastDonationDate"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MyInput label="Bio" fullWidth={true} name="bio" />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Already have an account? <Link href="/login">Login</Link>
              </Typography>
            </MyForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
