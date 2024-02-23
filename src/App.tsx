import { FC } from "react"

const App: FC = () => {
	return (
		<div className="flex justify-center items-center h-full flex-col gap-4">
			<h1 className="font-bold text-6xl text-center">Vladyslav Aslanov</h1>
			<h2 className="text-3xl text-center">Software Engineer</h2>
			<div className="flex gap-4">
				<a href="https://docs.google.com/document/d/1fniXTjOW-U2C7ixGPAzgSBLZ3pgqBpNwuTQsXdTiDMs/edit?usp=sharing"
					 target="_blank"
					 className="cursor-pointer underline">Resume</a>
				<a href="https://www.linkedin.com/in/vladyslav-aslanov/"
					 target="_blank"
					 className="cursor-pointer underline">LinkedIn</a>
			</div>
		</div>
	)
}

export default App
