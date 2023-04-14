import {
	AccountCircle,
	CardMembership,
	Collections,
	ColorLens,
	ConfirmationNumber,
	ExpandMore,
	House,
	MusicNote,
	RocketLaunch,
	SportsEsports,
} from '@mui/icons-material'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { SyntheticEvent, useState } from 'react'

const styles = {
	headings: {
		textAlign: 'center',
	},
	item: {
		color: '#fff',
		border: '1px solid #ff0087',
		borderRadius: '4px',
		mb: 4,
	},
	heading: {
		color: '#fff',
		fontSize: 30,
		'@media (min-width: 900px)': {
			fontSize: 40,
		},
	},
	question: {
		color: '#fff',
		fontSize: '1.25rem',
		'@media (min-width: 900px)': {
			fontSize: '1.5rem',
		},
	},
	answer: {
		color: '#fff',
		fontSize: '1.1rem',
		fontWeight: 300,
		mb: 2,
		'@media (min-width: 900px)': {
			fontSize: '1.25rem',
			mb: 4,
		},
		'&:last-child': {
			mb: 1,
		},
	},
}

const SectionFAQs = (): JSX.Element => {
	const [expanded, setExpanded] = useState<string | false>(false)

	const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<Box component="section" id="faq">
			<Container maxWidth="md">
				<Box sx={styles.headings}>
					<Typography variant="h3" sx={styles.heading}>
						Frequently Asked Questions
					</Typography>
					<Box className="large-block" />
				</Box>

				<Accordion sx={styles.item} expanded={expanded === 'q1'} onChange={handleChange('q1')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q1-content" id="q1-header">
						<Typography sx={styles.question}>What is Discord?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							Discord hosts our PhaNFT public community hub. It&apos;s a place to get real time updates on the project,
							hang out, engage with the community, discuss a variety of interests, and plant seeds for serendipity.
						</Typography>
						<Typography sx={styles.answer}>
							<Link
								href="https://discord.com/invite/P5VpF5f7qx"
								target="_blank"
								rel="noreferrer"
								underline="always"
								color="inherit"
								sx={{ fontWeight: 400, fontStyle: 'italic' }}
							>
								Join our Discord here!
							</Link>
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q2'} onChange={handleChange('q2')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q2-content" id="q2-header">
						<Typography sx={styles.question}>What is an NFT?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							NFT stands for “Non-Fungible Token”, and it is a unique, one-of-a-kind digital item that users can buy,
							own, and trade on the blockchain. NFTs are bought and sold using cryptocurrencies, such as ETH.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q3'} onChange={handleChange('q3')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q3-content" id="q3-header">
						<Typography sx={styles.question}>Where on the blockchain do NFTs live?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							Currently, most NFTs on the market live on the Ethereum blockchain. But there are other blockchains as
							well that support NFTs, including Solana, Polygon, Cardano, and others.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q4'} onChange={handleChange('q4')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q4-content" id="q4-header">
						<Typography sx={styles.question}>Okay, but what can an NFT be?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={{ ...styles.answer, mb: '0px !important' }}>
							An NFT can represent almost anything such as:
						</Typography>
						<List>
							<ListItem>
								<ListItemIcon>
									<Collections color="secondary" />
								</ListItemIcon>
								<ListItemText primary="Digital collectibles" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<ColorLens color="secondary" />
								</ListItemIcon>
								<ListItemText primary="Artwork" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<ConfirmationNumber color="secondary" />
								</ListItemIcon>
								<ListItemText primary="Concert tickets" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<SportsEsports color="secondary" />
								</ListItemIcon>
								<ListItemText primary="Video games and in-game items" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<MusicNote color="secondary" />
								</ListItemIcon>
								<ListItemText primary="Music and publishing" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<House color="secondary" />
								</ListItemIcon>
								<ListItemText primary="Contracts to real-world assets, such as real estate" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<AccountCircle color="secondary" />
								</ListItemIcon>
								<ListItemText primary="Digital IDs and avatars" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CardMembership color="secondary" />
								</ListItemIcon>
								<ListItemText primary="Club membership cards" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RocketLaunch color="secondary" />
								</ListItemIcon>
								<ListItemText primary="And many more..." />
							</ListItem>
						</List>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q5'} onChange={handleChange('q5')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q5-content" id="q5-header">
						<Typography sx={styles.question}>How is ownership of the NFT guaranteed?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							Ownership is written into the smart contract that lives on the blockchain, forever and immutable, and
							governs the rights of that digital asset. This is what allows digital items, such as images (which as we
							know them historically are easily cloneable), to now be bought, sold, or traded with both trust and
							transparency.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q6'} onChange={handleChange('q6')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q6-content" id="q6-header">
						<Typography sx={styles.question}>What are the essential characteristics and benefits of NFTs?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							<strong>Unique -</strong> An NFT&apos;s metadata describes what makes this asset different from all the
							rest in a collection. This is a permanent, unalterable record that describes what this NFT represents,
							like the certificate of authenticity that you&apos;d get with a rare painting.
						</Typography>
						<Typography sx={styles.answer}>
							<strong>Rare -</strong> Scarcity is an important ingredient in the recipe that makes NFTs so attractive.
							While developers have the freedom to generate an infinite supply of certain assets, they also have the
							power to limit the number of rare, desirable items in existence. This preserves value. It&apos;s the same
							reason a physical show print is made in limited allotments. Sure, the artist could print 20,000 for the
							whole venue. However, they likely wouldn&apos;t sell them all, and they wouldn&apos;t hold long-term
							value. Supply and demand economics holds true with NFTs too.
						</Typography>
						<Typography sx={styles.answer}>
							<strong>Ownership -</strong> Blockchain technology proves your ownership while making the change of
							ownership rights easy. Just like you own a physical piece of art (like a show poster), you own this
							digital art. You can choose to display it, sell it, trade it, or exploit it in other ways, depending on
							the rights assigned to you in the smart contract.
						</Typography>
						<Typography sx={styles.answer}>
							<strong>Transferability -</strong> NFTs can be freely traded, transferred, or sold.
						</Typography>
						<Typography sx={styles.answer}>
							<strong>Security &amp; Authenticity -</strong> The smart contract behind the NFT prevents fraud prevention
							- a problem affecting everything from art to concert tickets, collectibles, fashion, and even wine.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q7'} onChange={handleChange('q7')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q7-content" id="q7-header">
						<Typography sx={styles.question}>
							Why can&apos;t I just right-click and save these digital items or take a screenshot of it?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							Sure, you <em>could</em> take a screenshot of it, but you don&apos;t own it. You can&apos;t sell it, trade
							it, or prove you own it on the blockchain. You can&apos;t redeem it for perks and accessabilities that
							owning the real one would grant you. For example, you can take a picture of a $100 bill, but that
							doesn&apos;t mean you actually have that money. No merchant would accept that picture as valid currency.
							Likewise, you can take a picture of a gym membership card, but if you tried to use it, it wouldn&apos;t
							grant you access to the gym.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q8'} onChange={handleChange('q8')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q8-content" id="q8-header">
						<Typography sx={styles.question}>How do I mint an NFT?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							Please see our{' '}
							<Link href="/guide" color="inherit">
								helping friendly guide
							</Link>{' '}
							for instructions on how to mint.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q9'} onChange={handleChange('q9')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q9-content" id="q9-header">
						<Typography sx={styles.question}>What are gas fees? Do I need gas to buy an NFT?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							“Gas” refers to units of energy that&apos;s burned during a transaction on the Ethereum network, while
							computers are verifying transactions and adding them to the blockchain. Think of it as a transaction fee,
							and it goes directly to Ethereum miners who provide the computer power necessary to verify transactions.
						</Typography>
						<Typography sx={styles.answer}>
							Gas prices fluctuate based on the demand at any given time. PhaNFT does not receive a percentage of gas
							fees and has no control over network congestion or gas prices.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q10'} onChange={handleChange('q10')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q10-content" id="q10-header">
						<Typography sx={styles.question}>
							If I mint a lizard, how will I know what traits and attributes its art will have?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							Think of it like opening a baseball card pack and pulling one card. You don&apos;t know which player you
							will get. With our Lizard collection, each Lizard is unique and contains a different set of traits, with
							some being more rare than others.
						</Typography>
						<Typography sx={styles.answer}>
							If you&apos;re seeking to acquire a rarer one or find another Lizard in the collection whose art you like
							better, you can always trade with other holders or list and buy on secondary markets like OpenSea.
							Likewise, you could luck out and mint one of the rarest, most unique, and coolest looking ones of the
							whole collection. This includes a Rutherford The Brave, of which 25 are being included in the collection.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q11'} onChange={handleChange('q11')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q11-content" id="q11-header">
						<Typography sx={styles.question}>What if I want to sell my Lizard NFT sometime after I buy it?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							You can sell your Lizard(s) anytime. There are several marketplaces where you can buy/sell NFTs, including
							OpenSea, Blur, and LooksRare, with the current market leader being{' '}
							<Link href="https://opensea.io" target="_blank" rel="noreferrer" color="inherit">
								OpenSea
							</Link>
							. OpenSea is like eBay for buying and selling NFTs. We encourage you to check the site out and spend some
							time exploring.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q12'} onChange={handleChange('q12')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q12-content" id="q12-header">
						<Typography sx={styles.question}>What are secondary royalties, and how will they be used?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							PhaNFT will receive 7.5% of all secondary sales. These proceeds will be used to fund ongoing operations
							and deliver even more value to our community.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q13'} onChange={handleChange('q13')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q13-content" id="q13-header">
						<Typography sx={styles.question}>How do I help save the race of Lizards from extinction?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							Buy at least one (1) Lizard during our minting period. It will remove it from their life of purgatory in
							Prussia and bring them safely to the blockchain where they can live forever in peace, harmony, and
							tranquility.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion sx={styles.item} expanded={expanded === 'q14'} onChange={handleChange('q14')}>
					<AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="q14-content" id="q14-header">
						<Typography sx={styles.question}>Other questions you&apos;d like us to add to this FAQ?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box className="small-block left" sx={{ mt: '0px !important' }} />
						<Typography sx={styles.answer}>
							Please email them to <Link href="mailto:gm@phanft.com">gm@phanft.com</Link>. We&apos;ll keep this updated
							and as robust as possible so phans with all levels of tech acumen can understand this and choose whether
							to participate.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Container>
		</Box>
	)
}

export default SectionFAQs
