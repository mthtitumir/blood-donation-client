import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ChildrenProps } from "@/types";

const CommonLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
