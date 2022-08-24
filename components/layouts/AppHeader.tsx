import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useWeb3Context } from '../Web3Provider';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';

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
  desktopNavMenuItem: {
    my: 2,
    color: "white",
    display: "block",
    fontSize: "1rem",
  },
  connectBtnWrap: { flexGrow: 0 },
};

const pages = [
  { name: "Lizards", href: "#lizards" },
  { name: "Mission", href: "#mission" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "FAQs", href: "#faq" },
  { name: "Mint", href: "/mint" },
];

const AppHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { connected, connectWallet, disconnectWallet, connectedAddress } = useWeb3Context()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleConnectWallet = () => {
    connectWallet()
  }

  const handleDisconnectWallet = () => {
    disconnectWallet()
    handleClose()
  }

  /**
   * Converts a long wallet address to a somewhat hidden one, showing the first two characters and the last 4 characters
   * @param address The wallet address abcdefg12345678
   * @returns An obfuscated address ab.................5678
   */
  const formatAddress = (address: string): string => {
    if (!address) return ''
    return address.substring(0, 2) + '...........' + address.substring(address.length - 4)
  }

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
            {connected ? (
              <>
                <Button
                  id="connect-wallet-btn"
                  onClick={handleMenu}
                  color="secondary"
                  size="small"
                  aria-controls="wallet-menu"
                  aria-haspopup="true"
                  disableFocusRipple
                  disableTouchRipple
                  variant="outlined"
                  startIcon={<SvgIcon><AccountBalanceWalletIcon /></SvgIcon>}
                  endIcon={<SvgIcon><VerifiedUserSharpIcon /></SvgIcon>}
                  sx={{ display: { xs: "none", sm: "inline-flex" }, py: .6, ml: 1, borderWidth: 2}}
                >
                  <Typography color="text.primary" variant="caption">
                    {formatAddress(connectedAddress)}
                  </Typography>
                </Button>
                <Menu
                  id="wallet-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'connect-wallet-btn',
                  }}
                >
                  <MenuList dense sx={{ py: 0 }}>
                    <MenuItem onClick={handleDisconnectWallet}>Disconnect</MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <IconButton
                onClick={handleConnectWallet}
                color="secondary"
                size="small"
                sx={{ display: { xs: "none", sm: "inline-flex" }, ml: 2 }}
              >
                <Image
                  src="/icon_wallet.svg"
                  alt="Connect a Wallet"
                  width={25}
                  height={25}
                />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
