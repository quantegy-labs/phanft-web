import { Divider } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import AppLayout from "../components/layouts/AppLayout";
import SectionFAQs from "../components/sections/SectionFAQs";
import SectionInfo from "../components/sections/SectionInfo";
import SectionIntro from "../components/sections/SectionIntro";
import SectionLizards from "../components/sections/SectionLizards";
import SectionMission from "../components/sections/SectionMission";
import SectionOnboard from "../components/sections/SectionOnboard";
import SectionRoadmap from "../components/sections/SectionRoadmap";
import SectionTeam from "../components/sections/SectionTeam";

const styles = {
  leadWrap: {
    textAlign: "center",
  },
  leadText: {
    fontSize: "1.2rem",
    mb: 3,
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PhanFT | Welcome</title>
      </Head>
      <AppLayout>
        <SectionIntro />
        <SectionLizards />
        <SectionMission />
        <Divider />
        <SectionRoadmap />
        <Divider />
        <SectionInfo />
        <Divider />
        <SectionTeam />
        <Divider />
        <SectionFAQs />
        <SectionOnboard />
      </AppLayout>
    </>
  );
};

export default Home;
