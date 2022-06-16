import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

const styles = {
  infoWrap: {
    py: 8,
  },
  spacer: {
    my: 6,
  },
};

const SectionInfo = (): JSX.Element => (
  <>
    <Box id="info" component="section" sx={styles.infoWrap}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Image
              width={460}
              height={320}
              src="/charities.png"
              alt="Waterwheel &amp; Mockingbird Foundation"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom>
              Sharin&apos; in the Groove
            </Typography>
            <Typography>
              A sizable portion of each minted PhanFT collection will be donated
              to the{" "}
              <Link
                href="https://phish.com/waterwheel/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Waterwheel Foundation</strong>
              </Link>{" "}
              and The{" "}
              <Link href="https://mbird.org/" target="_blank" rel="noreferrer">
                <strong>Mockingbird Foundation </strong>
              </Link>
              . These initial contributions will set the stage for a charitable
              component to our digital community going forward.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={styles.spacer} />
        <Divider />
        <Box sx={styles.spacer} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3">The Nitty Gritty</Typography>
            <Typography variant="h4" gutterBottom>
              (Tech Specs)
            </Typography>
            <Typography>
              The Lizards are stored as ERC-721 tokens on the Ethereum
              blockchain and hosted on IPFS. If you&rsquo;re new to this process
              or just want some more info, please{" "}
              <Link href="#faq">
                <strong>see our FAQ page</strong>
              </Link>{" "}
              that explains things in more detail and helps to make the process
              super easy for you. Beginner friendly.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              width={300}
              height={300}
              src="/lizard3.png"
              alt="Lizards Genesis PFP"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default SectionInfo;
