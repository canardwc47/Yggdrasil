// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './style.module.css';

import Yggdrasil from './pages/Yggdrasil/Yggdrasil';
import LesMondes from './pages/LesMondes/LesMondes';
import LesDieux from './pages/LesDieux/LesDieux';
import LesMonstres from './pages/LesMonstres/LesMonstres';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';  // Importez le composant MentionsLegales
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

const App = ({ component, headerPosition, footerPosition }) => (
  <div style={{ position: 'relative', minHeight: '100vh' }}>
    <Header position={headerPosition} />
    <div style={{ paddingBottom: '0px', paddingTop: '0px' }}>
      <BackgroundWrapper>
        {component}
      </BackgroundWrapper>
    </div>
    <Footer position={footerPosition} />
  </div>
);

const Root = () => (
  <Router>
    <div style={{ position: 'relative', minHeight: '100px' }}>
      <Routes>
        <Route path="/" element={<App component={<Yggdrasil />} headerPosition="absolute" footerPosition="absolute" />} />
        <Route path="/les-mondes" element={<Navigate to="/les-mondes/1" replace />} /> {/* Redirige vers Asgard */}
        <Route path="/les-mondes/:id" element={<App component={<LesMondes />} headerPosition="relative" footerPosition="relative" />} />
        <Route path="/les-dieux" element={<App component={<LesDieux />} headerPosition="relative" footerPosition="relative" />} />
        <Route path="/les-monstres" element={<App component={<LesMonstres />} headerPosition="relative" footerPosition="relative" />} />
        <Route path="/mentions-legales" element={<App component={<MentionsLegales />} headerPosition="relative" footerPosition="relative" />} /> {/* Nouvelle route pour les mentions légales */}
      </Routes>
    </div>
  </Router>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);



















