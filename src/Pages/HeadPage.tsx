import { FC } from "react"

const HeadPage: FC = () => {
	return (
		<div className="flex justify-center items-center h-full flex-col gap-4 dark:bg-black">
			<div className="flex gap-4 select-none">
				<a href="https://docs.google.com/document/d/1fniXTjOW-U2C7ixGPAzgSBLZ3pgqBpNwuTQsXdTiDMs/edit?usp=sharing"
					 target="_blank"
					 className="cursor-pointer underline underline-offset-4 dark:text-white">
					Resume
				</a>
				<a href="https://www.linkedin.com/in/vladyslav-aslanov/"
					 target="_blank"
					 className="cursor-pointer underline underline-offset-4 dark:text-white">
					LinkedIn
				</a>
				<a href="https://github.com/VladyslavAslanov"
					 target="_blank"
					 className="cursor-pointer underline underline-offset-4 dark:text-white">
					GitHub
				</a>
			</div>
			<div className="flex flex-col gap-2 mt-4 mb-4 select-none">
				<h1 className="font-bold text-6xl text-center dark:text-white">Vladyslav Aslanov</h1>
				<h2 className="text-3xl text-center dark:text-white">Software Engineer</h2>
			</div>
			<div className="flex flex-col justify-center items-center">
				<a href="mailto:vladyslav.aslanov@gmail.com"
					 target="_blank"
					 className="underline underline-offset-4 dark:text-white">
					vladyslav.aslanov@gmail.com
				</a>
				<a href="tel:+420776117802"
					 target="_blank"
					 className="underline underline-offset-4 dark:text-white">
					+420 776 117 802
				</a>
			</div>
		</div>
	)
}

export default HeadPage
