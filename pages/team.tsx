import { Box, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const styles = {
  centeredIntro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    mb: 4,
  },
  introText: {
    mb: 6,
    textAlign: "center",
  },
};

const TeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PhanFT | Our Team</title>
      </Head>
      <Layout>
        <Box sx={styles.centeredIntro}>
          <Typography variant="h2">Who We Are</Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Meet the Phounders
          </Typography>
        </Box>
        <Container maxWidth="md">
          <Typography sx={styles.introText}>
            Our team consists of tech-savvy, long-time phans who are set on
            creating the greatest Phan experience in the metaverse. We&rsquo;re
            dedicated to building a high-value, long-term project.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4">Holy Blankenthal</Typography>
              <Typography>
                Creative, Product, Strategy, team QB. Serial entrepreneur in
                music-tech, experience creator, and community builder. Finally
                got his Axilla II.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4">Brother Wolfman</Typography>
              <Typography>
                Partnerships, marketer and in-house hustler. Paving the streets
                and promoting to the masses. Caught 12.5 of the Baker&apos;s
                Dozen 13.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4">Oz Zealot</Typography>
              <Typography>
                Metaverse futurist. Rages in code, focused on the details, and
                thinks smoke &amp; mirrors are lame. Loves a good Steam though.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default TeamPage;
