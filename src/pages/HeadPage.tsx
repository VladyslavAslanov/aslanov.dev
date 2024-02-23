import { FC } from "react"
import Contacts from "../components/Contacts.tsx"
import Social from "../components/Social.tsx"
import MainPageHeader from "../components/MainPageHeader.tsx"

const HeadPage: FC = () => {
	return (
		<div className="flex justify-center items-center h-full flex-col gap-4 dark:bg-black">
			<Social />
			<MainPageHeader />
			<Contacts />
		</div>
	)
}

export default HeadPage
