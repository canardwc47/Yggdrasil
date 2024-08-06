// src/components/Background.jsx
import React from 'react';
import S from '../Background-Page/style.module.css';

const Background = () => {
  return (
    <div className={S.background}>
      <div className={S.gradient}></div>
      <div className={S.tree}></div>
    </div>
  );
};

export default Background;




