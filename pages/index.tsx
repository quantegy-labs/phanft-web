import { Divider, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PhanFT | Welcome</title>
      </Head>
      <Layout>
        <Typography variant="h2">Welcome to the Phanaverse!</Typography>
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
        <Typography>
          Our genesis project is The Lizards - a limited collection of 2001
          NFTs, where ownership doubles as your membership to the ultimate Phan
          club loaded with benefits, utility, and perks.
        </Typography>
        <Typography>
          Each Lizard is unique and programmatically generated from over 100
          possible art-traits, including expression, clothing, accessories, and
          other attributes that give a wink and a nod to the song&apos;s
          folklore.
        </Typography>
        <Typography>
          Some Lizards are illustrated as part of artist collaborations and even
          more rare. This first collection will also include 25 extra-special
          NFTs minted at random of an aging knight in gnarly armor, who was once
          a lizard too.
        </Typography>
        <Divider />
        <Typography variant="h3">Contact Us</Typography>
        <Divider />
        <Typography variant="h3">Benefits</Typography>
        <ul>
          <li>
            Invest in owning a one-of-a-kind, provably-rare digital collectable
          </li>
          <li>
            {" "}
            Each Lizard comes with one (1) limited edition physical art print
          </li>
          <li>
            Guaranteed pre-sale access to mint new PhanFT™ NFT collections
            before public on-sale
          </li>
          <li>
            Access to IRL and digital phan-centric perks from our community
            partners
          </li>
          <li>
            Invitations to member only events and gatherings with the PhanFT
            community, i.e., aftershows, pre-show meetups, and more
          </li>
          <li>
            Keys to The Corridor, our very own interactive gathering place in
            the metaverse being built for PhanFT holders.
          </li>
          <li>
            Join our private Discord. Hang with your fellow phriends and flex
            your inner phandom with tour chatter, song trivia, couch tour watch
            parties, and more
          </li>
          <li>
            Ownership of each Lizard directly contributes to The Waterwheel
            Foundation and Mockingbird Foundation charity partners
          </li>
          <li>
            Help us save the race of Lizards from extinction by minting them to
            the blockchain and join the quest to gain the knowledge that you
            lack
          </li>
        </ul>
        <Divider />
        <Typography variant="h3">The Corridor</Typography>
        <Typography>
          The Corridor is our PhanFT holders only meet up destination in the
          metaverse where Lizards and other creatures that seem oh-so-kind can
          gather and nerd out, play games, and flex their inner phandom.
        </Typography>
        <Typography>
          To access The Corridor and other members-only areas, Lizard holders
          will need to unhead the knee and sign in through their Metamask
          wallet.
        </Typography>
        <Typography variant="h3">Sharin&apos; in the Groove</Typography>
        <Typography>
          A sizable portion of each minted PhanFT collection will be donated to
          the{" "}
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
        <Typography variant="h3">The Nitty Gritty</Typography>
        <Typography variant="h4">(Tech Specs)</Typography>
        <Typography>
          The Lizards are stored as ERC-721 tokens on the Ethereum blockchain
          and hosted on IPFS. If you&rsquo;re new to this process or just want
          some more info, please{" "}
          <Link href="/faq">
            <strong>see our FAQ page</strong>
          </Link>{" "}
          that explains things in more detail and helps to make the process
          super easy for you. Beginner friendly.
        </Typography>
        <Divider />
        <Typography variant="h3">
          Lets get this show on the road!&nbsp;
        </Typography>
        <Typography variant="h3">Phase 1.0 Roadmap&nbsp;</Typography>
        <Typography>
          We&rsquo;re in it for the long haul-our intent is all for your
          delight.
        </Typography>
        <Typography>
          We&rsquo;ve set some milestones to keep us accountable and on-track to
          delivering this project&rsquo;s vision. As each percentage of Lizards
          sales is met below, we will start work on realizing that stated goal.
        </Typography>
        <Typography>25%</Typography>
        <Typography>
          The first 555 owners to purchase Lizards will receive a special
          physical merch item.
        </Typography>
        <Typography>40%</Typography>
        <Typography>
          We free 5 enslaved lizards (NFTs held back from the original sale) to
          be airdropped at random to existing Lizard holders.
        </Typography>
        <Typography>50%</Typography>
        <Typography>Halfway to the moon 🚀🌔</Typography>
        <Typography>60%</Typography>
        <Typography>
          Knuckle Bone Broth Avenue gets paved - think of this as a curated
          digital shakedown experience.
        </Typography>
        <Typography>75%</Typography>
        <Typography>
          The Corridor opens - our members-only interactive site with games,
          gatherings, guest appearances, and more.
        </Typography>
        <Typography>85%</Typography>
        <Typography>
          The Rhombus appears and a new portal is unlocked revealing a digital
          treasure hunt. Prizes include up to 2 ETH in rewards and exclusive
          1-of-1 minted characters including the great and knowledgeable
          Icculus.
        </Typography>
        <Typography>90%</Typography>
        <Typography>
          We throw a members-only, Lizard-holder party during the next tour
          complete w/ live music, drinks, raffles, and other fun stuff.
        </Typography>
        <Typography>100%</Typography>
        <Typography>
          We take the proceeds from our first successful mint selling out and
          invest right back into this community - dosing our brew with fresh
          batches of new (yet phamiliar) character-driven NFTs, special artist
          collabs, and even more value for holders digitally and IRL.
        </Typography>
        <Typography>
          Attn artists: if you&apos;re interested in designing the art for
          future collections{" "}
          <a href="mailto:hello@phanft.com">
            <strong>please contact us here. </strong>
          </a>
        </Typography>
        <Divider />
        <Typography variant="h4">MEET THE PHOUNDERS</Typography>
        <Typography>
          Our team consists of tech-savvy, long-time phans who are set on
          creating the greatest Phan experience in the metaverse. We&rsquo;re
          dedicated to building a high-value, long-term project.
        </Typography>
        <Typography variant="h4">Holy Blankenthal</Typography>
        <Typography>
          Creative, Product, Strategy, team QB. Serial entrepreneur in
          music-tech, experience creator, and community builder. Finally got his
          Axilla II.
        </Typography>
        <Typography variant="h4">Brother Wolfman</Typography>
        <Typography>
          Partnerships, marketer and in-house hustler. Paving the streets and
          promoting to the masses. Caught 12.5 of the Baker&apos;s Dozen 13.
        </Typography>
        <Typography variant="h4">Oz Zealot</Typography>
        <Typography>
          Metaverse futurist. Rages in code, focused on the details, and thinks
          smoke &amp; mirrors are lame. Loves a good Steam though.
        </Typography>
      </Layout>
    </>
  );
};

export default Home;
