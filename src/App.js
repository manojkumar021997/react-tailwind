import React from "react"
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";
import Contact from "./route/Contact";
import Singnin from "./route/Singin";
import Singnup from "./route/Singnup";
import Profile from "./route/Profile";




const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<><Navbar/><Outlet/></>}>
      <Route index  element={<Home />}/>
      <Route path="/About"   element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Signin" element={<Singnin />}/>
      <Route path="/Signup" element={<Singnup />}/>
      <Route path="/Profile" element={<Profile />}/>
      </Route>
    </Routes>
  )
}

export default App