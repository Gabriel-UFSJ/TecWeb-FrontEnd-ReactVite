import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <div style={{ marginTop: "50px" }} />
            <Testimonials />
          </div>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
