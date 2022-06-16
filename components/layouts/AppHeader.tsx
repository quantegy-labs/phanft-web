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
        <Toolbar id="back-to-top-anchor" disableGutters>
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
            <a
              href="https://discord.com/invite/P5VpF5f7qx"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Image
                src="/icon_discord.svg"
                alt="Discord"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://twitter.com/phanft_official"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Image
                src="/icon_twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
              />
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
            <Link href="#onboard">
              <Button
                onClick={handleCloseNavMenu}
                variant="contained"
                color="primary"
                size="small"
                sx={{ ml: 1 }}
              >
                Join Now
              </Button>
            </Link>
            <Button
              onClick={() => console.log("connect wallet")}
              color="secondary"
              size="small"
            >
              <Image
                src="/icon_wallet.svg"
                alt="Connect a Wallet"
                width={30}
                height={30}
              />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
