"use client"

import { Icons } from "@/icons";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Box, Button, Container, Icon, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const user = useAppSelector(useCurrentUser);
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between">
        <Typography variant="h5" component="h1" fontWeight={600}>
          Bl
          <Box component="span" color={"primary.main"}>
            oo
          </Box>
          d & Connect
        </Typography>
        <Stack direction="row" alignItems="center" gap={5}>
          <Typography>Home</Typography>
          <Typography>About Us</Typography>
          <Typography>Profile</Typography> {/*if logged in*/}
          <Typography component={Link} href="/donors">
            Find Blood
          </Typography>
          {user ? (
            <Button component={Link} href="/login">
              Logout
            </Button>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
          {/*if not logged in*/}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
