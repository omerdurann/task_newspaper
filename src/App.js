
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import Categories from './pages/Categories';
import Home from './pages/Home';
import { Page404 } from "./pages/Page404";
import "./style.scss"


function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="categories" element={<Categories />} />
            <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
