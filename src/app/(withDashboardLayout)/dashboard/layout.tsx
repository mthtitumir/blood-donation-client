// import ResponsiveAppBar from "@/components/shared/Navbar/NavbarTest";
import DashboardDrawer from "@/components/ui/dashboard/DashboardDrawer";
import { ChildrenProps } from "@/types";

const DashboardLayout = ({ children }: ChildrenProps) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
