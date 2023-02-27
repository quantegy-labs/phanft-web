import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Fab, Fade, useScrollTrigger } from '@mui/material'
import type { ReactNode } from 'react'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

type AppLayoutProps = {
	children: ReactNode
}

type ScrollTopProps = AppLayoutProps

const ScrollTop = (props: ScrollTopProps): JSX.Element => {
	const { children } = props

	const trigger = useScrollTrigger()

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor')

		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			})
		}
	}

	return (
		<Fade in={trigger}>
			<Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
				{children}
			</Box>
		</Fade>
	)
}

const AppLayout = (props: AppLayoutProps): JSX.Element => {
	const { children } = props

	return (
		<>
			<AppHeader />
			<Box component="main">{children}</Box>
			<AppFooter />
			{/* <ScrollTop>
				<Fab size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop> */}
		</>
	)
}

export default AppLayout
