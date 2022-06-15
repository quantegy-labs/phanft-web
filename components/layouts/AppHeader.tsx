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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const styles = {
  hidden: {
    width: "1px",
    height: "1px",
    clip: "rect(0,0,0,0)",
    clipPath: "inset(50%)",
    margin: "-1px",
    whiteSpace: "no-wrap",
    overflow: "hidden",
  },
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
  { name: "Mission", href: "#mission" },
  { name: "Benefits", href: "#benefits" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "FAQs", href: "#faq" },
  { name: "Sign Up", href: "#onboard" },
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
    <AppBar position="sticky" color="default" enableColorOnDark>
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
          <Box sx={styles.mobileNavLogo}>
            <Typography variant="h1" sx={styles.hidden}>
              PhanFT
            </Typography>
            <Image src="/logo.png" width={200} height={40} alt="PhanFT Logo" />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={styles.desktopNavLogo}>
            <Typography variant="h1" sx={styles.hidden}>
              PhanFT
            </Typography>
            <Image src="/logo.png" width={200} height={40} alt="PhanFT Logo" />
          </Box>
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
              variant="outlined"
              color="secondary"
              sx={{ mr: 1 }}
              size="small"
            >
              Connect Wallet
            </Button>
            <Link href="#onboard">
              <Button
                onClick={handleCloseNavMenu}
                variant="contained"
                color="primary"
                size="small"
              >
                Join Now
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
