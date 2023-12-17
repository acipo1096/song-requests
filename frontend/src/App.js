import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
