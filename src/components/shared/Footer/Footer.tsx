import assets from "@/assets";
import { Icons } from "@/icons";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="#1E2833">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          py={3}
          style={{ borderBottom: "1px solid #979797" }}
        >
          <Stack direction="row" alignItems="center" gap={3}>
            <Image
              src={assets.images.blood_drop}
              width={20}
              height={20}
              alt="logo"
            />
            <Typography
              variant="h5"
              component={Link}
              href="/"
              fontWeight={600}
              color="white"
            >
              Bl
              <Box component="span" color={"primary.main"}>
                oo
              </Box>
              d & Connect
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={3}>
            <Typography color="white">Ready to get started?</Typography>
            <Button>Donate</Button>
          </Stack>
        </Stack>
        {/* <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 Blood & Connect. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            Bl
            <Box component="span" color={"primary.main"}>
              oo
            </Box>
            d & Connect
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack> */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Stack>
            <Typography color="#fff" component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography color="#fff">Health Plans</Typography>
            <Typography color="#fff">Medicine</Typography>
            <Typography color="#fff">Diagnostics</Typography>
            <Typography color="#fff">NGOs</Typography>
          </Stack>
          <Stack>
            <Typography color="#fff" component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography color="#fff">Health Plans</Typography>
            <Typography color="#fff">Medicine</Typography>
            <Typography color="#fff">Diagnostics</Typography>
            <Typography color="#fff">NGOs</Typography>
          </Stack>
          <Stack>
            <Typography color="#fff" component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography color="#fff">Health Plans</Typography>
            <Typography color="#fff">Medicine</Typography>
            <Typography color="#fff">Diagnostics</Typography>
            <Typography color="#fff">NGOs</Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pb={3}
        >
          <Stack direction="row" gap={3} alignItems="center">
            <Typography component="p" color="white">
              &copy;2024 Blood & Connect. All Rights Reserved.
            </Typography>
          </Stack>
          <Stack direction="row" gap={3} alignItems="center">
            <Icons.Facebook size={25} color="#1877F2" />
            <Icons.Instagram size={25} color="orangered" />
            <Icons.Twitter size={25} color="#1DA1F2" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
