import { FC } from "react"
import Social from "../components/Social.tsx"
import MainPageHeader from "../components/MainPageHeader.tsx"

const HeadPage: FC = () => {
	return (
		<div className="flex justify-center items-center h-full flex-col gap-4 p-8">
			<Social />
			<MainPageHeader />
		</div>
	)
}

export default HeadPage
