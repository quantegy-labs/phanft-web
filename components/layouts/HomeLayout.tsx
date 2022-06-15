import { Box, Container, Typography } from "@mui/material";
import type { ReactNode } from "react";
import AppFooter from "../AppFooter";
import AppHeader from "../AppHeader";

const styles = {
  centered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    py: 6,
    backgroundColor: "#dddaaa",
  },
  pageContent: {
    py: 8,
  },
};

type HomeLayoutProps = {
  pageTitle: string;
  pageSubtitle?: string;
  children: ReactNode;
};

const HomeLayout = (props: HomeLayoutProps): JSX.Element => {
  const { pageTitle, pageSubtitle, children } = props;

  return (
    <>
      <AppHeader />
      <Box component="main">
        <Box sx={styles.banner}>
          <Container maxWidth="xl" sx={styles.centered}>
            <Typography variant="h2" component="h2">
              {pageTitle}
            </Typography>
            {pageSubtitle && (
              <Typography variant="h5" component="h3">
                {pageSubtitle}
              </Typography>
            )}
          </Container>
        </Box>
        <Container maxWidth="md" sx={styles.pageContent}>
          {children}
        </Container>
      </Box>
      <AppFooter />
    </>
  );
};

export default HomeLayout;
