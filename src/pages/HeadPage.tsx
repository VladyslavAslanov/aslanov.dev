import { FC } from "react"
import Social from "../components/Social.tsx"
import MainPageHeader from "../components/MainPageHeader.tsx"
import Navbar from "../components/Navbar.tsx"

const HeadPage: FC = () => {
	return (
		<>
			<Navbar />
			<div className="flex justify-center items-center flex-col gap-4 p-8 mt-24">
				<Social />
				<MainPageHeader />
			</div>
		</>
	)
}

export default HeadPage
