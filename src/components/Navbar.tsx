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
		<div className="pt-4 pb-4 pl-8 pr-8 flex justify-center items-center gap-8 flex-wrap bg-white dark:bg-black">
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
