import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

const styles = {
	banner: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		py: 10,
		px: 4,
		background: "url('/herobg.png') center center no-repeat",
		backgroundSize: 'cover',
		color: '#fff',
	},
	headline: {
		fontSize: 36,
		'@media (min-width: 900px)': {
			fontSize: 42,
		}
	},
	heading: {
		textAlign: 'center',
		mb: 6,
		fontSize: 28,
		'@media (min-width: 900px)': {
			fontSize: 36,
		}
	},
	introText: {
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		}
	},
	btn: {
		mt: 4,
		py: 1,
		px: 6,
		fontSize: 22,
	}
}

const SectionIntro = (): JSX.Element => (
	<>
		<Box sx={styles.banner}>
			<Typography variant="h2" sx={styles.headline}>Your Web 3.0 Pass to 4.0 Phandom</Typography>
		</Box>
		<Box id="intro" component="section">
			<Container maxWidth="lg">
				<Typography variant="h3" gutterBottom sx={styles.heading}>
					The Only Rule is it Begins
				</Typography>
				<Typography sx={styles.introText}>
					By phans, for phans, PhanFT is a series of utility-driven NFT collections to celebrate and unify our amazing
					music & art loving community in Web3 & IRL.
				</Typography>
				<Typography sx={styles.introText}>
					We&apos;re on a mission to redefine what our passionate community can do and be, build a digital platform for
					artists in our community to shine, and raise funds for some awesome charities.
				</Typography>
				<Typography sx={styles.introText}>
					Together, we&apos;re lighting the torch for a whole new paradigm for phans to connect, collect, commune, and
					continue sharin&apos; in the groove around Vermont&apos;s Phinest. ⭕️
				</Typography>
				<Box display="flex" justifyContent="center">
					<Link href="/mint">
						<Button variant="contained" color="primary" size="large" sx={styles.btn}>
							Mint Now
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	</>
)

export default SectionIntro
