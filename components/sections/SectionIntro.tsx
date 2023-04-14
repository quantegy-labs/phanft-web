import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Lizard1 from '../../public/banner-lizards/blue.png'
import Lizard2 from '../../public/banner-lizards/orange.png'
import Lizard3 from '../../public/banner-lizards/teal.png'
import Lizard4 from '../../public/banner-lizards/yellow.png'
import Lizard5 from '../../public/banner-lizards/green.png'

const styles = {
	banner: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		background: "url('/bg_banner.jpg') right bottom no-repeat",
		backgroundSize: 'cover',
		position: 'relative',
		minHeight: 500,
	},
	lizard1: {
		bottom: -8,
		right: 0,
		zIndex: 1,
	},
	lizard2: {
		bottom: -8,
		right: 110,
	},
	lizard3: {
		bottom: -8,
		right: 280,
		zIndex: 1,
		display: {
			xs: 'none',
			sm: 'block',
		},
	},
	lizard4: {
		bottom: -8,
		right: 400,
		display: {
			xs: 'none',
			sm: 'block',
		},
	},
	lizard5: {
		bottom: -8,
		right: 580,
		display: {
			xs: 'none',
			md: 'block',
		},
	},
	headline: {
		color: '#fff',
		fontSize: 36,
		px: 4,
		'@media (min-width: 900px)': {
			fontSize: 42,
		},
	},
	heading: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 28,
		'@media (min-width: 900px)': {
			fontSize: 36,
		},
	},
	introText: {
		color: '#fff',
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		},
	},
	btn: {
		mt: 4,
		py: 1,
		px: 6,
		fontSize: 22,
	},
}

const SectionIntro = (): JSX.Element => (
	<>
		<Box sx={styles.banner} className="banner">
			<Typography variant="h2" sx={styles.headline}>
				Your Web 3.0 Pass to 4.0 Phandom
			</Typography>
			<Box sx={styles.lizard1} position="absolute">
				<Image priority src={Lizard1} width={150} height={150} alt="lizard" />
			</Box>
			<Box sx={styles.lizard2} position="absolute">
				<Image priority src={Lizard2} width={150} height={150} alt="lizard" />
			</Box>
			<Box sx={styles.lizard3} position="absolute">
				<Image priority src={Lizard3} width={150} height={150} alt="lizard" />
			</Box>
			<Box sx={styles.lizard4} position="absolute">
				<Image priority src={Lizard4} width={150} height={150} alt="lizard" />
			</Box>
			<Box sx={styles.lizard5} position="absolute">
				<Image priority src={Lizard5} width={150} height={150} alt="lizard" />
			</Box>
		</Box>
		<Box id="intro" component="section">
			<Container maxWidth="lg">
				<Typography variant="h3" gutterBottom sx={styles.heading}>
					This one is for you
				</Typography>
				<Box className="large-block" />
				<Typography sx={styles.introText}>
					PhaNFT is your NFT passport to a helping phriendly community who are excited about the future of web3,
					music-art culture, and new forms of participatory fandom.
				</Typography>
				<Typography sx={styles.introText}>
					Together, we&apos;re lighting the torch for a whole new paradigm for phans to collect, commune, and continue
					sharin&apos; in the groove around Vermont&apos;s Phinest. ⭕️
				</Typography>
				<Box display="flex" justifyContent="center">
					<Link href="/mint">
						<Button variant="contained" color="primary" size="large" sx={styles.btn}>
							Minting Soon
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	</>
)

export default SectionIntro
