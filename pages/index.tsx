import { Divider, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AppLayout from "../components/layouts/AppLayout";
import SectionBenefits from "../components/sections/SectionBenefits";
import SectionFAQs from "../components/sections/SectionFAQs";
import SectionMission from "../components/sections/SectionMission";
import SectionRoadmap from "../components/sections/SectionRoadmap";
import SectionSignUp from "../components/sections/SectionSignUp";
import SectionTeam from "../components/sections/SectionTeam";

const styles = {
  banner: {
    py: 10,
    backgroundColor: "#dddaaa",
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PhanFT | Welcome</title>
      </Head>
      <AppLayout>
        <Typography>
          By phans, for phans, PhanFT is a series of blockchain-powered NFT
          projects to celebrate and further solidify this amazing music and
          art-loving community under shared purpose and common passions.
        </Typography>
        <Typography>
          Together, we&apos;re lighting the torch for a whole new paradigm for
          Phans to connect, spread joy, and share in the groove with the
          greatest band and community in the world.
        </Typography>
        <Divider />
        <Typography variant="h3">The Lizards</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Image
              width={300}
              height={300}
              src="/lizard1.png"
              alt="Lizards Genesis PFP"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>
              Our genesis project is The Lizards - a limited collection of 2001
              NFTs, where ownership doubles as your membership to the ultimate
              Phan club loaded with benefits, utility, and perks.
            </Typography>
            <Typography>
              Each Lizard is unique and programmatically generated from over 100
              possible art-traits, including expression, clothing, accessories,
              and other attributes that give a wink and a nod to the song&apos;s
              folklore.
            </Typography>
            <Typography>
              Some Lizards are illustrated as part of artist collaborations and
              even more rare. This first collection will also include 25
              extra-special NFTs minted at random of an aging knight in gnarly
              armor, who was once a lizard too.
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">The Corridor</Typography>
            <Typography>
              The Corridor is our PhanFT holders only meet up destination in the
              metaverse where Lizards and other creatures that seem oh-so-kind
              can gather and nerd out, play games, and flex their inner phandom.
            </Typography>
            <Typography>
              To access The Corridor and other members-only areas, Lizard
              holders will need to unhead the knee and sign in through their
              Metamask wallet.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">Sharin&apos; in the Groove</Typography>
            <Typography>
              A sizable portion of each minted PhanFT collection will be donated
              to the{" "}
              <a
                href="https://phish.com/waterwheel/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Waterwheel Foundation</strong>
              </a>{" "}
              and The{" "}
              <a href="https://mbird.org/" target="_blank" rel="noreferrer">
                <strong>Mockingbird Foundation </strong>
              </a>
              . These initial contributions will set the stage for a charitable
              component to our digital community going forward.
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">The Nitty Gritty</Typography>
            <Typography variant="h4">(Tech Specs)</Typography>
            <Typography>
              The Lizards are stored as ERC-721 tokens on the Ethereum
              blockchain and hosted on IPFS. If you&rsquo;re new to this process
              or just want some more info, please{" "}
              <Link href="/faq">
                <strong>see our FAQ page</strong>
              </Link>{" "}
              that explains things in more detail and helps to make the process
              super easy for you. Beginner friendly.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              width={300}
              height={300}
              src="/lizard3.png"
              alt="Lizards Genesis PFP"
            />
          </Grid>
        </Grid>
        <SectionMission />
        <SectionBenefits />
        <SectionRoadmap />
        <SectionTeam />
        <SectionFAQs />
        <SectionSignUp />
      </AppLayout>
    </>
  );
};

export default Home;
