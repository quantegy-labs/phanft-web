import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const styles = {
  appBar: { backgroundColor: "#031523" },
  mobileNavWrap: { flexGrow: 1, display: { xs: "flex", md: "none" } },
  mobileNavMenu: { display: { xs: "block", md: "none" } },
  mobileNavLogo: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  desktopNavLogo: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  desktopNavWrap: { flexGrow: 1, display: { xs: "none", md: "flex" } },
  desktopNavMenuItem: { my: 2, color: "white", display: "block" },
  connectBtnWrap: { flexGrow: 0 },
};

const pages = [
  { name: "Home", href: "/" },
  { name: "Mission", href: "/mission" },
  { name: "FAQs", href: "/faq" },
];

const AppHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Navigation */}
          <Box sx={styles.mobileNavWrap}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.mobileNavMenu}
            >
              <nav>
                {pages.map((page) => (
                  <Link href={page.href} key={page.name}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </nav>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={styles.mobileNavLogo}
          >
            PHANFT
          </Typography>

          {/* Desktop Navigation */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styles.desktopNavLogo}
          >
            PHANFT
          </Typography>
          <Box component="nav" sx={styles.desktopNavWrap}>
            {pages.map((page) => (
              <Link href={page.href} key={page.name}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={styles.desktopNavMenuItem}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={styles.connectBtnWrap}>
            <Button
              onClick={() => console.log("connect wallet")}
              variant="contained"
              color="secondary"
            >
              Connect Wallet
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
