import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const RoutingPages = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageOne />}></Route>
          <Route path="/page-two/:id/:name" element={<PageTwo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingPages;
