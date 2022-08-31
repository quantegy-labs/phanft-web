import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Link, Paper, Typography } from '@mui/material'
import AppLayout from '../components/layouts/AppLayout'

const styles = {
	title: {
		textAlign: 'center',
		mt: 8,
	},
	paper: {
		px: 4,
		py: 6,
		my: 8,
		backgroundColor: '#fcfcfc',
		color: '#141414',
	},
	heading: {
		mt: 2,
		mb: 1,
		fontWeight: 700,
		textTransform: 'uppercase',
		fontSize: '16px',
	},
	effectiveDate: {
		fontSize: 16,
		fontStyle: 'italic',
		fontWeight: 300,
		mb: 6,
	},
	p: {
		mb: 1,
		fontSize: '14px',
	},
	li: {
		fontSize: '14px',
	},
}

const TermsAndConditionsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Terms and Conditions</title>
			</Head>
			<AppLayout>
				<Container maxWidth="lg">
					<Typography variant="h2" sx={styles.title}>
						Terms of Use
					</Typography>
					<Paper sx={styles.paper} elevation={3}>
						<Typography sx={styles.effectiveDate}>Last Updated: August 24, 2022</Typography>
						<Typography variant="h5" component="h3" gutterBottom>
							Quantegy Labs LLC (dba PHANFT)
						</Typography>
						<Typography variant="body1" component="h6" sx={styles.heading}>
							Introduction
						</Typography>
						<Typography sx={styles.p}></Typography>
						<Typography sx={styles.p}>
							Quantegy Labs LLC (“PHANFT” “we,” “us,” or “our”) provides its services (described below) and related
							content to you (“you” or “User”) through its website and platform for PHANFT NFTs located at phanft.xyz or
							any other sites maintained by us (the “Site”), subject to these Terms of Use (as amended from time to
							time, the “Terms”). The Privacy Policy and all such additional terms, guidelines, and rules as set forth
							on the Site are hereby incorporated by reference into these Terms and expressly agreed to and acknowledged
							by you. These terms govern your access to and use of this Site, as well as all content, functionality, and
							services offered on or through the Site, including Perks (as defined below) and using our smart contracts
							(collectively, the “Services”), and PHANFT NFTs. By signing up for an account on the Site, connecting your
							cryptocurrency wallet (e.g. MetaMask or WalletConnect) to the Services, or otherwise using or accessing
							the Services, Perks or any PHANFT NFTs, you acknowledge that you have read and agree to these Terms.
						</Typography>
						<Typography sx={styles.p}>
							<strong>You are entering into a binding agreement.</strong> By accessing or using our Services, you are
							entering into a binding agreement with PHANFT that includes: these terms and conditions, which govern your
							access to and use of our Services, products, and properties made available by PHANFT (“Terms”); our{' '}
							<Link href="/privacy" color="inherit">
								<strong>Privacy Policy</strong>
							</Link>{' '}
							which governs our collection and use of personal information and other data (the “Privacy Policy”);
							additional terms that may apply to, and be published in connection with, a specific PHANFT NFT or
							collection of PHANFT NFTs; and any other terms, conditions, or policies linked to in our Terms or Privacy
							Policy. Therefore, please carefully review these documents. If you do not agree with the terms of these
							documents, you may not use our Services. If there is a conflict between these Terms and any other the
							terms and conditions covering a specific area of the Services, the latter terms and conditions shall
							control unless they expressly state otherwise.
						</Typography>
						<Typography sx={styles.p}>
							<strong>We may modify these Terms.</strong> We reserve the right, at our sole discretion, to modify these
							Terms, at any time and without prior notice. If we modify these Terms, we will post the modification on
							the Services or provide you with notice of the modification. By continuing to access or use the Services
							after we have posted a modification on the Services or have provided you with notice of a modification,
							you are indicating that you agree to be bound by the modified Terms. If the modified Terms are not
							acceptable to you, your only recourse is to cease using the Services. We encourage you to check back
							regularly to review these Terms.
						</Typography>
						<Typography sx={styles.p}>
							<strong>We may modify or terminate the Services.</strong> We reserve the right, at our sole discretion, to
							change the URL, modify or discontinue, and restrict or block access to, all or part of the Services
							without notice to you.
						</Typography>
						<Typography sx={styles.p}>
							<strong>Smart Contract Enabled.</strong> The PHANFT NFTs and all future NFTs we offer (each a “PHANFT
							NFT”) are each a non-fungible token that uses smart contracts on the Ethereum blockchain (“Smart
							Contracts”). The Ethereum blockchain provides an immutable ledger of all transactions that occur on the
							blockchain. This means that all PHANFT NFTs are outside of the control of any one party, including
							Quantegy Labs and PHANFT, and are subject to many risks and uncertainties. PHANFT neither owns nor
							controls MetaMask, WalletConnect, the Ethereum network, your browser, or any other third party site,
							product, or service (including third party wallets or marketplaces) that you might access, visit, or use
							for the purpose of enabling you to use the Services or to purchase, list, auction, or sell PHANFT NFTs
							(“Transaction”), and that, except with respect to transferring control of a PHANFT NFT to the initial
							purchaser through the Services (“Initial Purchaser”), PHANFT has no responsibility with respect to any
							Transaction. PHANFT will not be liable for the acts or omissions of any third parties, nor will PHANFT be
							liable for any damage that you may suffer as a result of your transactions or any other interaction with
							any third parties. You understand that your Ethereum public address will be made publicly visible whenever
							you engage in a Transaction. Aside from transferring control of the PHANFT NFT to the Initial Purchaser,
							PHANFT has no control over the transfer, storage, ownership or maintenance of the PHANFT NFT.
						</Typography>
						<Typography sx={styles.p}>
							ALL TRANSACTIONS INITIATED THROUGH OUR WEBSITE ARE EFFECTED BY THIRD-PARTY DIGITAL WALLET EXTENSIONS (each
							an “Extension”). BY USING OUR SERVICES, YOU AGREE THAT SUCH TRANSACTIONS ARE GOVERNED BY THE TERMS OF
							SERVICES AND PRIVACY POLICY FOR THE APPLICABLE EXTENSIONS. FOR METAMASK, THOSE TERMS ARE AVAILABLE AT
							https://metamask.io/terms.html AND https://metamask.io/privacy.html.
						</Typography>
						<Typography sx={styles.p}>
							TO THE EXTENT AN ARTIST OFFERS UTILITY OR EXTENDS ARTIST TERMS IN CONNECTION WITH AN NFT SALE FACILITATED
							BY PHANFT, YOU ACKNOWLEDGE AND AGREE THAT PHANFT SHALL NOT BE A PARTY TO, OR HAVE ANY RESPONSIBILITY OR
							LIABILITY FOR, ARISING OUT OF, RELATING TO, ASSOCIATED WITH, OR RESULTING FROM ANY DISPUTES BETWEEN YOU
							AND ANY ARTIST WITH REGARD TO SUCH UTILITY OR ARTIST TERMS.
						</Typography>
						<Typography sx={styles.p}>
							<strong>
								ALL SALES ARE FINAL. ONCE AN NFT HAS BEEN SUCCESSFULLY SOLD AND TRANSFERRED, IT MAY NOT BE RETURNED AND
								THE PAYMENT AND ANY ASSOCIATED TRANSACTION (I.E., GAS) COSTS WILL NOT BE REFUNDED.
							</strong>
						</Typography>
						<Typography sx={styles.heading}>User Representations and Warranties</Typography>
						<Typography sx={styles.p}>
							By accessing or using our Services, you represent, warrant, and agree that:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									<strong>Age.</strong> You are at least eighteen (18) years old.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Authority.</strong> You have all requisite capacity, power, and authority to enter into and be
									bound by these Terms. If you accept these Terms on behalf of a company or other legal entity, you
									represent and warrant that you have the authority to bind that company or other legal entity to these
									Terms and, in such event, “you” and “your” will refer and apply to that company or other legal entity.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Non-Contravention.</strong> These Terms do not, and the performance of your obligations under
									these Terms and your minting, bidding on, buying, or selling of any Utility, as applicable to your use
									of the Services, will not: (i) if you are an entity, conflict with or violate any of the charter
									documents of such entity or any resolution adopted by its equity holders or other persons having
									governance authority over the entity; (ii) contravene, conflict with, or violate any right of any
									third party or any applicable legal requirement to which you or any of the assets owned or used by
									you, is subject; or (iii) result in any breach of or constitute a default (or an event that with
									notice or lapse of time or both would become a default) under any material contract or agreement to
									which you are a party, permit held by you or legal requirement applicable to you.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Independent Investigation and Non-Reliance.</strong> You are sophisticated, experienced, and
									knowledgeable in the minting, bidding on, buying, or selling of NFTs and any Utility, as applicable.
									Additionally, you have conducted an independent investigation of the Services and the matters
									contemplated by these Terms, have formed your own independent judgment regarding the benefits and
									risks of and necessary and desirable practices regarding the foregoing, and, in making the
									determination to mint, bid on, buy, or sell any NFTs and any Utility using the Services, you have
									relied solely on the results of such investigation and such independent judgment. Without limiting the
									generality of the foregoing, you understand, acknowledge, and agree that the legal requirements
									pertaining to blockchain technologies and digital assets generally, including, without limitation, the
									NFTs, are uncertain, and you have conducted an independent investigation of such potentially
									applicable legal requirements and the resulting risks and uncertainties, including the risk that one
									or more governmental entities or other persons may assert that any digital assets or cryptographic
									tokens (including the NFTs) may constitute securities under applicable legal requirements. You hereby
									irrevocably disclaim and disavow reliance upon any statements or representations made by or on behalf
									of, or information made available by, PHANFT, in determining to enter into these Terms, mint, bid on,
									buy, or sell any Utility or use the Services.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Compliance.</strong> You have not failed to comply with, and have not violated, any applicable
									legal requirement relating to any blockchain technologies, token trading activities, or minting of
									NFTs. No investigation or review by any governmental entity is pending or, to your knowledge, has been
									threatened against or with respect to you, nor does any government order or action prohibit you or any
									of your representatives from engaging in or continuing any conduct, activity, or practice relating to
									the Services.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.heading}>PHANFT NFT Rights and Restrictions</Typography>
						<Typography sx={styles.p}>
							Once you successfully purchase and receive a PHANFT NFT, you will own that NFT. Such owners of NFTs shall
							be referred to herein as “NFT Owners.” At all relevant times, PHANFT will recognize as the NFT Owner the
							individual able to authorize transactions through the Wallet associated with the applicable NFT as
							identified by the Collection&apos;s smart contract.
						</Typography>
						<Typography sx={styles.p}>
							<strong>
								WHILE AN NFT MAY BE ASSOCIATED WITH A DIGITAL WORK, IT IS IMPORTANT TO UNDERSTAND THAT NFT OWNERS DO NOT
								OWN THE DIGITAL WORK OR THE COPYRIGHT IN THE DIGITAL WORK.
							</strong>
						</Typography>
						<Typography sx={styles.p}>
							Except as otherwise stated in these Terms, each PHANFT NFT is MINTangible™ certified which means that the
							NFT has verified rights terms bound to the NFT providing assurances and clarity of what license and other
							rights the NFT Owner is entitled to while owning a PHANFT NFT. You can access those rights terms from the
							NFT listing of each PHANFT NFT.
						</Typography>
						<Typography sx={styles.p}>
							In addition, you agree never to use any Digital Work or PHANFT NFT in any way that: (a) violates the
							rights of any third party, any applicable law, rule, or regulation, or these Terms; (b) is obscene,
							profane, pornographic, vulgar, or offensive; (c) incites or promotes violence or violent or dangerous
							behavior, or depicts violence (either towards others or oneself); (d) involves hate speech, endorses any
							form of hate, or harasses, abuses, insults, harms, defames, slanders, disparages, intimidates, threatens,
							or discriminates against others based on gender, sexual orientation, religion, ethnicity, race, age,
							national origin, or disability; (e) spreads false, deceptive, misleading, otherwise unsubstantiated or
							unfair information or material or promotes any particular political agenda or message; and (f) promotes
							any activities that may be or appear unsafe or dangerous, including, without limitation, excessive
							consumption of alcohol, illegal drugs, tobacco, firearms/weapons (or the use of any of the foregoing).
						</Typography>
						<Typography sx={styles.p}>
							Other than as stated in these Terms, you are not allowed to use any of PHANFT&apos;s intellectual property
							rights (such as trademarks, copyright, and design rights) whether registered or unregistered. All rights
							therein and goodwill associated therewith shall insure to the benefit of PHANFT.
						</Typography>
						<Typography sx={styles.p}>
							By participating in the Services, you grant to PHANFT an irrevocable, perpetual, unlimited, royalty-free,
							fully paid-up, worldwide, sublicensable right to use your public Wallet address and, to the extent made
							publicly available, any alias, name, avatar, online profile, domain name, or other information associated
							with your public Wallet address, for any lawful purpose whatsoever.
						</Typography>
						<Typography sx={styles.heading}>Ownership</Typography>
						<Typography sx={styles.p}>
							Unless otherwise indicated in writing by us, the Services and all content and other materials contained
							therein, including, without limitation, the PHANFT logo and all designs, text, graphics, pictures,
							information, data, software, sound files, other files and the selection and arrangement thereof
							(collectively, “Content”) are the proprietary property of PHANFT or our affiliates, licensors, or users,
							as applicable. Notwithstanding anything to the contrary in these Terms, the Services and Content may
							include software components provided by PHANFT or its affiliates or a third party that are subject to
							separate license terms, in which case those license terms will govern such software components. All other
							trademarks, registered trademarks, product names, and other names or logos mentioned on the Services are
							the property of their respective owners and may not be copied, imitated, or used, in whole or in part,
							without the permission of the applicable trademark holder. Reference to any products, services, processes,
							or other information by name, trademark, manufacturer, supplier, or otherwise does not constitute or imply
							endorsement, sponsorship, or recommendation by PHANFT.
						</Typography>
						<Typography sx={styles.heading}>License to Our Services</Typography>
						<Typography sx={styles.p}>
							Subject to your compliance with these Terms and other applicable terms, you are hereby granted a limited,
							revocable, nonexclusive, nontransferable, non-assignable, non-sublicensable, “as-is” license to access and
							use the Services for your own personal, non-commercial use; provided, however, that such license does not
							include any right to: (i) modify or otherwise make any derivative uses of the Services or Content, or any
							portion thereof, (ii) use any data mining, robots, or similar data gathering or extraction methods, (iii)
							download (other than page caching) any portion of the Services or Content, except as expressly permitted
							by us, or (iv) use the Services or Content other than for their intended purposes.
						</Typography>
						<Typography sx={styles.heading}>Acceptable Use</Typography>
						<Typography sx={styles.p}>
							You agree that you are solely responsible for your conduct while participating in the purchase or sale of
							PHANFT NFTs or otherwise accessing or using the Services. You agree that you will abide by these Terms and
							will not:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									Use the Services or any blockchain technology for any illegal or unauthorized purpose, or engage in,
									encourage, or promote any activity that violates any applicable law or these Terms.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>Provide false or misleading information to PHANFT.</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Use or attempt to use or access another person&apos;s Wallet without authorization from such person.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Take or attempt to take any action that in any way that could prevent, disrupt, negatively affect, or
									inhibit others from fully enjoying the Services, or that could alter, damage, disable, overburden, or
									impair the functioning of the Services in any manner.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>Collect, scrape, or harvest data from our Services.</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Engage in or knowingly facilitate any “front-running,” “wash trading,” “pump and dump trading,”
									“ramping,” “cornering,” or fraudulent, deceptive, or manipulative trading activities, including,
									without limitation: (i) for the purpose of creating or inducing a false, misleading, or artificial
									appearance of activity or value in any NFT, facilitate the trading of such NFT at successively lower
									or higher prices or executing or causing the execution of any transaction involving the NFT which
									causes no material change in the beneficial ownership thereof; (ii) participating in, facilitating,
									assisting, or knowingly transacting with any person or persons for the purpose of artificially,
									unfairly, or deceptively influencing the market price of an NFT; or (iii) otherwise artificially,
									unduly, or improperly influencing the market price for any NFT available through the Services in any
									manner, including without limitation, on or through social media.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.heading}>PHANFT Perks</Typography>
						<Typography sx={styles.p}>
							An NFT Owner of a PHANFT NFT may be entitled to receive special perks, experience, or opportunities as
							determined by PHANFT in its sole discretion (“Perks”) during the period in which the NFT Owner owns the
							PHAN NFT. PHANFT does not make any representation or guarantee that any NFT Owner will receive any Perks
							or achieve any particular outcome as a result of owning a PHANFT NFT. PHANFT reserves the right, at any
							time, to restrict, limit, or deny any Perks to an NFT Owner, including to limit the period of time when a
							Perk is available, for any reason. Perks are not intended to be an endorsement of any project, creator,
							NFT, individual or any other thing, and PHANFT makes no recommendation and provides no investment advice
							in connection with any Perks or otherwise as a result of holding or owning the PHANFT NFT.
						</Typography>
						<Typography sx={styles.heading}>Export Controls and Sanctions</Typography>
						<Typography sx={styles.p}>
							You acknowledge and understand that the Services and items offered through the Services, including NFTs,
							Digital Works, and Utility, are subject to U.S. export control and sanctions laws and regulations,
							including, without limitation, the Export Administration Regulations and the regulations, rules, and
							executive orders administered by the Office of Foreign Assets Control of the U.S. Department of the
							Treasury (“OFAC”) (collectively, the “Export Controls and Sanctions Laws”). You represent that you are not
							a Sanctioned Person and agree not to take any action that will cause anyone, including, without
							limitation, PHANFT, to be in violation of any Export Controls and Sanctions Laws.
						</Typography>
						<Typography sx={styles.p}>
							For purposes of these Terms, “Sanctioned Person” means any government, country, corporation, or other
							entity, group, or individual with whom or which Export Controls and Sanctions Laws prohibit or restrict a
							U.S. person from engaging in transactions, and includes, without limitation, any individual, corporation,
							or other entity that appears on OFAC&apos;s Specially Designated Nationals and Blocked Persons List or
							other lists maintained by OFAC or the U.S. Department of Commerce, as each such list may be amended from
							time to time.
						</Typography>
						<Typography sx={styles.heading}>Right to Suspend, Modify, or Terminate</Typography>
						<Typography sx={styles.p}>
							PHANFT may, from time to time, change or discontinue any or all aspects or features of the Services,
							including, without limitation, by (i) altering the smart contracts pursuant to upgrades, forks, security
							incident responses, or chain migrations or (ii) deactivating or deleting any media, Content, or portion of
							the Services in PHANFT&apos;s sole and absolute discretion.
						</Typography>
						<Typography sx={styles.p}>
							Persons who tamper with or abuse any aspect of our Services, who act in a disruptive manner, or who are in
							violation of these Terms, as solely determined by PHANFT, may be banned from participating in and/or
							accessing our Services.
						</Typography>
						<Typography sx={styles.p}>
							Should any of PHANFT&apos;s Services be, in PHANFT&apos;s sole opinion, compromised by bots, worms, bugs,
							non-authorized human intervention, or other causes which, in the sole opinion of PHANFT, corrupt or impair
							the administration, security, or fairness of the Services or the distribution of the NFTs or otherwise
							adversely affect PHANFT&apos;s business or good will, PHANFT reserves the right in its sole discretion to
							suspend, modify, or terminate the Services.
						</Typography>
						<Typography sx={styles.heading}>Assumption of Risk; Liability Waiver</Typography>
						<Typography sx={styles.p}>By participating in the Services:</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									You acknowledge and accept that transacting on a blockchain, including, without limitation, minting,
									bidding on, buying, or selling NFTs, contains inherent risk. Such risks include but are not limited
									to: (a) risk of sudden asset price changes; (b) risk of smart contract failure or exploit; (c) risk of
									hardware, software, or connectivity failure; (d) risk of malicious software; (e) risks of unauthorized
									access to your Wallet; (f) risk that you will no longer successfully retain ownership of or access to
									the NFT(s); (g) risk that any data or any Digital Work becomes unavailable or decoupled from the NFT,
									including, without limitation, because of an outage, data loss, or pursuant to a valid Digital
									Millennium Copyright Act takedown procedure; (h) risk from regulatory inquiries, regulatory actions,
									legislation, or court rulings; and/or (i) risks, bugs, malfunctions, cyberattacks, or changes to a
									blockchain network (e.g., forks) or related technologies that disrupt or result in a total loss of
									NFTs, their market value, or digital funds.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									You acknowledge and accept these and all associated risks and responsibilities and agree that your
									participation in the Services is at your own risk. You should not participate in the Services,
									including to engage in blockchain-based transactions, unless it is suitable given your circumstances
									and financial resources.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									You agree that PHANFT shall not be responsible or liable, directly or indirectly, for any damage or
									loss caused or alleged to be caused by or in connection with any of these risks.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									You acknowledge and accept that the sale of NFTs as part of the Services is facilitated and run by
									numerous third parties including, without limitation, your Wallet provider and one or more public
									peer-to-peer networks including, without limitation, the Ethereum network or other blockchain network
									and the Interplanetary File System (“IPFS”) or other distributed system for storing and accessing
									files or other data. None of these are under the control or influence of PHANFT. PHANFT shall not be
									responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused
									by or in connection with any third party, including, without limitation, lost, late, incomplete,
									damaged, delayed, inaccurate, stolen, misdirected, undelivered, or garbled NFTs, or for errors or
									difficulties of any kind related thereto, whether human, mechanical, electronic, computer, network,
									typographical, or otherwise. Transactions are publicly visible on the Ethereum or other applicable
									blockchain when made.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									You acknowledge and agree that PHANFT is not a fiduciary and owes no duties to you, including, without
									limitation, the duty to ensure fair pricing of any NFT(s) or to address, resolve, or otherwise
									participate in any situation, dispute, or cause of action involving the unauthorized transfer or sale
									of any NFT(s).
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									You agree to bear sole responsibility for paying any and all taxes, duties, and assessments payable as
									the result of purchase, ownership, sale, transfer, use and/or exploitation of any NFT.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									You expressly agree that the release and waiver of liability contained herein is intended to be as
									broad and as inclusive as is permitted by applicable law and that if any portion hereof is held
									invalid, it is agreed that the balance shall, notwithstanding, continue in full legal force and
									effect.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.heading}>DISCLAIMER OF WARRANTIES</Typography>
						<Typography sx={styles.p}>
							YOUR USE OF THE SERVICES, PHANFT NFTs, ART AND PERKS IS AT YOUR SOLE RISK. EXCEPT AS EXPRESSLY PROVIDED TO
							THE CONTRARY IN A WRITING BY PHANFT, THE SERVICES, PERKS, SERVICES CONTENT, AND ANY AND ALL PHANFT NFTs
							AND ART ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
							EITHER EXPRESS OR IMPLIED.
						</Typography>
						<Typography sx={styles.p}>
							PHANFT AND ITS affiliates and their respective officers, employees, representatives, directors and agents
							(COLLECTIVELY, “REPRESENTATIVES”) MAKE NO WARRANTY THAT (I) THE SERVICES, PHANFT NFTs, ART OR PERKS WILL
							MEET YOUR REQUIREMENTS, (II) THE SERVICES, PHANFT NFTs, ART OR PERKS WILL BE UNINTERRUPTED, TIMELY,
							SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES, PHANFT NFTs,
							ART OR PERKS WILL BE ACCURATE OR RELIABLE, OR (IV) THE QUALITY OF ANY SERVICES, PHANFT NFTs, ART OR PERKS,
							OR ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE
							SERVICES, PHANFT NFTs OR PERKS WILL MEET YOUR EXPECTATIONS.
						</Typography>
						<Typography sx={styles.p}>
							PHANFT AND ITS REPRESENTATIVES WILL NOT BE LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN
							IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE SERVICES, PHANFT NFTs, ART OR PERKS. PHANFT DOES
							NOT REPRESENT OR WARRANT THAT SERVICES CONTENT IS ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE.
						</Typography>
						<Typography sx={styles.p}>
							PHANFT NFTs ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN
							THE ETHEREUM NETWORK. ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL ASSET OCCURS ON THE
							DECENTRALIZED LEDGER WITHIN THE ETHEREUM PLATFORM. WE DO NOT GUARANTEE THAT PHANFT CAN EFFECT THE TRANSFER
							OF TITLE OR RIGHT IN ANY PHANFT NFT.
						</Typography>
						<Typography sx={styles.heading}>LIMITATION OF LIABILITY</Typography>
						<Typography sx={styles.p}>
							TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL PHANFT, PHANFT&apos;S AFFILIATES OR ANY OF THEIR
							RESPECTIVE MEMBERS, EMPLOYEES, OFFICERS, AGENTS, REPRESENTATIVES, SUCCESSORS OR ASSIGNS (“PHANFT PARTIES”)
							BE LIABLE TO YOU FOR ANY LOSS, DAMAGE, OR INJURY OF ANY KIND INCLUDING, WITHOUT LIMITATION, ANY DIRECT,
							INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE LOSSES OR DAMAGES, OR DAMAGES FOR
							SYSTEM FAILURE OR MALFUNCTION OR LOSS OF PROFITS, DATA, USE, BUSINESS, OR GOOD-WILL OR OTHER INTANGIBLE
							LOSSES, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES. IN NO EVENT WILL THE PHANFT
							PARTIES&apos; CUMULATIVE LIABILITY TO YOU OR ANY OTHER PERSON OR ENTITY, FROM ALL CAUSES OF ACTION AND ALL
							THEORIES OF LIABILITY, EXCEED THE TOTAL AMOUNTS PAID BY YOU TO THE PHANFT PARTIES IN CONNECTION WITH THE
							SERVICES IN THE PAST TWELVE MONTHS FOR THE SERVICES GIVING RISE TO THE CLAIM.
						</Typography>
						<Typography sx={styles.p}>
							UNDER NO CIRCUMSTANCES SHALL ANY PHANFT PARTY BE REQUIRED TO DELIVER TO YOU ANY VIRTUAL CURRENCY AS
							DAMAGES, MAKE SPECIFIC PERFORMANCE, OR ANY OTHER REMEDY. IF YOU WOULD BASE YOUR CALCULATIONS OF DAMAGES IN
							ANY WAY ON THE VALUE OF VIRTUAL CURRENCY, YOU AND WE AGREE THAT THE CALCULATION SHALL BE BASED ON THE
							LOWEST VALUE OF THE VIRTUAL CURRENCY DURING THE PERIOD BETWEEN THE INITIAL INCIDENT RESULTING IN THE
							ACCRUAL OF THE CLAIM AND THE AWARD OF DAMAGES.
						</Typography>
						<Typography sx={styles.p}>
							THIS LIMITATION OF LIABILITY IS INTENDED TO APPLY WITHOUT REGARD TO WHETHER OTHER PROVISIONS OF THESE
							TERMS HAVE BEEN BREACHED OR HAVE PROVEN INEFFECTIVE. THE LIMITATIONS SET FORTH IN THIS SECTION SHALL APPLY
							REGARDLESS OF THE FORM OF ACTION, WHETHER THE ASSERTED LIABILITY OR DAMAGES ARE BASED ON CONTRACT,
							INDEMNIFICATION, TORT, STRICT LIABILITY, STATUTE, OR ANY OTHER LEGAL OR EQUITABLE THEORY AND WHETHER OR
							NOT THE PHANFT PARTIES HAVE BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE.
						</Typography>
						<Typography sx={styles.p}>
							SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES AND LIABILITIES PROVIDED
							IN THIS SECTION, SO SOME OF THE ABOVE LIMITATIONS AND DISCLAIMERS MAY NOT APPLY TO YOU. TO THE EXTENT
							APPLICABLE LAW DOES NOT PERMIT PHANFT PARTIES TO DISCLAIM CERTAIN WARRANTIES OR LIMIT CERTAIN LIABILITIES,
							THE EXTENT OF PHANFT PARTIES&apos; LIABILITY AND THE SCOPE OF ANY SUCH WARRANTIES WILL BE AS PERMITTED
							UNDER APPLICABLE LAW.
						</Typography>
						<Typography sx={styles.heading}>Indemnification</Typography>
						<Typography sx={styles.p}>
							To the fullest extent permitted by applicable law, you agree to indemnify, defend, and hold harmless
							Quantegy Labs LLC and the PHANFT Parties from and against all actual or alleged third party claims,
							damages, awards, judgments, losses, liabilities, obligations, penalties, interest, fees, expenses
							(including, without limitation, attorneys&apos; fees and expenses), and costs (including, without
							limitation, court costs, costs of settlement, and costs of or associated with pursuing indemnification and
							insurance), of every kind and nature whatsoever arising out of or related to these Terms or your use of
							the Services, whether known or unknown, foreseen or unforeseen, matured or unmatured, or suspected or
							unsuspected, in law or equity, whether in tort, contract or otherwise (collectively, “Claims”) that are
							caused by, arise out of, or are related to (a) your use or misuse of the Services, (b) your violation of
							these Terms; (c) your violation of the rights of any third party, including another user of any Wallet;
							(d) any breach or non-performance of any representation, warranty, covenant, or agreement made by you; and
							(e) your buying, selling, or trading of any NFTs.
						</Typography>
						<Typography sx={styles.heading}>
							Arbitration agreement and waiver of rights, including class actions
						</Typography>
						<Typography sx={styles.p}>
							PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT
							TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIMS. IT CONTAINS PROCEDURES FOR MANDATORY
							BINDING ARBITRATION AND A CLASS ACTION WAIVER.
						</Typography>
						<Typography sx={styles.heading}>
							Agreement to Attempt to Resolve Disputes Through Good Faith Negotiations
						</Typography>
						<Typography sx={styles.p}>
							Prior to commencing any legal proceeding against us of any kind, including an arbitration as set forth
							below, you and we agree that we will attempt to resolve any dispute, claim, or controversy between us
							arising out of or relating to these Terms or the Services (each, a “Dispute” and, collectively,
							“Disputes”) by engaging in good faith negotiations. Such good faith negotiations require, at a minimum,
							that the aggrieved party provide a written notice to the other party specifying the nature and details of
							the Dispute. The party receiving such notice shall have (30) days to respond to the notice. Within sixty
							(60) days after the aggrieved party sent the initial notice, the parties shall meet and confer in good
							faith by video conference or by telephone to try to resolve the Dispute. If the parties are unable to
							resolve the Dispute within ninety (90) days after the aggrieved party sent the initial notice, the parties
							may agree to mediate their Dispute, or either party may submit the Dispute to arbitration as set forth
							below.
						</Typography>
						<Typography sx={styles.heading}>Governing Law</Typography>
						<Typography sx={styles.p}>
							These Terms will be governed by the laws of the State of New York,without regard to conflict of law
							provisions. You and we expressly agree that any claim or dispute must be resolved exclusively by a state
							or federal court or arbitration located in Colorado, except as described in the agreement to arbitrate
							below or as otherwise mutually agreed by the parties.
						</Typography>
						<Typography sx={styles.heading}>Agreement to Arbitrate</Typography>
						<Typography sx={styles.p}>
							Except as provided below,{' '}
							<strong>
								you and we agree that any Dispute that cannot be resolved through the procedures set forth above will be
								resolved through binding arbitration on an individual basis. Class actions and class arbitrations are
								not allowed.
							</strong>{' '}
							You may bring a claim only on behalf of yourself and cannot seek relief that would affect other users of
							our services. If there is a final judicial ruling that any particular claim (or a request for particular
							relief) cannot be arbitrated in accordance with these Terms, then only that particular claim or request
							for relief may be brought in court. All other claims (or requests for relief) remain subject to this
							provision. Questions of arbitrability—i.e., whether a particular claim is subject to arbitration—shall be
							resolved in arbitration.
						</Typography>
						<Typography sx={styles.p}>
							Instead of commencing an arbitration, you or we may also bring claims in your local “small claims” court
							if the rules applicable to that court allow it. Otherwise, the claims must be resolved by binding,
							individual arbitration.
						</Typography>
						<Typography sx={styles.p}>
							If you are in the United States, the arbitration will be conducted by the American Arbitration Association
							(AAA) under its Consumer Arbitration Rules. If you are outside of the United States, the arbitration will
							be conducted by the International Centre for Dispute Resolution in accordance with its International
							Expedited Procedures. The arbitration will be decided by a sole arbitrator. The arbitrator will have
							experience adjudicating matters involving Internet technology, software applications, financial
							transactions and, ideally, blockchain technology. The costs and fees of arbitration shall be allocated in
							accordance with the arbitration provider&apos;s rules, including rules regarding frivolous or improper
							claims.
						</Typography>
						<Typography sx={styles.heading}>You and we expressly waive a trial by jury.</Typography>
						<Typography sx={styles.p}>
							The arbitration will be governed by the Federal Arbitration Act. The prevailing party will be entitled to
							an award of their reasonable attorney&apos;s fees and costs. Except as may be required by law, neither a
							party nor its representatives may disclose the existence, content, or results of any arbitration hereunder
							without the prior written consent of (all/both) parties.
						</Typography>
						<Typography sx={styles.heading}>Limitation of Actions</Typography>
						<Typography sx={styles.p}>
							You and we agree that regardless of any statute or law to the contrary, any claim or cause of action
							arising from or relating to these Terms or the Services must be filed within one (1) year after such claim
							or cause of action arose, or will be forever barred.
						</Typography>
						<Typography sx={styles.heading}>Severability</Typography>
						<Typography sx={styles.p}>
							Should any portion of these Terms be rendered void, invalid, or unenforceable by any court of competent
							jurisdiction, the remaining provisions shall nevertheless be binding upon the parties.
						</Typography>
						<Typography sx={styles.heading}>Survival</Typography>
						<Typography sx={styles.p}>
							Any provision of these Terms that by its nature would extend beyond its expiration or termination shall
							remain in effect in perpetuity or until fulfilled.
						</Typography>
						<Typography sx={styles.heading}>Contact Information</Typography>
						<Typography sx={styles.p}>
							If you have any questions, would like to provide feedback, or would like more information about PHANFT,
							please feel free to email us at{' '}
							<Link href="mailto:gm@phanft.xyz" color="inherit">
								gm@phanft.xyz
							</Link>
							.
						</Typography>
					</Paper>
				</Container>
			</AppLayout>
		</>
	)
}

export default TermsAndConditionsPage
