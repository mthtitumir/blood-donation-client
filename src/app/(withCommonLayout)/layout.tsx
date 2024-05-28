import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ChildrenProps } from "@/types";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Navbar />
      <Box className="min-h-screen">{children}</Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
