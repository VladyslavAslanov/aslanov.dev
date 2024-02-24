import { FC } from "react"
import HeadPage from "./pages/HeadPage.tsx"
import Navbar from "./components/Navbar.tsx"

const cursor = document.querySelector(".custom-cursor.site-wide") as HTMLElement

document.addEventListener("mouseenter", () => {
	cursor.style.display = "block"
})

document.addEventListener("mouseleave", () => {
	cursor.style.display = "none"
})

document.addEventListener("mousemove", (e: MouseEvent) => {
	cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
})

const App: FC = () => {
	return (
		<div className="h-full dark:bg-black">
			<Navbar />
			<HeadPage />
		</div>
	)
}

export default App
