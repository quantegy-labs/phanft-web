import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const styles = {
  headings: {
    textAlign: "center",
    mb: 2,
  },
  introText: {
    mb: 6,
    textAlign: "center",
  },
  memberWrap: {
    textAlign: "center",
  },
};

const SectionTeam = (): JSX.Element => {
  return (
    <Box component="section" id="team">
      <Container maxWidth="md">
        <Box sx={styles.headings}>
          <Typography variant="h3">Meet the Pham</Typography>
        </Box>
        <Typography sx={styles.introText}>
          We’re a few tech-savvy, long-time phans who are set on creating the
          greatest phan experience in Web3.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={styles.memberWrap}>
              <Image
                width={300}
                height={300}
                src="/lizard_david.png"
                alt="Team Member"
              />
              <Typography variant="h4">David</Typography>
              <Typography variant="h5">
                Creative, Product, Partnerships, Strategy.
              </Typography>
              <Typography>
                Serial music-tech founder, digital experience creator, and
                community builder.
              </Typography>
              <Typography>
                <strong>Finally got his Axilla II.</strong>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={styles.memberWrap}>
              <Image
                width={300}
                height={300}
                src="/lizard_drew.png"
                alt="Team Member"
              />
              <Typography variant="h4">Drew</Typography>
              <Typography variant="h5">
                Technology, Code, Contracts, Engineering.
              </Typography>
              <Typography>Staff member of a blue-chip DeFi company.</Typography>
              <Typography>
                <strong>
                  Still stuck in the Tahoe Tweezer, or is this still Lawn Boy?
                </strong>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={styles.memberWrap}>
              <Image
                width={300}
                height={300}
                src="/lizard_ian.png"
                alt="Team Member"
              />
              <Typography variant="h4">Forbin1228</Typography>
              <Typography variant="h5">
                Community Builder & Discord Moderator.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionTeam;
