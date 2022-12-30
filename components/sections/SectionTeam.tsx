import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const styles = {
	headings: {
		textAlign: 'center',
		maxWidth: '800px',
		mx: 'auto',
	},
	heading: {
		color: '#fff',
		fontSize: 30,
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: 40,
		},
	},
	introText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
		fontStyle: 'italic',
		fontWeight: 300,
		'@media (min-width: 900px)': {
			fontSize: 26,
		},
	},
	memberWrap: {
		color: '#fff',
		textAlign: 'center',
	},
	title: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		my: 2,
	},
	subtitle: {
		color: '#fff',
		lineHeight: 1.3,
		fontSize: '1rem',
		textAlign: 'center',
		mb: 2,
	},
	text: {
		color: '#fff',
		mb: 2,
	},
	quote: {
		color: '#fff',
		fontSize: '1rem !important',
		fontWeight: 'bold',
		fontStyle: 'italic',
	},
}

const SectionTeam = (): JSX.Element => {
	return (
		<Box component="section" id="team">
			<Container maxWidth="lg">
				<Box sx={styles.headings}>
					<Typography variant="h3" sx={styles.heading}>
						Meet the Pham
					</Typography>
					<Typography sx={styles.introText}>
						We&apos;re a small team of tech-savvy, long-time phans who are set on creating the greatest phan experience
						in Web3.
					</Typography>
					<Box className="large-block secondary" />
				</Box>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<Box sx={styles.memberWrap}>
							<Image width={300} height={300} src="/lizard_david.png" alt="Team Member" />
							<Typography variant="h5" component="h4" sx={styles.title}>
								David
							</Typography>
							<Typography variant="overline" component="h6" sx={styles.subtitle}>
								Product Strategy & Partnerships
							</Typography>
							<Typography sx={styles.text}>
								Serial music-tech founder, digital experience creator, and passionate community builder.
							</Typography>
							<Typography sx={styles.quote}>Finally got his Axilla II.</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={styles.memberWrap}>
							<Image width={300} height={300} src="/lizard_drew.png" alt="Team Member" />
							<Typography variant="h5" component="h4" sx={styles.title}>
								Drew
							</Typography>
							<Typography variant="overline" component="h6" sx={styles.subtitle}>
								Technology & Engineering
							</Typography>
							<Typography sx={styles.text}>
								Web3-native coding guru, a true Ballmer Peak believer, and lifelong struggling musician.
							</Typography>
							<Typography sx={styles.quote}>Is this still Lawn Boy?</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={styles.memberWrap}>
							<Image width={300} height={300} src="/lizard_ian.png" alt="Team Member" />
							<Typography variant="h5" component="h4" sx={styles.title}>
								Ian
							</Typography>
							<Typography variant="overline" component="h6" sx={styles.subtitle}>
								Community Builder & Discord Mod
							</Typography>
							<Typography sx={styles.text}>
								Grassroots marketer with many hats, bobbing on the surface where cannabis, art, & tech intersect.
							</Typography>
							<Typography sx={styles.quote}>Seen more slow than fast Llamas.</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default SectionTeam
