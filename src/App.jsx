import { useState } from "react";

import Header from "./Layouts/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Policy from "./Components/Policy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
