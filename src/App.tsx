import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

import './App.css'

function App() {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointments' element={<Appointments />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Container>
  )
}

export default App
  