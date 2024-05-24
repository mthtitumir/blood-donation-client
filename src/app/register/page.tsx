"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
// import { modifyPayload } from "@/utils/modifyPayload";
// import { registerPatient } from "@/services/actions/registerPatient";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { userLogin } from "@/services/actions/userLogin";
// import { storeUserInfo } from "@/services/auth.services";
// import PHForm from "@/components/Forms/PHForm";
// import MyInput from "@/components/Forms/MyInput";
import { z } from "zod";
import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";
import MySelect from "@/components/forms/MySelect";
import MyDatePicker from "@/components/forms/MyDatePicker";
import { FormatDate } from "@/utils/FormatDate";
import { bloodGroups } from "@/constants";

export const defaultValues = {
  name: "",
  email: "",
  password: "",
  age: 0,
  location: "",
};

const RegisterPage = () => {
  // const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    console.log({ values });
    values.lastDonationDate = FormatDate(values.lastDonationDate);
    // try {
    //   const res = await registerPatient(data);
    //   // console.log(res);
    //   if (res?.data?.id) {
    //     toast.success(res?.message);
    //     const result = await userLogin({
    //       password: values.password,
    //       email: values.patient.email,
    //     });
    //     if (result?.data?.accessToken) {
    //       storeUserInfo({ accessToken: result?.data?.accessToken });
    //       router.push("/dashboard");
    //     }
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
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
                Welcome
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
