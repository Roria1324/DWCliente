import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Start from "./pages/Start";

function App() {
  return (
    <>
      <Header />
      <Start />
      <Footer />
    </>
  );
}

export default App;
