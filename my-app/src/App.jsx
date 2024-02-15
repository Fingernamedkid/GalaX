import './App.css';
import Item from './Item.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import Home from './Home.jsx';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}


