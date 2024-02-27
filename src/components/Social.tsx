import Link from "../atoms/Link.tsx"
import { FC } from "react"

const Social: FC = () => {
	const links = [
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1an_ZSqunaT2-hjkBnMkgsUPeREYI0knM/view?usp=sharing"
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
