import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Home from './pages/Home/home.js';
import About from './pages/About/about.jsx';
import Projects from './pages/Projects/projects.jsx';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;