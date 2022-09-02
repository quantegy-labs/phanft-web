import type { NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '../components/layouts/AppLayout'
import SectionFAQs from '../components/sections/SectionFAQs'
import SectionInfo from '../components/sections/SectionInfo'
import SectionIntro from '../components/sections/SectionIntro'
import SectionLizards from '../components/sections/SectionLizards'
import SectionMission from '../components/sections/SectionMission'
import SectionOnboard from '../components/sections/SectionOnboard'
import SectionRoadmap from '../components/sections/SectionRoadmap'
import SectionTeam from '../components/sections/SectionTeam'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>PhanFT | Your Web 3.0 Pass to 4.0 Phandom</title>
			</Head>
			<AppLayout>
				<SectionIntro />
				<SectionLizards />
				<SectionMission />
				<SectionRoadmap />
				<SectionInfo />
				<SectionTeam />
				<SectionFAQs />
				<SectionOnboard />
			</AppLayout>
		</>
	)
}

export default Home
