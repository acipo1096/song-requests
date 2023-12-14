import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./components/Search";
import Email from "./components/Email";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <h1>Wazzup</h1>
      <Search />
      <Email />
    </div>
  );
}

export default App;
