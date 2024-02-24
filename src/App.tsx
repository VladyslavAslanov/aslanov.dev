import { FC, useEffect } from "react"
import HeadPage from "./pages/HeadPage.tsx"

const App: FC = () => {
	const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement
	const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement

	const handleMouseMove = (e: MouseEvent) => {
		cursorDot.style.left = `${e.clientX}px`
		cursorDot.style.top = `${e.clientY}px`

		cursorOutline.animate({
			left: `${e.clientX}px`,
			top: `${e.clientY}px`
		}, { duration: 800, fill: "forwards" })
	}

	if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
		const cursorOutline = document.querySelector(".cursor-outline") as HTMLElement
		if (cursorOutline !== null) {
			cursorOutline.style.display = "none"
		}
	}

	function isMobile() {
		const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
		return regex.test(navigator.userAgent)
	}

	useEffect(() => {
		if (isMobile()) {
			cursorDot.style.display = "none"
			cursorOutline.style.display = "none"
		}

		window.addEventListener("mousemove", handleMouseMove)
	}, [])

	return (
		<div className="h-full dark:bg-black">
			<HeadPage />
		</div>
	)
}

export default App
