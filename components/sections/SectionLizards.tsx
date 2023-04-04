import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const styles = {
	lizardsWrap: {
		backgroundColor: '#ff0087',
		py: 8,
		textAlign: 'center',
	},
	heading: {
		color: '#fff',
		fontSize: 30,
		'@media (min-width: 900px)': {
			fontSize: 40,
		},
	},
	lizardsText: {
		color: '#fff',
		textAlign: 'left',
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		},
	},
	imageWrap: {
		border: '10px solid #8DFF9C',
		borderRadius: '8px',
		img: {
			borderRadius: 0,
		},
	},
}

const SectionLizards = (): JSX.Element => (
	<Box id="lizards" component="section" sx={styles.lizardsWrap}>
		<Container maxWidth="lg">
			<Grid container spacing={4}>
				<Grid item xs={6}>
					<Box sx={styles.imageWrap}>
						<Image
							quality={20}
							layout="responsive"
							width={500}
							height={500}
							src="/lizard1.jpg"
							alt="Lizards Genesis PFP"
						/>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box sx={styles.imageWrap}>
						<Image
							quality={20}
							layout="responsive"
							width={500}
							height={500}
							src="/lizard2.jpg"
							alt="Lizards Genesis PFP"
						/>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box sx={styles.imageWrap}>
						<Image
							quality={20}
							layout="responsive"
							width={500}
							height={500}
							src="/lizard3.jpg"
							alt="Lizards Genesis PFP"
						/>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box sx={styles.imageWrap}>
						<Image
							quality={20}
							layout="responsive"
							width={500}
							height={500}
							src="/lizard4.jpg"
							alt="Lizards Genesis PFP"
						/>
					</Box>
				</Grid>
			</Grid>
			<Box sx={{ mb: 4 }} />
			<Typography variant="h3" gutterBottom sx={styles.heading}>
				Enlightened Lizards
			</Typography>
			<Box className="large-block secondary" />
			<Typography sx={styles.lizardsText}>
				Our first collection is <strong>Enlightened Lizards</strong> - 555 unique pieces of digital phan art on the
				Ethereum blockchain. No two are the same.
			</Typography>
			<Typography sx={styles.lizardsText}>
				Each Lizard character is generated from a variety of original illustrated traits including facial expression,
				clothing, accessories, and other ‘phashionable&apos; attributes, that give a wink and a nod to song lore or phan
				culture.
			</Typography>
			<Typography sx={styles.lizardsText}>
				The collection also includes 25 extra-rare ones minted at random of an aging knight in gnarly armor, who was
				once a lizard too.
			</Typography>
			<Typography sx={styles.lizardsText}>
				As a lizard holder, you are early. You are 1.0 at this web3 party. Everything that we create going forward you
				will get to participate in and benefit from, including future limited edition collections, airdrops, community
				events, and more as we expand exponentially.
			</Typography>
		</Container>
	</Box>
)

export default SectionLizards
