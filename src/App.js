import React from "react"
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";
import Contact from "./route/Contact";
import Singnin from "./route/Singin";
import Singnup from "./route/Signup";
import Profile from "./route/Profile";
import { users } from "./components/Navbar/data/data";
import './App.css'



const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<><Navbar/><Outlet/></>}>
      <Route index  element={<Home  />}/>
      <Route path="/About"   element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Signin" element={<Singnin />}/>
      <Route path="/Signup" element={<Singnup />}/>
      <Route path="/Profile" element={<Profile users={users} />}/>
      </Route>
    </Routes>
  )
}

export default App