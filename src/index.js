// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.module.css';
import Yggdrasil from './pages/Yggdrasil/Yggdrasil';
import LesMondes from './pages/LesMondes/LesMondes';
import LesDieux from './pages/LesDieux/LesDieux';
import LesMonstres from './pages/LesMonstres/LesMonstres';
import Header from '../../nordik/src/components/Header/Header';
import Footer from '../../nordik/src/components/Footer/Footer';

const App = () => (
  <div style={{ position: 'relative', minHeight: '100px' }}>
    <Router>
      <Header />
      <div style={{ paddingBottom: '100px' }}> {/* Ajoute un padding pour éviter que le contenu cache le footer */}
        <Routes>
          <Route path="/" element={<Yggdrasil />} />
          <Route path="/les-mondes" element={<LesMondes />} />
          <Route path="/les-dieux" element={<LesDieux />} />
          <Route path="/les-monstres" element={<LesMonstres />} />
        </Routes>
      </div>
    </Router>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
