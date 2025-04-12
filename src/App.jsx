import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compteur from './components/Compteur'
import Message from './components/message'
import FormulaireClass from './components/Formulaire'
import Texte from './components/Texte'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Compteur/>
       <Message/>
       <FormulaireClass/>
       <Texte/>
      </div> 
         
    </>
  )
}

export default App
