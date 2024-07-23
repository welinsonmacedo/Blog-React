import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar_Component from './Components/NavBar/NavBar_Component';
import Page_Articles from './Pages/Articles/Page_Articles';
import Page_Home from './Pages/Home/Page_Home';

function App() {
  return (
    <Router>
      <NavBar_Component />
      <Routes>
        <Route path="/" element={<Page_Home />} />
        <Route path="/articles" element={<Page_Articles />} />
        <Route path="*" element={<Page_Home />} />
      </Routes>
    </Router>
  );
}

export default App;
