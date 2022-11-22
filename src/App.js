import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import CategoryDetails from "./views/CategoryDetails";
import 'antd/dist/antd.min.css';

const App = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<CategoryDetails />} />
    </Routes>
);

export default App;
