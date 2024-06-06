import { bloodDonationObjectives } from "@/constants";
import { Icons } from "@/icons";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

const AboutUsPage = () => {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#A8174E"
              fill-opacity="1"
              d="M0,288L60,272C120,256,240,224,360,218.7C480,213,600,235,720,208C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mx: "auto",
            top: "20%",
            left: "50px",
            color: "#fff",
          }}
        >
          <Typography variant="h5" component="h1">
            About Us
          </Typography>
          <Typography color="#fff">
            Know about Blood & Connect. What, how, and why.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={5} mb={3}>
        <Grid item xs={12} sm={6}>
          <Stack direction="column" gap={2}>
            <Typography>
              Blood & Connect is an automated blood service that connect blood
              searchers with voluntary blood donors in a moment through SMS and
              website. Blood & Connect is a free service for all. Blood &
              Connect started its journey in 2018.
            </Typography>
            <Typography variant="h5" component="h1">
              Why Blood & Connect
            </Typography>
            <Typography>
              Though Bangladesh has more than 160 million people, the number of
              safe blood bank is very few. Without divisional towns, there is
              hardly any blood bank. But a huge amount of blood is needed for
              treatment purposes. A good number of accidents take place every
              day where blood needs essentially. As a result, people fall in
              real trouble to manage blood. But there are many blood donors who
              are interested in donating blood but don’t know who needs blood.
              The communication gap is resulting in the loss of many lives.
            </Typography>
            <Typography>
              Blood & Connect comes into the scenario to reduce or minimize the
              communication gap and connects people in a moment using the
              amazing power of SMS and email. As Blood & Connect services can
              also be availed by SMS, people from any class of the society can
              easily avail of Blood & Connect services.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction="column" gap={2}>
            <Typography variant="h5" component="h1">
              Vision
            </Typography>
            <Typography>
              Ensuring no more death just for the need of blood
            </Typography>
            <Typography variant="h5" component="h1">
              Mission
            </Typography>
            <Typography>
              Connecting blood searchers with voluntary blood donors in a moment
              with the use of technology.
            </Typography>
            <Typography variant="h5" component="h1">
              Objectives
            </Typography>
            <List>
              {bloodDonationObjectives?.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Icons.BloodOutlined size={16} color="#A8174E" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUsPage;
