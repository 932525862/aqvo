import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Animats from "./assets/img1/logoaqvoo.gif"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Yangi state loading uchun

  const openModal = () => setIsOpen(true);

  // useEffect orqali loadingni 3 soniyadan keyin o'chiramiz
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 3 soniya
    return () => clearTimeout(timer); // Timerni tozalash
  }, []);

  if (isLoading) {
    // Agar loading bo'lsa, faqat animatsiyani ko'rsatamiz
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <img src={Animats} alt="Loading..." className="w-36 h-36" />
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              openModal={openModal}
            />
          }
        >
          <Route
            index
            element={
              <Home
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                openModal={openModal}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
