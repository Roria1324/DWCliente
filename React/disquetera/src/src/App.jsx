import React from "react"
import Cabecera from "./components/layout/Cabecera.jsx"
import Menu from "./components/layout/Menu.jsx"
import Contenido from "./components/layout/Contenido.jsx"
import Footer from "./components/layout/Footer.jsx"
import "./App.css"

const App = () => {
    return (
        <div className="app">
            <Cabecera />
            <Menu />
            <Contenido />
            <Footer />
        </div>
    )
}

export default App
