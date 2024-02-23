import Link from "../atoms/Link.tsx"
import { FC } from "react"

const Social: FC = () => {
	const links = [
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1fniXTjOW-U2C7ixGPAzgSBLZ3pgqBpNwuTQsXdTiDMs/edit?usp=sharing"
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/vladyslav-aslanov/"
		},
		{
			title: "GitHub",
			link: "https://github.com/VladyslavAslanov"
		}
	]

	return (
		<div className="flex gap-4">
			{links.map((link) => {
				return (
					<Link
						key={link.title}
						title={link.title}
						link={link.link}
						underline />
				)
			})}
		</div>
	)
}

export default Social
