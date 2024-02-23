import { FC } from "react"
import Contacts from "./Contacts.tsx"

const MainPageHeader: FC = () => {
	return (
		<div className="flex flex-col gap-2 mt-4 select-none">
			<h1 className="font-bold text-6xl text-center dark:text-white">Vladyslav Aslanov</h1>
			<h2 className="text-3xl text-center dark:text-white mb-4">Software Engineer</h2>
			<Contacts />
			<span className="text-center dark:text-white mt-10">Brno, Czech Republic (GMT +1)</span>
		</div>
	)
}

export default MainPageHeader
