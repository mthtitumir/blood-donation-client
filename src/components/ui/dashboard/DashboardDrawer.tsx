"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Stack } from "@mui/material";
import { Icons } from "@/icons";
import DashboardSideBar from "./DashboardSidebar";
import { useGetMeQuery } from "@/redux/features/user/userApi";

const drawerWidth = 240;

export default function DashboardDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const { data, isLoading } = useGetMeQuery({});

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* navbar of dashboard  */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#FFFDD0",
          boxShadow: 0,
          borderBottom: "1px solid #ddd",
          py: 1,
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Icons.MenuSquare size={30} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{ color: "rgba(11, 17, 52, 0.6)" }}
              >
                Hi, {isLoading ? "Loading..." : data?.data?.name},
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: "primary.main",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Welcome to Blood & Connect!
              </Typography>
            </Box>
            <Stack direction="row" gap={3}>
              <Badge badgeContent={1} color="primary">
                <IconButton sx={{ background: "#ffffff" }}>
                  <Icons.NotificationOutline />
                </IconButton>
              </Badge>
              <Avatar alt={data?.name} src={data?.profilePhoto} />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      {/* drawer sidebar  */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#FFFDD0",
            },
          }}
        >
          <DashboardSideBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#FFFDD0",
            },
          }}
          open
        >
          <DashboardSideBar />
        </Drawer>
      </Box>
      {/* children component  */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: "white",
        }}
      >
        <Toolbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
