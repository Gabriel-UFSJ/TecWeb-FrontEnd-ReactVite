import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Testimonials } from './components/Testimonials'
import { Login } from './components/Login'
import { Register } from './components/Register'
import {  EventRegister } from './components/EventRegister'


function App() {
  return (
    <Router>
      <header><Header /></header>
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <div style={{ marginTop: "50px" }} />
            <Testimonials />
          </div>
        } />
        <Route path="/EventRegister" element={<EventRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <footer><Footer /></footer>
    </Router>
  )
}

export default App
