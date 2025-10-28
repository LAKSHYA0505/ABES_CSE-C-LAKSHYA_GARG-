import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="netflix">
      {/* Navbar */}
      <div className="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="logo"
        />
        <div className="nav-right">
          <select className="language-select">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <button className="signin-btn">Sign In</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Starts at ₹149. Cancel at any time.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>
        <div className="email-section">
          <input type="email" placeholder="Email address" />
          <button className="get-started-btn">Get Started &gt;</button>
        </div>
      </div>
    </div>
  )
}

export default App
