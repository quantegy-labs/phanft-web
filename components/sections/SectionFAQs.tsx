import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";

const styles = {
  headings: {
    mb: 2,
    textAlign: "center",
  },
  introText: {
    mb: 1,
    textAlign: "center",
  },
  faqWrap: {
    mt: 6,
    mb: 8,
  },
  glossaryTerm: {
    mb: 1,
  },
  glossaryDesc: {
    mb: 3,
  },
};

const SectionFAQs = (): JSX.Element => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section id="faq">
      <Box sx={styles.headings}>
        <Typography variant="h3">NFTs for Noobs</Typography>
        <Typography variant="h4">Just Relax, You&apos;re Doing Fine</Typography>
      </Box>
      <Typography sx={styles.introText}>
        We appreciate that NFTs, blockchain, and cryptocurrency are all new
        territories - each with their own steep learning curve and risks to be
        aware of. We also know that for many of you, this will be your first
        time learning about and/or investing in an NFT project.
      </Typography>
      <Typography sx={styles.introText}>
        In this new and fast evolving space we are all n00bs and it&apos;s best
        to approach it all with an open, learner&apos;s mind.
      </Typography>
      <Typography sx={styles.introText}>
        We&apos;ve put together this Helping Phriendly Guide (FAQ) to help you
        navigate the important things to understand.
      </Typography>
      <Typography sx={styles.introText}>
        Please jump to the glossary section at the bottom for simple
        explanations of the key terms and concepts here.
      </Typography>
      <Box sx={styles.faqWrap}>
        <Box sx={styles.headings}>
          <Typography variant="h3">Frequently Asked Questions</Typography>
          <Typography variant="subtitle1">
            Some of the most commonly asked questions for beginners
          </Typography>
        </Box>
        <Accordion expanded={expanded === "q1"} onChange={handleChange("q1")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q1-content"
            id="q1-header"
          >
            <Typography>What is Discord?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Discord hosts our PhanFT community hub. It&apos;s a place to get
              real time updates on the project, hang out, engage with the
              community, discuss a variety of interests, and plants seeds for
              serendipity. It has become the gold standard community platform
              for NFT projects, and by the end of 2022 we expect every brand
              will have one.{" "}
              <Link
                href="https://discord.com/invite/P5VpF5f7qx"
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                Join here
              </Link>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q2"} onChange={handleChange("q2")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q2-content"
            id="q2-header"
          >
            <Typography>What is an NFT?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NFT stands for “Non-Fungible Token” and it is a unique,
              one-of-a-kind digital item that users can buy, own, and trade on
              the blockchain. NFTs are bought and sold using cryptocurrencies
              (most commonly Ethererum).
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q3"} onChange={handleChange("q3")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q3-content"
            id="q3-header"
          >
            <Typography>Where on the Blockchain do NFTs live?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Currently, most NFTs on the market live on the Ethereum
              blockchain. But there are other blockchains as well supporting
              NFTs including Solana, Polygon, and others.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q4"} onChange={handleChange("q4")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q4-content"
            id="q4-header"
          >
            <Typography>Okay, but what can an NFT be?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              An NFT can represent almost anything such as: Digital Collectibles
              Artwork Concert Tickets Video Games Music &amp; Publishing
              Contracts to real-world assets such as Real Estate Digital ID and
              Avatar Club Membership Cards And many more…
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q5"} onChange={handleChange("q5")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q5-content"
            id="q5-header"
          >
            <Typography>How is ownership of the NFT guaranteed?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ownership is written into the smart contract that lives on the
              blockchain forever and governs the rights of that digital asset.
              This is what allows digital items such as images (which as we know
              them historically are easily cloneable) to now be bought, sold, or
              traded with both trust and transparency.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q6"} onChange={handleChange("q6")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q6-content"
            id="q6-header"
          >
            <Typography>
              What are the essential characteristics and benefits of NFTs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Unique - An NFT&rsquo;s metadata describes what makes this asset
              different from all the rest in a collection. This is a permanent,
              unalterable record that describes what this NFT represents, like
              the certificate of authenticity that you&rsquo;d get with a rare
              painting. Rare - Scarcity is an important ingredient in the recipe
              that makes NFTs so attractive. While developers have the freedom
              to generate an infinite supply of certain assets, they also have
              the power to limit the number of rare, desirable items in
              existence. This preserves value. It&rsquo;s the same reason a
              physical show print is made in limited allotments. Sure, the
              artist could print 20,000 for the whole venue but they
              wouldn&rsquo;t sell them all, and they wouldn&rsquo;t hold
              long-term value. Supply and demand economics holds true with NFTs
              too. Ownership - Blockchain technology proves your ownership while
              making the change of ownership rights easy. Just like you own a
              physical piece of art (like a show poster), you own this digital
              art. You can choose to keep it, sell it, trade it, commercialize
              it, or exploit it in other ways as you see fit, depending on the
              rights assigned to you in the smart contract. Transferability -
              NFTs can be freely traded, transferred, or sold. Security &amp;
              Authenticity - The smart contract behind the NFT prevents fraud
              prevention, a problem affecting everything from art to concert
              tickets, collectibles, fashion, even wine. Blockchain powered NFTs
              are the perfect weapon against counterfeiting while giving buyers
              confidence that they&rsquo;ll get what they paid for.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q7"} onChange={handleChange("q7")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q7-content"
            id="q7-header"
          >
            <Typography>
              Why can&apos;t I just right-click and save these digital items or
              take a screenshot of it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sure, you could take a screenshot but you don&rsquo;t own it. You
              can&rsquo;t sell it, trade it, or prove you own it on the
              blockchain. You can&rsquo;t redeem it for perks and
              accessibilities that owning the real one would grant you. For ex:
              I can take a picture of a $100 bill but it doesn&rsquo;t mean I
              actually have that money, and no merchant would accept my picture
              of that bill. I can take a picture of a gym membership card, but
              if I tried to use it, it wouldn&rsquo;t grant me access to the
              gym.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q8"} onChange={handleChange("q8")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q8-content"
            id="q8-header"
          >
            <Typography>How do I mint an NFT?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Here&rsquo;s the general process to buying an NFT from an on-sale
              (aka minting). Step 1: you need to buy some Ethererum. It can be
              purchased easily on Coinbase using dollars or most other global
              currencies. If you&rsquo;re new to buying Ethereum (or any other
              cryptocurrency) we recommend using Coinbase. Step 2: to transfer
              the Ethereum you bought (or already owned), to a wallet that can
              purchase the NFT. We recommend Metamask. You can download and
              install as a Chrome Browser Extension, and as a mobile app for iOS
              and Android. Here&rsquo;s an instructional{" "}
              <Link
                href="https://www.youtube.com/watch?v=ZIGUC9JAAw8"
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                YouTube video
              </Link>{" "}
              showing how. Step 3: Transfer the necessary amount of Ethereum
              (ETH) + .05 to .10 extra ETH for gas fees (i.e. transactions fees)
              to your Metamask wallet. Step 4: Authenticate your wallet on the
              website where you&rsquo;ll be buying the NFT by pressing the
              “Connect Wallet” button. Step 5: When the mint is live, press the
              “Mint” or “Buy” button on the website, and enter the number of
              NFTs you want to buy. Metamask will pop up and you&rsquo;ll be
              able to see estimated gas fees and approve or reject the
              transaction. If you&rsquo;re okay with the fees click “approve”
              and you&rsquo;re done! You&rsquo;ll know whether the mint was
              successful and will soon see the NFT appear in your Metamask
              mobile wallet. Note: you can&rsquo;t view your NFTs in the
              Metamask desktop Chrome extension. Note: when we announce the
              minting date for The Lizards we&rsquo;ll be publishing a separate
              “Rollout” section to the website to walk you through our
              specifics.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q9"} onChange={handleChange("q9")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q9-content"
            id="q9-header"
          >
            <Typography>
              What are gas fees? Do I need gas to buy an NFT?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              “Gas” is basically units of energy that&rsquo;s burned during a
              transaction on the Ethereum network, while computers are verifying
              transactions and adding them to the blockchain. Think of it as a
              transaction fee, and it goes directly to Ethereum miners who
              provide the computer power necessary to verify transactions. Gas
              prices fluctuate based on the demand at any given time. PhanFT
              does not receive a percentage of gas fees and has no control over
              network congestion or gas prices.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q10"} onChange={handleChange("q10")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q10-content"
            id="q10-header"
          >
            <Typography>
              If I mint a lizard, how will I know what traits and attributes its
              art will have?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Think of it like opening a baseball card pack and pulling one
              card. You don&rsquo;t know which player you get. With our Lizard
              collection, each Lizard is unique and different in traits, with
              some more rare than others. You have the option of minting up to 5
              Lizards per wallet address at the on-sale. If you&rsquo;re seeking
              to acquire a rarer one, or find another in the collection whose
              art you like better, you can always trade with other holders or
              sell them. Likewise, you could equally mint one of the rarest,
              most unique, and cool looking ones of the whole collection. This
              includes a Rutherford The Brave, of which 25 are being included in
              the collection.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q11"} onChange={handleChange("q11")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q11-content"
            id="q11-header"
          >
            <Typography>
              What if I want to sell my lizard NFT sometime after I buy it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can sell your Lizard(s) anytime. There are several
              marketplaces where you can buy/sell NFTs, the market leader being
              OpenSea. OpenSea is like eBay for buying and selling NFTs. We
              encourage you to check the site out and spend some time exploring.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q12"} onChange={handleChange("q12")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q12-content"
            id="q12-header"
          >
            <Typography>How can I make money here?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When the Lizard collection is sold out, there will be a secondary
              market for buyers and sellers. As it stands today, most of this
              activity will happen on OpenSea.io. Once more phans want to own a
              lizard than ones available, you&rsquo;d be able to sell yours for
              a profit. We recommend buying multiple Lizards so you can sell
              some if you wish, and keep at least one to remain a member of our
              community and receive all the phan-centric benefits and perks we
              offer Lizard holders. Remember that all sales (including secondary
              market sales) pay a royalty to the artist, which will make them
              very happy.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q13"} onChange={handleChange("q13")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q13-content"
            id="q13-header"
          >
            <Typography>
              How do I help save the race of lizards from extinction?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Buy at least one (1) Lizard during our Mint. It will remove it
              from their life of purgatory in Prussia and bring them safely to
              the Phanaverse where they can live in peace, harmony, and
              tranquility.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "q14"} onChange={handleChange("q14")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="q14-content"
            id="q14-header"
          >
            <Typography>
              Other questions you&apos;d like us to add to this FAQ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please email them to hello(at)phanft.com. We&apos;ll keep this
              updated and as robust as possible so phans with all levels of tech
              acumen can understand this and choose whether to participate.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={styles.headings}>
        <Typography variant="h3">Glossary</Typography>
        <Typography variant="subtitle1">
          Listed in order to maximize understanding
        </Typography>
      </Box>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        NFT
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        NFT stands for “Non-Fungible Token” and it is a unique, one-of-a-kind
        digital item that users can buy, own, and trade on the blockchain. NFTs
        are bought and sold using cryptocurrencies.
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        Non-Fungibile
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        A non-fungible asset is something unique and irreplaceable. It
        can&rsquo;t be swapped for the same good in like kind. An autographed
        book, a rare old coin, or The Great Went Pollock Walking Fish, is
        non-fungible as they both can&rsquo;t be easily replaced. A physical art
        print is non-fungible. An NFT is non-fungible.&nbsp;
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        Fungibile
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        In simple words, fungibility refers to something replaceable or
        exchangeable. An asset or a good is fungible if you can replace or
        exchange all or part of it with another indistinguishable equivalent.
        Currencies (imagine a $5 bill), Gold, Wheat, Oil, are all fungible
        goods. A $5 bill is completely exchangeable with any $5 bill - its value
        is exactly the same.
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        Crypto Wallets
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        Buying, storing, and selling NFTs is quite simple and you do it all
        through a crypto wallet. Think of it like a digital version of the
        wallet you carry around in your pocket or purse. Except only you hold
        the special keys and the password to open it. And it&rsquo;s important
        you safeguard those keys by keeping them written somewhere safe. They
        are the only way to access or restore your wallet. More on wallets here
        in this{" "}
        <Link
          href="https://www.youtube.com/watch?v=d8IBpfs9bf4"
          target="_blank"
          rel="noreferrer"
          color="inherit"
        >
          explainer video on YouTube
        </Link>
        .
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        Mint or Minting
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        The process by which an NFT becomes part of the blockchain. Once an
        asset is put on the blockchain, it is “minted” as a token and cannot be
        altered. Just like how physical coins are minted and put into
        circulation, it&rsquo;s the same for NFTs. If you buy a Lizard from us
        directly when they go on-sale, you are Minting a Lizard.
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        Ethereum
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        The largest blockchain with smart contract functionality. Ethereum is
        currently the main platform for NFT projects. The Ethereum blockchain
        acts as a decentralized computer in addition to being a distributed
        ledger. It can run blockchain-based applications called “Smart
        Contracts”.
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        Ether (or ETH)
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        The cryptocurrency of the Ethereum blockchain. Ether can be purchased
        using fiat currency such as U.S. dollars on a variety exchanges such as
        Coinbase, or within certain crypto Wallets such as Metamask.
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        Smart Contacts
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        These are simply programs stored on a blockchain that run when
        predetermined conditions are met. They typically are used to automate
        the execution of an agreement so that all participants can be
        immediately certain of the outcome, without any intermediary&apos;s
        involvement or time loss. In the case of PhanFT, smart contracts are how
        ownership is determined, and how payments to multiple parties including
        the seller, the artist, and the charity partner are automatically made
        when a transaction takes place.
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        Gas
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        “Gas” is used to describe a unit of measurement for the amount of
        computational power needed for executing specific operations on the
        Ethereum network. When buying an NFT on the Ethereum network, it&rsquo;s
        a cost necessary to perform the transaction. The price of gas fluctuates
        based on network congestion at that moment. ETH Gas prices are
        denominated in a unit known as gwei, which is a term used to refer to an
        amount of ETH equal to 0.000000001 ETH. The total gas used to mint your
        NFT will become your transaction fee. There&rsquo;s lots of articles and
        YouTube videos explaining this in more depth.{" "}
        <Link
          href="https://youtu.be/hQ78FVSv-vs"
          target="_blank"
          rel="noreferrer"
          color="inherit"
        >
          Here&rsquo;s a 3 minute explainer video on YouTube.
        </Link>
      </Typography>
      <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
        NFT Marketplaces
      </Typography>
      <Typography sx={styles.glossaryDesc}>
        Websites such as Opensea.io where you can buy and sell NFT items. These
        marketplaces are similar to eBay. You can easily buy and sell NFTs here
        for a fixed price or in an auction.
      </Typography>
    </section>
  );
};

export default SectionFAQs;
