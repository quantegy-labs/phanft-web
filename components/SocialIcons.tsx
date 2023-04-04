import { Box, Link } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const styles = {
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	link: {
		display: 'flex',
		mx: 0.25,
		transition: 'opacity 300ms ease-in-out',
		'&:hover': {
			transition: 'opacity 300ms ease-in-out',
			opacity: 0.75,
		},
	},
}

type SocialLinkProps = { url: string; icon: string; alt: string }

const SocialLink = ({ url, icon, alt }: SocialLinkProps) => (
	<Link href={url} target="_blank" rel="noopener noreferrer" sx={styles.link}>
		<Image quality={20} src={icon} alt={alt} width={20} height={20} />
	</Link>
)

const SocialIcons = () => (
	<Box sx={styles.wrapper}>
		<SocialLink url="https://discord.gg/pxwNvgMQaU" icon="/icon_discord.svg" alt="Discord" />
		<SocialLink url="https://twitter.com/phanft_official" icon="/icon_twitter.svg" alt="Twitter" />
		<SocialLink url="https://instagram.com/phanft_official" icon="/icon_instagram.svg" alt="Instagram" />
	</Box>
)

export default SocialIcons
