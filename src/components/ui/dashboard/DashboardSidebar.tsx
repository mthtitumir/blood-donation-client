import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { UserRole } from "@/types";
import { useEffect, useState } from "react";
import { DrawerItems } from "@/utils/DrawerItems";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.service";
import { Icons } from "@/icons";

const DashboardSideBar = () => {
  const [userRole, setUserRole] = useState<string | undefined>(undefined);
  const user = getUserInfo();
  useEffect(() => {
    setUserRole(user?.role);
  }, [user]);
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        {/* <Image src={assets.images.logo} width={40} height={40} alt="logo" style={{}} /> */}
        <Icons.DropDouble size={20} />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          Blood & Connect
        </Typography>
      </Stack>
      <List>
        {DrawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default DashboardSideBar;
