"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import { Icons } from "@/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutUser } from "@/services/serverActions/logoutUser";
import useUserInfo from "@/hooks/useUserInfo";

const pages2 = [
  { path: "/", name: "Home" },
  { path: "/about-us", name: "About Us" },
  { path: "/donors", name: "Find Blood" },
];
const settings = ["Profile", "Logout"];

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUserInfo();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logoutUser(router);
    handleCloseUserMenu();
  };
  const getLinkStyles = (href: string) => ({
    textDecoration: "none",
    color: pathname === href ? "#A8174E" : "inherit",
    borderBottom: pathname === href ? "2px solid #A8174E" : "none",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#A8174E",
      borderBottom: "2px solid #A8174E",
    },
  });

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* logo visible in md  */}
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Box>
            <Icons.DropDouble size={20} color="#A8174E" />
          </Box>
          <Typography variant="h5" component="h1" fontWeight={600}>
            Bl
            <Box component="span" color={"primary.main"}>
              oo
            </Box>
            d & Connect
          </Typography>
        </Stack>
        {/* menu-> visible in xs   */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Icons.MenuSquare size={27} onClick={handleOpenNavMenu} />
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages2.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography
                  component={Link}
                  href={page.path}
                  sx={getLinkStyles(page.path)}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* logo visible in xs  */}
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Box>
            <Icons.DropDouble size={16} color="#A8174E" />
          </Box>
          <Typography variant="h6" component="h1" fontWeight={600}>
            Bl
            <Box component="span" color={"primary.main"}>
              oo
            </Box>
            d & Connect
          </Typography>
        </Stack>

        {/* menu-> visible in md   */}
        <Stack direction="row" alignItems="center" gap={5}>
          <Stack
            direction="row"
            alignItems="center"
            gap={5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {pages2.map((page) => (
              <Typography
                key={page.name}
                component={Link}
                href={page.path}
                sx={getLinkStyles(page.path)}
              >
                {page.name}
              </Typography>
            ))}
          </Stack>
          {user?.id ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Icons.UserProfile size={30} color="black"/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" component={Link} href="/dashboard/profile">{settings[0]}</Typography>
                </MenuItem>
                <MenuItem key={settings[1]} onClick={handleLogout}>
                  <Typography textAlign="center">{settings[1]}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
export default Navbar;
