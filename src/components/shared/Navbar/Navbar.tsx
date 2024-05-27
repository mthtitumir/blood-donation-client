"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { Icons } from "@/icons";
import { logoutUser } from "@/services/serverActions/logoutUser";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  
  const user = useUserInfo();

  const handleLogOut = () => {
    logoutUser(router);
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
        <Stack direction="row" gap={1} alignItems="center">
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
        <Stack direction="row" alignItems="center" gap={5}>
          <Typography component={Link} href="/" sx={getLinkStyles("/")}>
            Home
          </Typography>
          <Typography
            component={Link}
            href="/about-us"
            sx={getLinkStyles("/about-us")}
          >
            About Us
          </Typography>
          <Typography
            component={Link}
            href="/dashboard/profile"
            sx={getLinkStyles("/dashboard/profile")}
          >
            Profile
          </Typography>
          <Typography
            component={Link}
            href="/donors"
            sx={getLinkStyles("/donors")}
          >
            Find Blood
          </Typography>
          {user?.id ? (
            <Button color="error" onClick={handleLogOut} sx={{ boxShadow: 0 }}>
              Logout
            </Button>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
