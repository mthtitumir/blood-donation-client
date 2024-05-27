import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
      <CircularProgress />
    </Box>
  );
}

export default Spinner;