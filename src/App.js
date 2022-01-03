import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
