// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './style.module.css';

import Yggdrasil from './pages/Yggdrasil/Yggdrasil';
import LesMondes from './pages/LesMondes/LesMondes';
import LesDieux from './pages/LesDieux/LesDieux';
import LesMonstres from './pages/LesMonstres/LesMonstres';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Background from './components/Background-Page/Background-Page';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Background />}
      {children}
    </>
  );
};

const Root = () => (
  <Router>
    <div style={{ position: 'relative', minHeight: '100px' }}>
      <Header />
      <div style={{ paddingBottom: '100px' }}> {/* Ajoute un padding pour éviter que le contenu cache le footer */}
        <BackgroundWrapper>
          <Routes>
            <Route path="/" element={<Yggdrasil />} />
            <Route path="/les-mondes" element={<LesMondes />} />
            <Route path="/les-dieux" element={<LesDieux />} />
            <Route path="/les-monstres" element={<LesMonstres />} />
          </Routes>
        </BackgroundWrapper>
      </div>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));


