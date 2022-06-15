import { Box, Link, Typography } from "@mui/material";

const styles = {
  footer: {
    display: "flex",
    flex: 1,
    p: "2rem 0",
    borderTop: "1px solid #eaeaea",
    justifyContent: "center",
    alignItems: "center",
  },
};

const AppFooter = (): JSX.Element => (
  <Box component="footer" sx={styles.footer}>
    <Typography variant="overline">
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
