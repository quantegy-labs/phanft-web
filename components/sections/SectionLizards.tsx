import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const styles = {
	lizardsWrap: {
		backgroundColor: '#517f7f',
		py: 8,
		textAlign: 'center',
	},
	heading: {
		mb: 6,
		fontSize: 30,
		'@media (min-width: 900px)': {
			fontSize: 40,
		}
	},
	lizardsText: {
		textAlign: 'left',
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		}
	},
}

const SectionLizards = (): JSX.Element => (
	<Box id="lizards" component="section" sx={styles.lizardsWrap}>
		<Container maxWidth="lg">
			<Grid container spacing={4}>
				<Grid item xs={6}>
					<Image width={500} height={500} src="/lizard1.png" alt="Lizards Genesis PFP" />
				</Grid>
				<Grid item xs={6}>
					<Image width={500} height={500} src="/lizard2.png" alt="Lizards Genesis PFP" />
				</Grid>
				<Grid item xs={6}>
					<Image width={500} height={500} src="/lizard3.png" alt="Lizards Genesis PFP" />
				</Grid>
				<Grid item xs={6}>
					<Image width={500} height={500} src="/lizard4.png" alt="Lizards Genesis PFP" />
				</Grid>
			</Grid>
			<Box sx={{ mb: 4 }} />
			<Typography variant="h3" gutterBottom sx={styles.heading}>
				The Enlightened Lizards
			</Typography>
			<Typography sx={styles.lizardsText}>
				Our genesis project is The Enlightened Lizards - a limited collection of 555 utility-driven NFTs, where
				ownership doubles as your membership to the ultimate “phan club” loaded with benefits, rewards, and perks.
			</Typography>
			<Typography sx={styles.lizardsText}>
				Each Lizard is unique digital art and generated from a variety of illustrated traits, including facial
				expression, clothing, accessories, and other attributes that give a wink and a nod to song folklore or phan
				culture.
			</Typography>
			<Typography sx={styles.lizardsText}>
				This first collection will also include 25 extra-rare ones minted at random of an aging knight in gnarly armor,
				who was once a lizard too.
			</Typography>
			<Typography sx={styles.lizardsText}>
				As a lizard holder, you are early. You are 1.0. Everything that we create going forward you will get to
				participate in and benefit from, including future collections, airdrops and more as we expand exponentially.
			</Typography>
		</Container>
	</Box>
)

export default SectionLizards
