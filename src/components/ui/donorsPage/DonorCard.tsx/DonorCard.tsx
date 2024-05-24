import { Icons } from "@/icons";
import { TUser } from "@/types";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DonorCard = ({ donor }: { donor: TUser }) => {
  const placeholder =
    "https://static.vecteezy.com/system/resources/thumbnails/026/489/224/small_2x/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        border: "1px solid #610834",
        borderRadius: 2,
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
        <Box display="flex" gap={3} alignItems="center">
          <Typography component="h1" fontWeight={600}>
            {donor.name}
          </Typography>
          <Icons.Circle style={{ color: "green" }} size="12px" />
        </Box>
        <Typography>{donor.location}</Typography>
        <Typography>{donor.bloodType}</Typography>
      </Box>
    </Box>
  );
};

export default DonorCard;
