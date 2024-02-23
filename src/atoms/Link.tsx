import { FC } from "react"
import { LinkProps } from "../interfaces/LinkProps.ts"
import classNames from "classnames"

const Link: FC<LinkProps> = ({ title, link, underline }) => {
	const styles = classNames("cursor-pointer underline-offset-4 dark:text-white", {
		"underline": underline
	})

	return (
		<a href={link}
			 target="_blank"
			 className={styles}>
			{title}
		</a>
	)
}

export default Link
