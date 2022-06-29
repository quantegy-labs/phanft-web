import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const styles = {
  headings: {
    textAlign: "center",
    mb: 2,
  },
  introText: {
    mb: 6,
    fontSize: "1.25rem",
    textAlign: "center",
  },
  memberWrap: {},
  title: {
    textAlign: "center",
    mb: 2,
  },
  subtitle: {
    lineHeight: 1.3,
    textAlign: "center",
    mb: 2,
  },
  text: {
    mb: 2,
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
          We&apos;re a small team of tech-savvy, long-time phans who are set on
          creating the greatest phan experience in Web3.
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
              <Typography variant="h5" component="h4" sx={styles.title}>
                David
              </Typography>
              <Typography
                variant="overline"
                component="h6"
                sx={styles.subtitle}
              >
                Product Strategy & Partnerships
              </Typography>
              <Typography sx={styles.text}>
                Serial music-tech founder, digital experience creator, and
                community builder.
              </Typography>
              <Typography>
                <strong>
                  <em>Finally got his Axilla II.</em>
                </strong>
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
              <Typography variant="h5" component="h4" sx={styles.title}>
                Drew
              </Typography>
              <Typography
                variant="overline"
                component="h6"
                sx={styles.subtitle}
              >
                Technology & Engineering.
              </Typography>
              <Typography sx={styles.text}>
                Staff member of a blue chip DeFi company and lifelong musician.
              </Typography>
              <Typography>
                <strong>
                  <em>
                    Still stuck in the Tahoe Tweezer, or is this still Lawn Boy?
                  </em>
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
              <Typography variant="h5" component="h4" sx={styles.title}>
                Ian
              </Typography>
              <Typography
                variant="overline"
                component="h6"
                sx={styles.subtitle}
              >
                Community Builder & Discord Mod
              </Typography>
              <Typography sx={styles.text}>
                Grassroots social engagement, brand awareness, and fostering
                communities.
              </Typography>
              <Typography>
                <strong>
                  <em>
                    Will be seeing many shows during the Summer 2022 Tour.
                  </em>
                </strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionTeam;
