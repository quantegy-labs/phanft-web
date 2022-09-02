import { Star } from '@mui/icons-material'
import { Box, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

const styles = {
	headings: {
		textAlign: 'center',
		mb: 6,
	},
	heading: {
		textAlign: 'center',
		mb: 1,
		fontSize: 30,
		'@media (min-width: 900px)': {
			fontSize: 40,
		}
	},
	subheading: {
		fontSize: 24,
		'@media (min-width: 900px)': {
			fontSize: 30,
		}
	},
	roadmapText: {
		fontSize: '1.1rem',
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		}
	},
}

const SectionRoadmap = (): JSX.Element => (
	<Box component="section" id="roadmap">
		<Container maxWidth="lg">
			<Box sx={styles.headings}>
				<Typography variant="h3" sx={styles.heading}>
					Let&apos;s Get This Show on the Road!
				</Typography>
				<Typography variant="h4" sx={styles.subheading}>Phase 1.0 Benefits and Roadmap</Typography>
			</Box>
			<Typography sx={styles.roadmapText}>
				We&rsquo;re in this for the long haul and our intent is all for your delight. Below is what we plan to deliver
				in the first phase with a sold out collection. That said, this is a fast evolving space and we&apos;re learning
				every day. All ideas are subject to modification and change as needed.
			</Typography>
			<List>
				<ListItem sx={{ fontSize: '1.5rem' }}>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Own a one-of-a-kind, provably-rare digital collectable" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Each Lizard holder gets (1) LE art print by Nate Duval (this perk gets triggered on our 100th mint)" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Each Lizard holder gets (1) wearable merch item" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Free airdrops of future collections and artist collabs as we expand the community" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Access to phan-centric perks from our partners" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Invitations to Lizard holder events and gatherings during tour. i.e. aftershow parties, pre-show meetups, and more. Your Lizard = your ticket" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Keys to 'The Corridor', a private sub-section of our public Discord (that we have plans to eventually develop into an interactive gathering place in the metaverse)" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Purchasing a Lizard generates donations to The Waterwheel Foundation and Mockingbird Foundation charity partners." />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="Help save the Lizards from extinction by minting them to the blockchain and join the quest to gain the knowledge that you lack" />
				</ListItem>
			</List>
			<Divider />
			<Box sx={styles.headings}>
				<Typography variant="h4" sx={styles.heading}>
					Phase 2.0 & Beyond
				</Typography>
				<Typography variant="h5" sx={styles.subheading}>This begins after selling out Phase 1.0 and delivering on the roadmap.</Typography>
			</Box>
			<Typography sx={styles.roadmapText}>
				The below list are ideas and we reserve the right to change or modify them anytime as we learn and grow as a
				community. Like the spirit of the music, we&apos;re stepping on stage and improvising together with you in
				uncharted territory.
			</Typography>
			<List>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="We take the proceeds from The Lizards collection and invest right back into this community - dosing our brew with fresh batches of new (yet phamiliar) character-driven NFTs, special artist collabs, and even more value for holders digitally and IRL." />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="The Helping Phriendly DAO launches with a public treasury of funds, where holders get to vote on future goals and direction of the project." />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="We bring the shakedown lot experience into the metaverse before couch tour shows, where Lizards and other creatures that seem oh-so-kind can gather to hang out, buy digital and physical goods from vendors, and get more down at dance parties." />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Star color="secondary" />
					</ListItemIcon>
					<ListItemText primary="The Rhombus appears and a new portal is unlocked revealing a digital treasure hunt. Prizes include up to 2 ETH in rewards and exclusive 1-of-1 minted characters including the great and knowledgeable Icculus." />
				</ListItem>
			</List>
		</Container>
	</Box>
)

export default SectionRoadmap
