import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Nav from "./Components/Nav"
import Home from "./Views/Home"
import Footer from "./Components/Footer"
import Signin from "./Views/Signin"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />  

      </Routes>
      <Footer/>
    </BrowserRouter>
)
