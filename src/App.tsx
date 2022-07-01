import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <div className='App min-h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:mssv' element={<Info />}></Route>
      </Routes>
    </div>
  );
}

export default App;
