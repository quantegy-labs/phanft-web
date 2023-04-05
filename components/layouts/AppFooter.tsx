import { Box, Link, Typography } from '@mui/material'
import SocialIcons from '../SocialIcons'

const styles = {
	footer: {
		backgroundColor: '#000',
		color: '#fff',
		display: 'flex',
		flexDirection: 'column',
		py: 4,
		px: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	linksMobile: {
		mt: 2,
		textAlign: 'center',
		display: { xs: 'block', sm: 'none' },
	},
	linksDesktop: {
		mt: 2,
		display: { xs: 'none', sm: 'block' },
	},
}

const FooterLinksMobile = () => (
	<Box sx={styles.linksMobile}>
		<Typography variant="overline" component="p">
			<Link href="/privacy" underline="hover" color="inherit">
				Privacy Policy
			</Link>
		</Typography>
		<Typography variant="overline" component="p">
			<Link href="/terms" underline="hover" color="inherit">
				Terms of Use
			</Link>
		</Typography>
		<Typography variant="overline" component="p">
			<Link href="mailto:gm@phanft.xyz" underline="hover" color="inherit">
				Artist Partner Inquiries
			</Link>
		</Typography>
		<Typography variant="overline" component="p">
			&copy;2022 Property of{' '}
			<Link href="https://quantegylabs.com" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
				Quantegy Labs
			</Link>
		</Typography>
	</Box>
)

const FooterLinksDesktop = () => (
	<Box sx={styles.linksDesktop}>
		<Typography variant="overline" component="p">
			&copy;2022 Property of{' '}
			<Link href="https://quantegylabs.com" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
				Quantegy Labs
			</Link>{' '}
			|{' '}
			<Link href="/privacy" underline="hover" color="inherit">
				Privacy Policy
			</Link>{' '}
			|{' '}
			<Link href="/terms" underline="hover" color="inherit">
				Terms of Use
			</Link>{' '}
			|{' '}
			<Link href="mailto:gm@phanft.xyz" underline="hover" color="inherit">
				Artist Partner Inquiries
			</Link>
		</Typography>
	</Box>
)

const AppFooter = (): JSX.Element => (
	<Box component="footer" sx={styles.footer}>
		<SocialIcons />
		<FooterLinksMobile />
		<FooterLinksDesktop />
	</Box>
)
export default AppFooter
