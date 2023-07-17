
import './App.css'
import Home from './Components/Home'
import Feature from './Components/Feature'
import Contact from './Components/Contact'
import Signup from './Components/signUp'

import Galary from './Components/galary'
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/feature' element={<Feature/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/galary' element={<Galary/>}/>
    
    </Routes>
      
    </>
  )
}

export default App
