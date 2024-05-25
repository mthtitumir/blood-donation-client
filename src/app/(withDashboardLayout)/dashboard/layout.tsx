// import ResponsiveAppBar from "@/components/shared/Navbar/NavbarTest";
import { ChildrenProps } from "@/types";
import { Box } from "@mui/material";

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Box className="min-h-screen">{children}</Box>
    </>
  );
};

export default DashboardLayout;
