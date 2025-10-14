import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matricula from './componentes/Matricula'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Matricula></Matricula>
    </>
  )
}

export default App
