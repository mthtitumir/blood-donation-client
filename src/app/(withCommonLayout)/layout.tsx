import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
// import ResponsiveAppBar from "@/components/shared/Navbar/NavbarTest";
import { ChildrenProps } from "@/types";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Navbar />
      <Box className="min-h-screen">{children}</Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
