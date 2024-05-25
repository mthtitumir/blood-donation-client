import { Icons } from "@/icons";
import { TUser } from "@/types";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DonorCard = ({ donor }: { donor: TUser }) => {
  const placeholder =
    "https://static.vecteezy.com/system/resources/thumbnails/026/489/224/small_2x/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg";
  const iconStyle = {
    border: "1px solid #610834",
    borderRadius: "2px",
    padding: "0px",
    color: "#B32346",
    width: "14px",
  };
  return (
    <Box
      sx={{
        border: "1px solid #610834",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box sx={{ p: 1, borderRight: "1px solid #610834" }}>
          <Image
            width={100}
            height={100}
            src={
              "https://mth-titumir.web.app/assets/Titumir-Picture%20copy-f6460935.png"
            }
            alt="donor"
          />
        </Box>
        <Box p={1}>
          <Box display="flex" gap={2} alignItems="center">
            <Icons.NameOutline style={iconStyle} />
            <Typography component="h1" fontWeight={600}>
              {donor.name.toUpperCase()}
            </Typography>
          </Box>
          <Box display="flex" gap={2} alignItems="center">
            <Icons.LocationFill style={iconStyle} />
            <Typography component="h1" fontWeight={400}>
              {donor.location}
            </Typography>
          </Box>
          <Box display="flex" gap={2} alignItems="center">
            <Icons.BloodFill style={iconStyle} />
            <Typography component="h1" fontWeight={400}>
              {donor.bloodType.toUpperCase()}
            </Typography>
          </Box>
          <Box display="flex" gap={2} alignItems="center">
            <Icons.Circle style={iconStyle} />
            <Typography component="h1" fontWeight={400}>
              {donor.availability ? "Available" : "Not Available"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box >
        <Button component={Link} href={`/donors/${donor?.id}`} fullWidth={true} sx={{borderRadius: "0 0 4px 4px"}}>Donor Details</Button>
      </Box>
    </Box>
  );
};

export default DonorCard;
