import Link from "../atoms/Link.tsx"
import { FC } from "react"

const Contacts: FC = () => {
	const contactInfo = [
		{
			title: "vladyslav.aslanov@gmail.com",
			link: "mailto:vladyslav.aslanov@gmail.com"
		},
		{
			title: "+420 776 117 802",
			link: "tel:+420776117802"
		}
	]

	return (
		<div className="flex flex-col justify-center items-center">
			{contactInfo.map((link) => {
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

export default Contacts
