// src/components/BackgroundPage.jsx
import React from 'react';
import styles from './style.module.css';

const BackgroundPage = ({ children }) => {
  return (
    <div className={styles.background}>
      {children}
    </div>
  );
};

export default BackgroundPage;
