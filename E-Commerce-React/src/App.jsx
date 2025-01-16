import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/header/Header'
import Home from './pages/Home'



const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App