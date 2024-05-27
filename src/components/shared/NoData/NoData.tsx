import { Icons } from "@/icons";
import { Box, Typography } from "@mui/material";

const NoData = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        gap: 2,
      }}
    >
      <Box
        sx={{
          boxShadow: 1,
          p: 5,
          borderRadius: 8,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Icons.NoData size={40} />
        <Typography variant="h6">No Data</Typography>
      </Box>
    </Box>
  );
};

export default NoData;
