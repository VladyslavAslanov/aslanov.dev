import { FC } from "react"
import Contacts from "./Contacts.tsx"

const MainPageHeader: FC = () => {
	return (
		<div className="flex flex-col gap-5 mt-8 mb-16">
			<h1 className="font-bold text-6xl text-center dark:text-white">Vladyslav Aslanov</h1>
			<h2 className="text-3xl text-center dark:text-white mb-4">Software Engineer</h2>
			<Contacts />
			<span className="text-center dark:text-white">Brno, Czech Republic (GMT +1)</span>
			<p className="dark:text-white text-center max-w-4xl mt-10">
				Software engineer with more than 2 years of commercial experience, focusing on frontend development. Proficient
				in TypeScript, React, and Redux, with experience in backend development using Node.js and Python. Skilled in
				conducting market research and developing software according to customer requirements.
			</p>
		</div>
	)
}

export default MainPageHeader
