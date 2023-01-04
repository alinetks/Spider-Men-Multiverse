import { Component } from 'react'
import './App.css'
import Home from './pages/Home'
import AndrewGarfield from './pages/AndrewGarfield'
import TomHolland from './pages/TomHolland'
import TobeyMaguire from './pages/TobeyMaguire'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//comp with js

function App() {

  return (
    <>

      <Router>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path='/andrew' element={<AndrewGarfield />} />

          <Route path='/tom' element={<TomHolland />} />

          <Route path='/tobey' element={<TobeyMaguire />} />

        </Routes>

      </Router>




    </>
  )
}

export default App
