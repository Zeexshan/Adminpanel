import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Admin" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<List />}></Route>
          <Route path="/users">
            <Route index element={<List />} />
            <Route path=":userId" index element={<Single />} />
            <Route path="new" index element={<New />} />
          </Route>  
          <Route path="/products">
            <Route index element={<List />} />
            <Route path=":productId" index element={<Single />} />
            <Route path="new" index element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
