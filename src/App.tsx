import { FC } from "react"
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

	window.addEventListener("mousemove", handleMouseMove)

	return (
		<div className="h-full dark:bg-black">
			<Navbar />
			<HeadPage />
		</div>
	)
}

export default App
