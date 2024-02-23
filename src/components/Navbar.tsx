import { FC } from "react"
import Link from "../atoms/Link.tsx"

const Navbar: FC = () => {
	const navbarList = [
		{
			title: "Experience",
			link: ""
		},
		{
			title: "Skills",
			link: ""
		},
		{
			title: "Languages",
			link: ""
		},
		{
			title: "Education",
			link: ""
		},
		{
			title: "Mentoring",
			link: ""
		},
		{
			title: "Blog",
			link: ""
		},
		{
			title: "Contact",
			link: ""
		}
	]
	return (
		<div className="p-8 flex justify-center items-center gap-8 flex-wrap">
			{navbarList.map((item) => {
				return (
					<Link
						key={item.title}
						title={item.title}
						link={item.link} />
				)
			})}
		</div>
	)
}

export default Navbar
