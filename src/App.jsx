

import Home from "./components/Home";
import AdminPanel from "./components/AdminPanel";
import UserPanel from "./components/UserPanel";
import { Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Footer from "./components/Footer";


function App() {

  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/admin" element={<AdminPanel/>}/>
      <Route path="/user" element={<UserPanel/>}/> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App
