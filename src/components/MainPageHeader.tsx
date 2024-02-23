import { FC } from "react"

const MainPageHeader: FC = () => {
	return (
		<div className="flex flex-col gap-2 mt-4 mb-4 select-none">
			<h1 className="font-bold text-6xl text-center dark:text-white">Vladyslav Aslanov</h1>
			<h2 className="text-3xl text-center dark:text-white">Software Engineer</h2>
		</div>
	)
}

export default MainPageHeader
