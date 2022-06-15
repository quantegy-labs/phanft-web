import { Typography } from "@mui/material";

const styles = {
  missionText: {
    mb: 4,
    textAlign: "center",
  },
};

const SectionMission = (): JSX.Element => (
  <>
    <Typography variant="h3">Why PhanFT?</Typography>
    <Typography variant="h4">Our Mission Statement</Typography>
    <Typography sx={styles.missionText}>
      The way people interact and engage digitally is evolving faster than ever.
      We&apos;re at the forefront of a new era where art and artists can thrive
      in the digital world with complete transparency, authenticity, and
      preserved value.
    </Typography>
    <Typography sx={styles.missionText}>
      Similar to how we phans were among the first in the mid-90&apos;s web1.0
      era to congregate and build digital community in newsgroups, chatrooms,
      and message boards to trade tapes, share show reviews and speculate over
      rumors; today we have a massive opportunity to become digital pioneers
      once again, and define what a passionate music community can do within the
      metaverse when co-creation is the core ethos.
    </Typography>
    <Typography sx={styles.missionText}>
      We believe that blockchain technology (in particular NFTs) is the ideal
      vehicle to enable being an active, participatory fan within a mutually
      beneficial ecosystem for artists and collectors alike.
    </Typography>
    <Typography sx={styles.missionText}>
      A key feature of each PhanFT™ collection is unlocking new revenue streams
      for creators and artists, by ensuring they get a percentage of every sale.
      Not just the initial sale. This was never possible before NFTs.
    </Typography>
    <Typography sx={styles.missionText}>
      At PhanFT, each NFT artist will receive a royalty every time their work is
      bought and then re-sold on the blockchain. Now, instead of making a
      one-time sale on an art print, the artist will get a cut every time their
      work exchanges hands, for years and years to come.
    </Typography>
    <Typography sx={styles.missionText}>
      Welcome to a new digital paradigm with endless possibilities. Consider
      this your invitation to jump in the pond (with us here to guide you) as we
      create the greatest Phan community in the metaverse.
    </Typography>
  </>
);

export default SectionMission;
