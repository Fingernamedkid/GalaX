import React from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Films from "./components/pages/Films";
import User from "./components/pages/User";
import Series from "./components/pages/Series";
import Footer from "./components/Footer";
import FAQ from "./components/pages/FAQ";
import Home from "./components/pages/Home";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Routes>
        
        <Route path="/films" element={<Films />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/film/:id" element={<Item />}></Route>

        <Route path="/side" element={<SideMenu />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
