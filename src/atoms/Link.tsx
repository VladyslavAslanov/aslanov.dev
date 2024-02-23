import { FC } from "react"
import { LinkProps } from "../interfaces/LinkProps.ts"

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
