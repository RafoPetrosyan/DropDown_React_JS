import React from "react";
import 'antd/dist/antd.min.css';
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import CategoryDetails from "./views/CategoryDetails";

const App = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<CategoryDetails />} />
    </Routes>
);

export default App;
