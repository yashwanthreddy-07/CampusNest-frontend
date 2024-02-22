import { useState } from "react";

import Header from "./Layouts/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Policy from "./Components/Policy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentRegistration from "./Auth/StudentRegistration";


function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/registration" element={<StudentRegistration />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
  
    </>
  );
}

export default App;
