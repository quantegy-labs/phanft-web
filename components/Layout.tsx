import { Box } from "@mui/material";
import { Container } from "@mui/system";
import type { ReactNode } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <AppHeader />
      <Box component="main" sx={{ my: 10 }}>
        <Container maxWidth="xl">{children}</Container>
      </Box>
      <AppFooter />
    </>
  );
};

export default Layout;
