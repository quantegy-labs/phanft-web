import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const styles = {
	wrap: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		py: 10,
		background: "url('/herobg.png') center center no-repeat",
		backgroundSize: 'cover',
		textAlign: 'center',
	},
	headings: {
		mb: 2,
	},
	joinText: {
		mb: 4,
	},
	formWrap: {
		my: 3,
	},
	input: {
		borderRadius: '4px',
	},
}

const SectionOnboard = (): JSX.Element => {
	const [email, setEmail] = useState<string>('')

	return (
		<Box component="section" id="onboard" sx={styles.wrap}>
			<Container maxWidth="md">
				<Box sx={styles.headings}>
					<Typography variant="h3" gutterBottom>
						Surrender to the Flow
					</Typography>
					<Typography variant="h5">Enter your email for first access.</Typography>
				</Box>
				<Box sx={styles.formWrap}>
					<div id="mc_embed_signup" className="mcformpad">
						<form
							action="https://gmail.us20.list-manage.com/subscribe/post?u=f4f6160f47493c9ac07172dc3&amp;id=09f84a8635"
							method="post"
							id="form_25429"
							name="mc-embedded-subscribe-form"
							className="validate"
							target="_blank"
							noValidate={true}
						>
							<div id="mc_embed_signup_scroll">
								<div className="mc-field-group">
									<TextField
										sx={styles.input}
										id="mce-EMAIL_25429"
										name="EMAIL"
										type="email"
										label="Email Address"
										placeholder="colonel.forbin@gamehenge.xyz"
										value={email}
										onChange={e => setEmail(e.target.value)}
										variant="filled"
										fullWidth
									/>
								</div>
								<div id="mce-responses" className="clear">
									<div className="response" id="mce-error-response" style={{ display: 'none' }} />
									<div className="response" id="mce-success-response" style={{ display: 'none' }} />
								</div>
								{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
								<div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
									<input type="text" name="b_9e661be94b89b985bac91915f_c10d59ba7d" tabIndex={-1} id="undefined_25429" />
								</div>
								<Box sx={{ clear: 'both', mt: 2 }}>
									<Button type="submit" name="subscribe" id="mc-embedded-subscribe_25429" variant="contained" fullWidth>
										Subscribe
									</Button>
								</Box>
							</div>
						</form>
					</div>
				</Box>
			</Container>
		</Box>
	)
}

export default SectionOnboard
