import { Box, Link, Typography } from "@mui/material";

const styles = {
  headings: {
    textAlign: "center",
    mb: 2,
  },
  roadmapHeading: {
    textAlign: "center",
  },
  roadmapText: {
    mb: 4,
    textAlign: "center",
  },
  attentionText: {
    mt: 8,
    display: "block",
    textAlign: "center",
  },
};

const SectionRoadmap = (): JSX.Element => (
  <section id="roadmap">
    <Box sx={styles.headings}>
      <Typography variant="h3">
        Let&apos;s Get This Show On The Road!
      </Typography>
      <Typography variant="h4">Phase 1.0 Roadmap</Typography>
    </Box>
    <Typography sx={styles.roadmapText}>
      We&rsquo;re in it for the long haul-our intent is all for your delight.
    </Typography>
    <Typography sx={styles.roadmapText}>
      We&rsquo;ve set some milestones to keep us accountable and on-track to
      delivering this project&rsquo;s vision. As each percentage of Lizards
      sales is met below, we will start work on realizing that stated goal.
    </Typography>
    <Typography variant="h4" sx={styles.roadmapHeading}>
      25%
    </Typography>
    <Typography sx={styles.roadmapText}>
      The first 555 owners to purchase Lizards will receive a special physical
      merch item.
    </Typography>
    <Typography variant="h4" sx={styles.roadmapHeading}>
      40%
    </Typography>
    <Typography sx={styles.roadmapText}>
      We free 5 enslaved lizards (NFTs held back from the original sale) to be
      airdropped at random to existing Lizard holders.
    </Typography>
    <Typography variant="h4" sx={styles.roadmapHeading}>
      50%
    </Typography>
    <Typography sx={styles.roadmapText}>Halfway to the moon 🚀🌔</Typography>
    <Typography variant="h4" sx={styles.roadmapHeading}>
      60%
    </Typography>
    <Typography sx={styles.roadmapText}>
      Knuckle Bone Broth Avenue gets paved - think of this as a curated digital
      shakedown experience.
    </Typography>
    <Typography variant="h4" sx={styles.roadmapHeading}>
      75%
    </Typography>
    <Typography sx={styles.roadmapText}>
      The Corridor opens - our members-only interactive site with games,
      gatherings, guest appearances, and more.
    </Typography>
    <Typography variant="h4" sx={styles.roadmapHeading}>
      85%
    </Typography>
    <Typography sx={styles.roadmapText}>
      The Rhombus appears and a new portal is unlocked revealing a digital
      treasure hunt. Prizes include up to 2 ETH in rewards and exclusive 1-of-1
      minted characters including the great and knowledgeable Icculus.
    </Typography>
    <Typography variant="h4" sx={styles.roadmapHeading}>
      90%
    </Typography>
    <Typography sx={styles.roadmapText}>
      We throw a members-only, Lizard-holder party during the next tour complete
      w/ live music, drinks, raffles, and other fun stuff.
    </Typography>
    <Typography variant="h4" sx={styles.roadmapHeading}>
      100%
    </Typography>
    <Typography sx={styles.roadmapText}>
      We take the proceeds from our first successful mint selling out and invest
      right back into this community - dosing our brew with fresh batches of new
      (yet phamiliar) character-driven NFTs, special artist collabs, and even
      more value for holders digitally and IRL.
    </Typography>
    <Typography variant="overline" sx={styles.attentionText}>
      <strong>Attention artists:</strong> If you&apos;re interested in designing
      the art for future collections, please{" "}
      <Link href="mailto:hello@phanft.com" color="inherit">
        contact us here
      </Link>
      .
    </Typography>
  </section>
);

export default SectionRoadmap;
