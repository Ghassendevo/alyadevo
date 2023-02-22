import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ReactDom from 'react-dom'
import './App.css'
import Homee from './pages/Homee'
import Login from './pages/Login'
import Agence from './pages/Agence'
import Contact from './pages/Contact'
import Tunis from './pages/Tunis'
//import Footer from './component/footer'
import { Navbar } from 'react-bootstrap'
import useToken from './useToken';
import Signup from './pages/Signup';



function App() {
  const { token, setToken } = useToken();

 

  return (
    <div className='wrapper'>
      <Navbar />

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homee />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/Agence" element={<Agence />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Tunis" element={<Tunis />}></Route>

          </Routes>
        </div>
      </Router>
      {/* <Navbarr/> */}
      {/* <Footer/> */}
    </div >

  )
}

export default App
