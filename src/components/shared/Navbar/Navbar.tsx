"use client";

import assets from "@/assets";
import useUserInfo from "@/hooks/useUserInfo";
import { Icons } from "@/icons";
import { logoutUser } from "@/services/serverActions/logoutUser";
import { Box, Button, Container, Icon, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const user = useUserInfo();

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <Container>
      <Stack py={2} direction="row" alignItems="center" justifyContent="space-between">
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
          <Typography>Home</Typography>
          <Typography>About Us</Typography>
          <Typography>Profile</Typography> {/*if logged in*/}
          <Typography component={Link} href="/donors">
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
