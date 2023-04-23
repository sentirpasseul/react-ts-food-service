import React, { useEffect, useState } from "react";
import "./index.css";
import {Route, Routes} from 'react-router-dom'
import { ProductsPage } from "./pages/ProductsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <ProductsPage />}></Route>
    </Routes>
  )
}

export default App;
