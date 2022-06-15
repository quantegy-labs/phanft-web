import { Star } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/layouts/PageLayout";

const BenefitsPage: NextPage = () => (
  <>
    <Head>
      <title>PhanFT | NFT Holder Benefits</title>
    </Head>
    <PageLayout pageTitle="Benefits" pageSubtitle="The PhanFT Membership">
      <List>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Invest in owning a one-of-a-kind, provably-rare digital collectable" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Each Lizard comes with one (1) limited edition physical art print" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Guaranteed pre-sale access to mint new PhanFT™ NFT collections before public on-sale" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Access to IRL and digital phan-centric perks from our community partners" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Invitations to member only events and gatherings with the PhanFT community, i.e., aftershows, pre-show meetups, and more" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Keys to The Corridor, our very own interactive gathering place in the metaverse being built for PhanFT holders." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Join our private Discord. Hang with your fellow phriends and flex your inner phandom with tour chatter, song trivia, couch tour watch parties, and more" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Ownership of each Lizard directly contributes to The Waterwheel Foundation and Mockingbird Foundation charity partners" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Star />
          </ListItemIcon>
          <ListItemText primary="Help us save the race of Lizards from extinction by minting them to the blockchain and join the quest to gain the knowledge that you lack" />
        </ListItem>
      </List>
    </PageLayout>
  </>
);

export default BenefitsPage;
