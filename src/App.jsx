

import Home from "./components/Home";
import AdminPanel from "./components/AdminPanel";
import UserPanel from "./components/UserPanel";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";


function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<AdminPanel/>}/>
      <Route path="/user" element={<UserPanel/>}/> 
    </Routes>
    </>
  )
}

export default App
