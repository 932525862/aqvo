import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isOpen={isOpen} setIsOpen={setIsOpen}/>}>
          <Route index element={<Home isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal}/>} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
