import { FC } from "react"

interface LinkProps {
	title: string
	link: string
}

const Link: FC<LinkProps> = ({ title, link }) => {
	return (
		<a href={link}
			 target="_blank"
			 className="cursor-pointer underline underline-offset-4 dark:text-white">
			{title}
		</a>
	)
}

export default Link
