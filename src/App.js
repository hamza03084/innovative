// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DataListPage from "./pages/DataListPage";
import UserManagement from "./pages/UserManagement";
import MultiStepPage from "./pages/MultiStepPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data-list' element={<DataListPage />} />
        <Route path='/user-management' element={<UserManagement />} />
        <Route path='/multi-step' element={<MultiStepPage />} />
      </Routes>
    </Router>
  );
}

export default App;
