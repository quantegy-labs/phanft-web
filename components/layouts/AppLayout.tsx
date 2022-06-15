import { Box, Container, Typography } from "@mui/material";
import type { ReactNode } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

const styles = {
  banner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    py: 10,
    background: "url('/herobg.png') center center no-repeat",
    backgroundSize: "cover",
    color: "#fff",
  },
  pageContent: {
    py: 8,
  },
};

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: AppLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <>
      <AppHeader />
      <Box component="main">
        <Box sx={styles.banner}>
          <Typography variant="h2">Welcome to the Phanaverse!</Typography>
        </Box>
        <Container maxWidth="md" sx={styles.pageContent}>
          {children}
        </Container>
      </Box>
      <AppFooter />
    </>
  );
};

export default AppLayout;
