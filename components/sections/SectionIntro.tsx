import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const styles = {
  introWrap: {
    pt: 8,
    pb: 4,
    textAlign: "center",
  },
  introText: {
    fontSize: "1.25rem",
    mb: 4,
  },
  lizardsWrap: {
    backgroundColor: "#517f7f",
    py: 8,
  },
  lizardsText: {
    mb: 2,
  },
};

const SectionIntro = (): JSX.Element => (
  <>
    <Box id="intro" component="section" sx={styles.introWrap}>
      <Container maxWidth="md">
        <Typography sx={styles.introText}>
          By phans, for phans, PhanFT is a series of blockchain-powered NFT
          projects to celebrate and further solidify this amazing music and
          art-loving community under shared purpose and common passions.
        </Typography>
        <Typography sx={styles.introText}>
          Together, we&apos;re lighting the torch for a whole new paradigm for
          Phans to connect, spread joy, and share in the groove with the
          greatest band and community in the world.
        </Typography>
      </Container>
    </Box>
    <Box id="lizards" component="section" sx={styles.lizardsWrap}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Image
              width={300}
              height={300}
              src="/lizard1.png"
              alt="Lizards Genesis PFP"
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" gutterBottom>
              The Lizards
            </Typography>
            <Typography sx={styles.lizardsText}>
              Our genesis project is The Lizards - a limited collection of 2001
              NFTs, where ownership doubles as your membership to the ultimate
              Phan club loaded with benefits, utility, and perks.
            </Typography>
            <Typography sx={styles.lizardsText}>
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
      </Container>
    </Box>
  </>
);

export default SectionIntro;
