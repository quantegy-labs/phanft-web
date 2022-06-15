import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
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
    py: 6,
  },
};

type PageLayoutProps = {
  pageTitle: string;
  pageSubtitle?: string;
  children: ReactNode;
};

const PageLayout = (props: PageLayoutProps): JSX.Element => {
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
        <Box sx={styles.pageContent}>
          <Container maxWidth="md">{children}</Container>
        </Box>
      </Box>
      <AppFooter />
    </>
  );
};

export default PageLayout;
