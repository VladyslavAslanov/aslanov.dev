import { FC } from "react"
import HeadPage from "./pages/HeadPage.tsx"
import Navbar from "./components/Navbar.tsx"

const App: FC = () => {
	return (
		<div className="h-full dark:bg-black">
			<Navbar />
			<HeadPage />
		</div>
	)
}

export default App
