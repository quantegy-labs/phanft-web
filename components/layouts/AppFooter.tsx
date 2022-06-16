import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

const styles = {
  footer: {
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    py: 4,
    borderTop: "1px solid #eaeaea",
    justifyContent: "center",
    alignItems: "center",
  },
  socialWrap: {
    mb: 1,
  },
};

const AppFooter = (): JSX.Element => (
  <Box component="footer" sx={styles.footer}>
    <Box sx={styles.socialWrap}>
      <a
        href="https://discord.com/invite/P5VpF5f7qx"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-link"
      >
        <Image src="/icon_discord.svg" alt="Discord" width={20} height={20} />
      </a>
      <a
        href="https://twitter.com/phanft_official"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-link"
      >
        <Image src="/icon_twitter.svg" alt="Twitter" width={20} height={20} />
      </a>
      <a
        href="https://instagram.com/phanft_official"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-link"
      >
        <Image
          src="/icon_instagram.svg"
          alt="Instagram"
          width={20}
          height={20}
        />
      </a>
    </Box>
    <Typography variant="overline" component="p">
      &copy; 2022 | Property of{" "}
      <Link
        href="https://quantegylabs.com"
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        color="inherit"
      >
        Quantegy Labs
      </Link>
    </Typography>
  </Box>
);

export default AppFooter;
