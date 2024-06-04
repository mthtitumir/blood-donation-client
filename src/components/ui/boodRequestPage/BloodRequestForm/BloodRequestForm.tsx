"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import MyForm from "@/components/forms/MyForm";
import MyInput from "@/components/forms/MyInput";
import MySelect from "@/components/forms/MySelect";
import MyDatePicker from "@/components/forms/MyDatePicker";
import { FormatDate } from "@/utils/FormatDate";
import { bloodGroups } from "@/constants";
import toast from "react-hot-toast";
import { useAddRequestMutation } from "@/redux/features/requests/requestsApi";

const defaultValues = {
  phoneNumber: "",
  bloodType: "",
  reason: "",
  quantity: 450,
  hospitalAddress: "",
  hospitalName: "",
};

const BloodRequestForm = ({ id }: { id: string | undefined }) => {
  const router = useRouter();
  const [addRequest] = useAddRequestMutation();
  const handleRegister = async (values: FieldValues) => {
    values.dateOfDonation = FormatDate(values.dateOfDonation);
    values.quantity = Number(values.quantity);
    if (id) {
      values.donorId = id;
    }
    console.log({ values });
    // ====================================

    // ====================================
    try {
      const res = await addRequest(values).unwrap();
      console.log(res);
      if (res?.data?.bloodType) {
        toast.success(res?.message);
        router.push("/dashboard/my-requests");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: { md: "100vh", xs: "70vh" },
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
              {/* <Typography variant="h3" fontWeight={600} color="primary.main">
                Welcome
              </Typography> */}
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={500}>
                Request For Blood: {id}
              </Typography>
            </Box>
          </Stack>

          <Box>
            <MyForm onSubmit={handleRegister} defaultValues={defaultValues}>
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={6}>
                  <MySelect
                    label="Blood Type"
                    items={bloodGroups}
                    fullWidth={true}
                    name="bloodType"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyInput
                    label="Quantity(ML)"
                    fullWidth={true}
                    name="quantity"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyInput
                    label="Phone Number"
                    fullWidth={true}
                    name="phoneNumber"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyDatePicker
                    label="Donation Date"
                    fullWidth={true}
                    name="dateOfDonation"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MyInput
                    label="Hospital Name"
                    fullWidth={true}
                    name="hospitalName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MyInput
                    label="Hospital Address"
                    fullWidth={true}
                    name="hospitalAddress"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MyInput label="Reason" fullWidth={true} name="reason" />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Sent Request
              </Button>
            </MyForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default BloodRequestForm;
