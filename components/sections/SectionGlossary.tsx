import { Box, Typography } from "@mui/material";
import Link from "next/link";

const styles = {
  headings: {
    mb: 2,
    textAlign: "center",
  },
  glossaryTerm: {
    mb: 1,
  },
  glossaryDesc: {
    mb: 3,
  },
};

const SectionGlossary = (): JSX.Element => (
  <>
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
      A non-fungible asset is something unique and irreplaceable. It can&apos;t
      be swapped for the same good in like kind. An autographed book, a rare old
      coin, or The Great Went Pollock Walking Fish, is non-fungible as they both
      can&apos;t be easily replaced. A physical art print is non-fungible. An
      NFT is non-fungible.&nbsp;
    </Typography>
    <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
      Fungibile
    </Typography>
    <Typography sx={styles.glossaryDesc}>
      In simple words, fungibility refers to something replaceable or
      exchangeable. An asset or a good is fungible if you can replace or
      exchange all or part of it with another indistinguishable equivalent.
      Currencies (imagine a $5 bill), Gold, Wheat, Oil, are all fungible goods.
      A $5 bill is completely exchangeable with any $5 bill - its value is
      exactly the same.
    </Typography>
    <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
      Crypto Wallets
    </Typography>
    <Typography sx={styles.glossaryDesc}>
      Buying, storing, and selling NFTs is quite simple and you do it all
      through a crypto wallet. Think of it like a digital version of the wallet
      you carry around in your pocket or purse. Except only you hold the special
      keys and the password to open it. And it&apos;s important you safeguard
      those keys by keeping them written somewhere safe. They are the only way
      to access or restore your wallet. More on wallets here in this{" "}
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
      The process by which an NFT becomes part of the blockchain. Once an asset
      is put on the blockchain, it is “minted” as a token and cannot be altered.
      Just like how physical coins are minted and put into circulation,
      it&apos;s the same for NFTs. If you buy a Lizard from us directly when
      they go on-sale, you are minting a Lizard.
    </Typography>
    <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
      Ethereum
    </Typography>
    <Typography sx={styles.glossaryDesc}>
      The largest blockchain with smart contract functionality. Ethereum is
      currently the main platform for NFT projects. The Ethereum blockchain acts
      as a decentralized computer in addition to being a distributed ledger. It
      can run blockchain-based applications called “Smart Contracts”.
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
      predetermined conditions are met. They typically are used to automate the
      execution of an agreement so that all participants can be immediately
      certain of the outcome, without any intermediary&apos;s involvement or
      time loss. In the case of PhanFT, smart contracts are how ownership is
      determined, and how payments to multiple parties including the seller, the
      artist, and the charity partner are automatically made when a transaction
      takes place.
    </Typography>
    <Typography variant="h5" component="h4" sx={styles.glossaryTerm}>
      Gas
    </Typography>
    <Typography sx={styles.glossaryDesc}>
      “Gas” is used to describe a unit of measurement for the amount of
      computational power needed for executing specific operations on the
      Ethereum network. When buying an NFT on the Ethereum network, it&apos;s a
      cost necessary to perform the transaction. The price of gas fluctuates
      based on network congestion at that moment. ETH Gas prices are denominated
      in a unit known as gwei, which is a term used to refer to an amount of ETH
      equal to 0.000000001 ETH. The total gas used to mint your NFT will become
      your transaction fee. There&apos;s lots of articles and YouTube videos
      explaining this in more depth.{" "}
      <Link
        href="https://youtu.be/hQ78FVSv-vs"
        target="_blank"
        rel="noreferrer"
        color="inherit"
      >
        Here&apos;s a 3 minute explainer video on YouTube.
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
  </>
);

export default SectionGlossary;
