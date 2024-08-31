import { useState } from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import PokemonListPages from './Pages/PokemonsListPages'
import PokemonDetailPage from './Pages/PokemonDetailPage'
import TeamPage from './Pages/TeamsPage'


function App() {


  return (
    <>
  
    <Router>
        <NavBar links={[{label:"Lista",path:"/"},{label:"Equipo",path:"/team"}]}/>
        <Routes>
          <Route path='/' element = {<PokemonListPages/>}/>
          <Route path='/pokemon/:name' element = {<PokemonDetailPage/>}/> 
          <Route path='/team' element = {<TeamPage/>}/>
        </Routes>
    </Router>
      
    </>
  )
}

export default App
