
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Catalogo from "./pages/Catalogo"
import Ask from "./pages/Ask"
import Home from "./pages/Home"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter basename="/Family-Care/">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="Catalogo" element={<Catalogo/>}/>
            <Route path="About" element={<Ask/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
