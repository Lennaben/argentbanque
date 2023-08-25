import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Home from "./Views/Home"
import Footer from "./Components/Footer"
import Signin from "./Views/Signin"
import Erreur from "./Views/Erreur"
import User from "./Views/User"
import Header from "./Components/Header"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="*" element={<Erreur />} />
      <Route path="/user" element={<User />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
