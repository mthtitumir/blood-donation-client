import { Icons } from "@/icons";
import { TUserProfile } from "@/types";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
type TUserProfileProps = {
  rows: {
    key: string;
    value: string | number;
  }[];
  data: TUserProfile;
};
const UserProfile = ({ rows, data }: TUserProfileProps) => {
  
  return (
    <Grid container minHeight={"300px"} spacing={2}>
      <Grid item xs={12} sm={9}>
        <Box
          sx={{
            p: 2,
            border: "1px solid #610834",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              minHeight: "100px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="end"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="end"
                gap={3}
              >
                <Box>
                  <Image
                    width={100}
                    height={100}
                    src={
                      "https://mth-titumir.web.app/assets/Titumir-Picture%20copy-f6460935.png"
                    }
                    alt="donor"
                  />
                </Box>
                <Typography variant="h5" component="h1" fontWeight={600}>
                  {data?.name.toUpperCase()}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                gap={3}
              >
                <Icons.NotificationOutline style={{ width: "" }} size={30} />
                <Button component={Link} href={`/blood-request/${data?.userId}`}>
                  Request Blood
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box mt={2} borderTop="1px solid #610834">
            <Typography variant="h5" component="h1" textAlign="center" my={2}>
              About
            </Typography>
            <Table>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row?.value}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell width="40%" component="td" align="right">
                      {row.key ? row.key : "-----"}
                    </TableCell>
                    <TableCell width="10%" component="td"></TableCell>
                    <TableCell width="40%" component="td" align="left">
                      {row.value ? row.value : "-----"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Box
          sx={{
            p: 2,
            border: "1px solid #610834",
            borderRadius: 2,
          }}
        >
          <Box>
            <Typography variant="h6" component="h1" textAlign="center" my={1}>
              Donation History
            </Typography>
            <Table>
              <TableBody>
                {[1, 2, 3, 4].map((num) => (
                  <TableRow
                    key={num}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="td"
                      align="left"
                      sx={{ padding: "10px 0" }}
                    >
                      Last Donation
                    </TableCell>
                    <TableCell
                      component="td"
                      align="right"
                      sx={{ padding: "10px 0" }}
                    >
                      {data?.lastDonationDate ? data.lastDonationDate : "-----"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box mt={2} borderTop="1px solid #610834">
            a
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
