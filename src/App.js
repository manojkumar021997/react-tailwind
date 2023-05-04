import React from "react"
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<><Navbar/><Outlet/></>}></Route>
    </Routes>
  )
}

export default App