import React from "react"
import "./App.css"
import NavMenu from "./components/layout/NavMenu"
import Container from "./components/layout/Container"
import Content from "./components/layout/Content"
import Footer from "./components/layout/Footer"
import Rutas from "./routes/Rutas"
import DiscProvider from "./context/DiscProvider"

function App() {
	return (
		<>
			<Container>
				<NavMenu />
				<Content>
					<DiscProvider>
						<Rutas />
					</DiscProvider>
				</Content>
				<Footer />
			</Container>
		</>
	)
}

export default App
