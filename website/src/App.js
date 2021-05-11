import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './routes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import logo from './assets/renturg.png'
import './App.css'

export default () =>
<>
  <BrowserRouter>
  <Header/>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="RentUrg logo" />
      </Link>

      <div className="content">
        <Routes />
      </div>
    </div>
    <Footer/>
  </BrowserRouter>
  </>
