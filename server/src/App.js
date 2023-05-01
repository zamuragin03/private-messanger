import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "./Components/LoginPanel/Login";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/main" element={<Menu/>} />
    </Routes>
  );
}

export default App;
