import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

type AppLayoutProps = {
	children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => (
	<>
		<AppHeader />
		<Box component="main">{children}</Box>
		<AppFooter />
	</>
)

export default AppLayout
