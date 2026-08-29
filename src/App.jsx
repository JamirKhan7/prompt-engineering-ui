import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PromptBox from './PromptBox';
import PizzaBot from './PizzaBot';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PromptBox />} />
        <Route path="/pizzabot" element={<PizzaBot />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
