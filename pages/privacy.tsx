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

const PrivacyPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Privacy Policy</title>
			</Head>
			<AppLayout>
				<Container maxWidth="lg">
					<Typography variant="h2" sx={styles.title}>
						Privacy Policy
					</Typography>
					<Paper sx={styles.paper} elevation={3}>
						<Typography sx={styles.effectiveDate}>Effective Date: August 30, 2022</Typography>
						<Typography variant="h5" component="h3" gutterBottom>
							Quantegy Labs LLC
						</Typography>
						<Typography sx={styles.heading}>Introduction and Overview.</Typography>
						<Typography sx={styles.p}>
							This Privacy Policy (“<strong>Privacy Policy</strong>”) provides a comprehensive description of how
							Quantegy Labs LLC (&quot;<strong>PHANFT</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;
							<strong>our</strong>&quot;, or &quot;<strong>us</strong>&quot;) collects, uses, and discloses information
							about you as well as your rights and choices regarding such information. It applies to any online location
							controlled by us that links to this Privacy Policy (the &quot;<strong>Services</strong>&quot;).
						</Typography>
						<Typography sx={styles.p}>
							By using the Services, you agree to our{' '}
							<Link href="/terms" color="inherit">
								<strong>Terms of Use</strong>
							</Link>{' '}
							and to our collection, use and disclosure practices, and other activities as described in this Privacy
							Policy. If you do not agree, discontinue use of the Services.
						</Typography>
						<Typography sx={styles.p}>
							If you have any questions or wish to exercise your rights and choices, please contact us as set out in the
							“Contact Us” section.
						</Typography>
						<Typography sx={styles.heading}>Our Privacy Principles</Typography>
						<Typography sx={styles.p}>
							We are committed to recognizing and respecting your privacy rights by keeping you informed and processing
							and protecting your personal data in compliance with applicable data protection laws and regulations
							(“Data Protection Laws”).
						</Typography>
						<Typography sx={styles.p}>
							If you are located outside of the United States and you choose to use the Services or provide your
							information to us, your data may be transferred to, processed and maintained on servers, databases or
							cloud storage facilities located in the United States. Your use of the Services represents your consent
							and agreement to these practices. If you do not want your data transferred to or processed or maintained
							in the United States, you should not use the Services.
						</Typography>
						<Typography sx={styles.heading}>Information You provide that we Collect</Typography>
						<Typography sx={styles.p}>
							We collect information about you when you use the Services, including information you provide when you
							access our content. The categories of information we collect include:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									<strong>Contact Data</strong>, including your email address, phone number, and name.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Transaction Data</strong> relating to the minting of non-fungible tokens (“
									<strong>NFTs</strong>”), including information regarding your cryptocurrency wallet and the purchase
									price, date and location of the transaction.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							You may choose to voluntarily provide other information to us that we do not request, and, in such
							instances, you are solely responsible for such information.
						</Typography>
						<Typography sx={styles.heading}>Information Collected Automatically.</Typography>
						<Typography sx={styles.p}>
							In addition, we automatically collect information when you use the Services. The categories of information
							we automatically collect include:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									<strong>Services Use Data</strong>, including data about features you use, pages you visit, the time
									of day you browse, and your referring and exiting pages.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Device Data</strong>, including data about the type of device or browser you use, your
									device&apos;s operating software, your internet service provider, your device&apos;s regional and
									language settings, and device identifiers such as IP address.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Location Data</strong>, including non-precise location data (such as location derived from an
									IP address or data that indicates a city or postal code level).
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							The types of tracking technologies we use to automatically collect this information include:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									<strong>Cookies</strong>, which are small data files stored on your browser that save data about your
									visit. Cookies often include a unique identifier (e.g., cookie #123). We use two types of cookies:
									session cookies and persistent cookies. Session cookies make it easier for you to navigate our website
									and expire when you close your browser. Persistent cookies help with personalizing your experience,
									remembering your preferences, and supporting security features. Persistent cookies may remain on your
									device for extended periods of time, and expire on a set expiration date or when they are deleted
									manually.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Pixels</strong> (also known as web beacons), which is code embedded in a service that sends
									information about your use to a server. There are various types of pixels, including image pixels
									(which are small graphic images) and JavaScript pixels (which contains JavaScript code). When you
									access a service that contains a pixel, the pixel may permit us or a separate entity to drop or read
									cookies on your browser, or collect other information about your visit.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Device Fingerprinting</strong>, which is the process of analyzing and combining sets of data
									elements from your device&apos;s browser, such as JavaScript objects and installed fonts, to create a
									“fingerprint” of your device and uniquely identify your browser and device.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							For further information on how we use tracking technologies for analytics, and your rights and choices
							regarding them, see the “Analytics” and “Your Rights and Choices” sections below.
						</Typography>
						<Typography sx={styles.heading}>Information from Other Sources.</Typography>
						<Typography sx={styles.p}>
							We also collect information from other sources. The categories of sources from which we collect
							information include:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									<strong>Social media platforms</strong> with which you interact, including our Discord server.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Publicly-available sources</strong>, including data in the public domain.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.heading}>Use of Information.</Typography>
						<Typography sx={styles.p}>
							We collect and use information in accordance with the practices described in this Privacy Policy. Our
							purposes for collecting and using information include:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>Providing the Services to you.</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Preventing and addressing fraud, breach of policies or terms, or threats or harm.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Understanding trends, usage, and activities, including through tracking technologies, to make business
									and marketing decisions.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Communicating with you about updates, security alerts, changes to policies, and other transactional
									messages.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Personalizing your experience to show you content we believe you will find interesting.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									Engaging in direct marketing, promotional communications, and non-personalized advertising.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>Fulfilling any purpose at your direction.</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>With notice to you and your consent.</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							Notwithstanding the above, we may use publicly available information (as that term is defined by
							applicable law) or information that does not identify you (including information that has been aggregated
							or de-identified as those terms are defined by applicable law) for any purpose to the extent permitted by
							applicable law. For information on your rights and choices regarding how we use information about you,
							please see the “Your Rights and Choices” section below.
						</Typography>
						<Typography sx={styles.heading}>Disclosure of Information.</Typography>
						<Typography sx={styles.p}>
							We disclose the information we collect in accordance with the practices described in this Privacy Policy.
							The categories of persons to whom we disclose information include:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									We disclose information to our affiliates and related entities, including where they act as our
									service providers or for their own internal purposes.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Public Forums.</strong> We disclose information you make public through the Services, such as
									information that you post on our Discord server. Please think carefully before making information
									public as you are solely responsible for any information you make public. Once you have posted
									information, you may not be able to edit or delete such information, subject to additional rights set
									out in the “Your Rights and Choices” section below.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Merger or Acquisition.</strong> We disclose information in connection with, or during
									negotiations of, any proposed or actual merger, purchase, sale or any other type of acquisition or
									business combination of all or any portion of our assets, or transfer of all or a portion of our
									business to another business.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Security and Compelled Disclosure.</strong> We disclose information to comply with the law or
									other legal process, and where required, in response to lawful requests by public authorities,
									including to meet national security or law enforcement requirements. We also disclose information to
									protect the rights, property, life, health, security and safety of us, the Services or anyone else.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Facilitating Requests.</strong> We disclose information where you direct us to disclose the
									information.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>We disclose information with notice to you and your consent.</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							Notwithstanding the above, we may disclose publicly available information (as that term is defined by
							applicable law) or information that does not identify you (including information that has been aggregated
							or de-identified as those terms are defined by applicable law) to the extent permitted by applicable law.
							For information on your rights and choices regarding how we disclose information about you, please see the
							“Your Rights and Choices” section below.
						</Typography>
						<Typography sx={styles.heading}>Other Parties.</Typography>
						<Typography sx={styles.p}>
							We offer parts of our Services through websites, platforms, and services operated or controlled by other
							parties. In addition, we integrate technologies operated or controlled by other parties into parts of our
							Services.
						</Typography>
						<Typography sx={styles.p}>Some examples include:</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									Our Services include links that hyperlink to websites, platforms, and other services not operated or
									controlled by us.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Brand Pages and Messaging.</strong> We may offer our content through social media. Any
									information you provide to us when you engage with our content (such as through our brand pages on
									Twitter and Instagram or our Discord server) is treated in accordance with this Privacy Policy. Also,
									if you publicly reference our Services on social media (e.g., by using a hashtag associated with
									PHANFT in a tweet or post), we may use your reference on or in connection with our Services.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							Please note that when you interact with other parties, including when you leave our Services, those
							parties may independently collect information about you and solicit information from you. The information
							collected and stored by those parties remains subject to their own policies and practices, including what
							information they share with us, your rights and choices on their services and devices, and whether they
							store information in the U.S. or elsewhere. We encourage you to familiarize yourself with and consult
							their privacy policies and terms of use.
						</Typography>
						<Typography sx={styles.heading}>Analytics.</Typography>
						<Typography sx={styles.p}>
							We use analytics services, such as Google Analytics, to help us understand how users access and use the
							Services.
						</Typography>
						<Typography sx={styles.p}>
							As indicated above, vendors and other parties may act as our service providers, or in certain contexts,
							independently decide how to process your information. We encourage you to familiarize yourself with and
							consult their privacy policies and terms of use.
						</Typography>
						<Typography sx={styles.p}>
							For further information on the types of tracking technologies we use on the Services and your rights and
							choices regarding analytics, please see the “Information Collected Automatically” and “Your Rights and
							Choices” sections.
						</Typography>
						<Typography sx={styles.heading}>Your Rights and Choices.</Typography>
						<Typography sx={styles.p}>
							In addition to the rights and choices below, you may have additional rights based on your jurisdiction.
							Please click the relevant link at the top of this Privacy Policy or visit the applicable section below for
							more information.
						</Typography>
						<Typography sx={styles.heading}>Tracking Technology Management.</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									Most browsers accept cookies by default. You can instruct your browser, by changing its settings, to
									decline or delete cookies. If you use multiple browsers on your device, you will need to instruct each
									browser separately. Your ability to limit cookies is subject to your browser settings and limitations.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Do Not Track.</strong> Your browser settings may allow you to automatically transmit a “Do Not
									Track” signal to online services you visit. Note, however, there is no industry consensus as to what
									site and app operators should do with regard to these signals. Accordingly, unless and until the law
									is interpreted to require us to do so, we do not monitor or take action with respect to “Do Not Track”
									signals. For more information on “Do Not Track,” visit{' '}
									<Link href="https://allaboutdnt.com" target="_blank" rel="noreferrer noopener" color="inherit">
										https://allaboutdnt.com
									</Link>
									.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							Please be aware that if you disable or remove tracking technologies some parts of the Services may not
							function correctly.
						</Typography>
						<Typography sx={styles.heading}>Analytics Management.</Typography>
						<Typography sx={styles.p}>
							Google provides tools to allow you to opt out of the use of certain information collected by Google
							Analytics at{' '}
							<Link
								href="https://tools.google.com/dlpage/gaoptout"
								target="_blank"
								rel="noreferrer noopener"
								color="inherit"
							>
								https://tools.google.com/dlpage/gaoptout
							</Link>
							.
						</Typography>
						<Typography sx={styles.p}>
							Please note that the above opt out only applies to the specific browser from which you opt out. We are not
							responsible for the effectiveness of any opt outs offered by other entities.
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									<strong>E-mails.</strong> You can unsubscribe from receiving promotional emails by following the
									unsubscribe instructions at the bottom of the email, or emailing us at{' '}
									<Link href="mailto:gm@phanft.xyz" color="inherit">
										gm@phanft.xyz
									</Link>{' '}
									with the word UNSUBSCRIBE in the subject field of the email. Please note that you cannot opt out of
									transactional messages.
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									<strong>Text Messages.</strong> You can opt-out of receiving text messages to your phone number at any
									time by texting “STOP” in response to any text message you receive from us or contacting us as set out
									in the “Contact Us” section below and specifying you want to opt-out of text messages.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							Please note that your opt out is limited to the email address and phone number used and will not affect
							subsequent subscriptions.
						</Typography>
						<Typography sx={styles.heading}>Children.</Typography>
						<Typography sx={styles.p}>
							The Services are not directed toward children under 13 years old, and we do not knowingly collect personal
							information (as that term is defined by the U.S. Children&apos;s Privacy Protection Act, or “COPPA”) from
							children. If you are a parent or guardian and believe we have collected personal information from
							children, please contact us at{' '}
							<Link href="mailto:gm@phanft.xyz" color="inherit">
								gm@phanft.xyz
							</Link>
							. We will delete the personal information in accordance with COPPA.
						</Typography>
						<Typography sx={styles.heading}>Data Security.</Typography>
						<Typography sx={styles.p}>
							We implement and maintain reasonable administrative, physical, and technical security safeguards to help
							protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and
							destruction. Nevertheless, transmission via the internet is not completely secure and we cannot guarantee
							the security of information about you.
						</Typography>
						<Typography sx={styles.heading}>International Transfer.</Typography>
						<Typography sx={styles.p}>
							We are based in the U.S. and the information we collect is governed by U.S. law. If you are accessing the
							Services from outside of the U.S., please be aware that information collected through the Services may be
							transferred to, processed, stored, and used in the U.S. and other jurisdictions. Data protection laws in
							the U.S. and other jurisdictions may be different from those of your country of residence. Your use of the
							Services or provision of any information therefore constitutes your consent to the transfer to and from,
							processing, usage, disclosure, and storage of information about you in the U.S. and other jurisdictions as
							set out in this Privacy Policy. Where required by applicable law, we will provide appropriate safeguards
							for data transfers, such as through use of standard contractual clauses.
						</Typography>
						<Typography sx={styles.heading}>Changes to this Privacy Policy.</Typography>
						<Typography sx={styles.p}>
							We reserve the right to revise and reissue this Privacy Policy at any time. Any changes will be effective
							immediately upon posting of the revised Privacy Policy. Your continued use of our Services indicates your
							consent to the Privacy Policy then posted. If the changes are material, we may provide you additional
							notice to your email address.
						</Typography>
						<Typography sx={styles.heading}>Contact Us.</Typography>
						<Typography sx={styles.p}>
							If you have any questions about our data practices, or experience any difficulty accessing the information
							in this Privacy Policy, please contact us:
						</Typography>
						<Typography sx={styles.p}>
							By email:{' '}
							<Link href="mailto:gm@phanft.xyz" color="inherit">
								gm@phanft.xyz
							</Link>
						</Typography>
						<Typography sx={styles.heading}>Right to Know, Correct, and Delete.</Typography>
						<Typography sx={styles.p}>
							You have the right to know certain details about our data practices. In particular, you may request the
							following from us:
						</Typography>
						<ul>
							<li>
								<Typography sx={styles.li}>
									The categories of personal information we have collected about you;
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									The categories of sources from which the personal information was collected;
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									The categories of personal information about you we disclosed for a business purpose or sold or
									shared;
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									The categories of persons to whom the personal information was disclosed for a business purpose or
									sold or shared;
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									The business or commercial purpose for collecting or selling or sharing the personal information; and
								</Typography>
							</li>
							<li>
								<Typography sx={styles.li}>
									The specific pieces of personal information we have collected about you.
								</Typography>
							</li>
						</ul>
						<Typography sx={styles.p}>
							Unless you specify otherwise, the response we provide will cover the 12 month period preceding our receipt
							of the request. Starting with personal information collected on or after January 1, 2022, you may request
							that we disclose details beyond the 12-month period, and we shall do so unless doing so proves impossible
							or would involve a disproportionate effort.
						</Typography>
						<Typography sx={styles.p}>
							In addition, you have the right to correct (effective January 1, 2023) or delete the personal information
							we have collected from you.
						</Typography>
						<Typography sx={styles.p}>
							To exercise any of these rights, please email us at{' '}
							<Link href="mailto:gm@phanft.xyz" color="inherit">
								gm@phanft.xyz
							</Link>
							. In the request, please specify which right you are seeking to exercise and the scope of the request. We
							will confirm receipt of your request within 10 business days and will do our best to resolve your
							concerns.. We may require specific information from you to help us verify your identity and process your
							request. If we are unable to verify your identity, we may deny your request.
						</Typography>
						<Typography sx={styles.heading}>Authorized Agent.</Typography>
						<Typography sx={styles.p}>
							You can designate an authorized agent to submit requests on your behalf. However, we will require written
							proof of the agent&apos;s permission to do so and verify your identity directly.
						</Typography>
						<Typography sx={styles.heading}>Right to Non-Discrimination.</Typography>
						<Typography sx={styles.p}>
							You have the right not to receive discriminatory treatment by us for the exercise of any your rights.
						</Typography>
					</Paper>
				</Container>
			</AppLayout>
		</>
	)
}

export default PrivacyPage
