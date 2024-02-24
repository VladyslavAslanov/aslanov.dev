import { FC, useEffect } from "react"
import HeadPage from "./pages/HeadPage.tsx"
import Navbar from "./components/Navbar.tsx"

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

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove)
	}, [])

	if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
		const cursorOutline = document.querySelector(".cursor-outline") as HTMLElement
		if (cursorOutline !== null) {
			cursorOutline.style.display = "none"
		}
	}

	return (
		<div className="h-full dark:bg-black">
			<Navbar />
			<HeadPage />
		</div>
	)
}

export default App
