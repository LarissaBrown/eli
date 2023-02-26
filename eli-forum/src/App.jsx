import React from 'react'
import './App.css'
import LandingPage from "./components/LandingPage"
import SignInPage from "./components/SignInPage"
import SignUpPage from "./components/SignUpPage"
import CategoriesPage from "./components/CategoriesPage"

function App() {
  

  return (
    <div className="App">
      <LandingPage />
      <SignUpPage />
      <SignInPage />
      <CategoriesPage />
    </div>
  )
}

export default App
