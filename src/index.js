import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Nav from "./Components/Nav"
import Home from "./Views/Home"
import Footer from "./Components/Footer"
import Signin from "./Views/Signin"
import Erreur from "./Views/Erreur"
import User from "./Views/User"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="*" element={<Erreur />} />
      <Route path="User" element={<User />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
