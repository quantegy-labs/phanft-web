import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

const styles = {
  infoWrap: {
    py: 8,
  },
  spacer: {
    my: 6,
  },
  text: {
    mb: 2,
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
            <Typography sx={styles.text}>
              A 15% portion of net proceeds from the Lizards mint will be
              donated to the{" "}
              <Link
                href="https://phish.com/waterwheel/"
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                <strong>Waterwheel Foundation</strong>
              </Link>{" "}
              and{" "}
              <Link
                href="https://mbird.org/"
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                <strong>The Mockingbird Foundation</strong>
              </Link>
              . These initial contributions will set the stage for a charitable
              component to our digital community going forward.
            </Typography>
            <Typography sx={styles.text}>
              The rest of the proceeds will be used as operating expenses to
              manifest our big dreams and execute on the slew of benefits we
              have planned for you.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={styles.spacer} />
        <Divider />
        <Box sx={styles.spacer} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom>
              The Nitty Gritty
            </Typography>
            <Typography variant="h5" gutterBottom>
              Tech Specs and How To Mint
            </Typography>
            <Typography sx={styles.text}>
              The Lizards are stored as ERC-721 tokens on the Ethereum
              blockchain and hosted on IPFS.
            </Typography>
            <Typography sx={styles.text}>
              If you&apos;re new to the minting process or just want some more
              info, please see our{" "}
              <Link href="#faq" color="inherit">
                <strong>FAQs section</strong>
              </Link>{" "}
              that helps make the process super easy for you. N00b friendly.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              width={300}
              height={300}
              src="/lizard_unknown.png"
              alt="Lizards Genesis PFP"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default SectionInfo;
