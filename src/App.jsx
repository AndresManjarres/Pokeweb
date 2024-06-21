import './App.css'
//importando modulos firebase

//importando componentes
import { Home } from '../src/components/Home'
import { Login } from '../src/components/Login'
import { Registro } from '../src/components/Registro'
import { Pokedex } from '../src/components/Pokedex'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Detalle } from './components/Detalle'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Detalle />} />

      </Routes>
    </Router>
  )
}

export default App
