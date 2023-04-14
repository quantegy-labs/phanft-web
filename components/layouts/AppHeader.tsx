import MenuIcon from '@mui/icons-material/Menu'
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
	useMediaQuery,
	useTheme,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import { useWeb3Context } from '../Web3Provider'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp'
import formatAddress from '../../lib/formatAddress'
import SocialIcons from '../SocialIcons'

const styles = {
	appbar: {
		backgroundColor: '#000',
	},
	hidden: {
		width: '1px',
		height: '1px',
		clip: 'rect(0,0,0,0)',
		clipPath: 'inset(50%)',
		margin: '-1px',
		whiteSpace: 'no-wrap',
		overflow: 'hidden',
	},
	mobileNavLogo: {
		cursor: 'pointer',
		mr: 2,
		display: { xs: 'flex', md: 'none' },
		flexGrow: 1,
		fontFamily: 'monospace',
		fontWeight: 700,
		letterSpacing: '.3rem',
		textDecoration: 'none',
	},
	mobileNavWrap: { display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start' },
	mobileNavMenu: { display: { xs: 'block', md: 'none' } },
	mobileNavItem: {
		'&:hover': {
			backgroundColor: '#ff0087',
		},
	},
	mobileNavMenuItem: {
		textAlign: 'right',
		color: '#fff',
	},
	desktopNavLogo: {
		cursor: 'pointer',
		mr: 2,
		display: { xs: 'none', md: 'flex' },
		fontFamily: 'monospace',
		fontWeight: 700,
		letterSpacing: '.3rem',
		textDecoration: 'none',
	},
	desktopNavWrap: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
	desktopNavMenuItem: {
		my: 2,
		display: 'block',
		fontSize: '1rem',
		color: '#fff',
		'&:hover': {
			color: '#ff0087',
		},
	},
	connectBtnWrap: { flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
}

const pages = [
	{ name: 'Lizards', href: '/#lizards' },
	{ name: 'Mission', href: '/#mission' },
	{ name: 'Roadmap', href: '/#roadmap' },
	{ name: 'Team', href: '/#team' },
	{ name: 'FAQs', href: '/#faq' },
	{ name: 'Guide', href: '/guide' },
]

const AppHeader = () => {
	const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const logoSrcPink = '/logo_pink.svg'
	const logoSrcGreen = '/logo_green.svg'
	const [logoSrc, setLogoSrc] = useState<string>(logoSrcPink)
	const { breakpoints } = useTheme()
	const desktops = useMediaQuery(breakpoints.up('md'))

	const { connected, connectWallet, disconnectWallet, connectedAddress, web3Provider } = useWeb3Context()

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleConnectWallet = () => {
		connectWallet()
	}

	const handleDisconnectWallet = () => {
		disconnectWallet()
		handleClose()
	}

	const handleToggleLogo = (e: SyntheticEvent) => {
		// @ts-ignore
		const src = e.target.src.split('/').reverse()[0]
		const newSrc = `/${src}` === logoSrcPink ? logoSrcGreen : logoSrcPink
		setLogoSrc(newSrc)
	}

	const LogoComponent: JSX.Element = (
		<Link href="/" passHref>
			{/* eslint-disable-next-line */}
			<img
				src={logoSrc}
				width={desktops ? 200 : 150}
				height={desktops ? 40 : 30}
				alt="PhaNFT Logo"
				onMouseEnter={handleToggleLogo}
				onMouseLeave={handleToggleLogo}
			/>
		</Link>
	)

	return (
		<AppBar position="sticky" enableColorOnDark sx={styles.appbar}>
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
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={styles.mobileNavMenu}
						>
							<nav>
								{pages.map(page => (
									<Link href={page.href} key={page.name}>
										<MenuItem onClick={handleCloseNavMenu} sx={styles.mobileNavItem}>
											<Typography sx={styles.mobileNavMenuItem}>{page.name}</Typography>
										</MenuItem>
									</Link>
								))}
							</nav>
						</Menu>
					</Box>
					<Box sx={styles.mobileNavLogo}>
						<Typography variant="h1" sx={styles.hidden}>
							PhaNFT
						</Typography>
						{LogoComponent}
					</Box>

					{/* Desktop Navigation */}
					<Box sx={styles.desktopNavLogo}>
						<Typography variant="h1" sx={styles.hidden}>
							PhaNFT
						</Typography>
						{LogoComponent}
					</Box>
					<Box component="nav" sx={styles.desktopNavWrap}>
						{pages.map(page => (
							<Link href={page.href} key={page.name}>
								<Button onClick={handleCloseNavMenu} sx={styles.desktopNavMenuItem}>
									{page.name}
								</Button>
							</Link>
						))}
					</Box>

					{/* Buttons */}
					<Box sx={styles.connectBtnWrap}>
						<SocialIcons />
						<Link href="/mint">
							<Button
								onClick={handleCloseNavMenu}
								variant="contained"
								color="primary"
								size="small"
								sx={{ ml: 1, fontSize: desktops ? undefined : '.75rem' }}
							>
								Minting Soon
							</Button>
						</Link>
						{web3Provider &&
							(connected ? (
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
										startIcon={
											<SvgIcon>
												<AccountBalanceWalletIcon />
											</SvgIcon>
										}
										endIcon={
											<SvgIcon>
												<VerifiedUserSharpIcon />
											</SvgIcon>
										}
										sx={{
											py: 0.6,
											ml: 1,
											borderWidth: 2,
											display: desktops ? 'inline-flex' : 'none',
										}}
									>
										<Typography color="secondary" variant="caption">
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
										<MenuList dense sx={{ py: 0, color: '#fff', '&:hover': { backgroundColor: '#ff0087' } }}>
											<MenuItem onClick={handleDisconnectWallet}>Disconnect</MenuItem>
										</MenuList>
									</Menu>
								</>
							) : (
								<IconButton
									onClick={handleConnectWallet}
									color="secondary"
									size="small"
									sx={{ ml: { md: 2 } }}
									disabled={!web3Provider}
								>
									<Image priority quality={20} src="/icon_wallet.svg" alt="Connect a Wallet" width={25} height={25} />
								</IconButton>
							))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default AppHeader
