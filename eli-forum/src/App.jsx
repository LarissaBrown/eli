import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from "./components/LandingPage"
import SignInPage from "./components/SignInPage"
import SignUpPage from "./components/SignUpPage"
import CategoriesPage from "./components/CategoriesPage"

function App() {

  return (
    <div className="App">
    <Router>
    <nav style={{ margin:10}}>
      <Link to="/" style={{padding: 5}}>
        Home 
      </Link>


    </nav>
    <Routes>
      <Route path="*" element={<LandingPage />}/>
      <Route path="/signup/*" element={<SignUpPage />}/>
      <Route path="/signin/*" element={<SignInPage />}/>
      <Route path="/categories/*" element={<CategoriesPage />}/>
    </Routes>
  </Router>
  </div>

  )
}

export default App
