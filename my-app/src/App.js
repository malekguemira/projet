import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import DetailProduct from './components/DetailProduct';


function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/ListProduct" element={<ListProducts />} />
          <Route path="/DetailProduct" element={<DetailProduct />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
