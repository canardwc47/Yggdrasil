// src/App.jsx
import React, { useEffect } from 'react';
import BackgroundPage from "./components/Background-Page/Background-Page";
import { NoteAPI } from "./api/note-api";
import { useDispatch } from "react-redux";
import style from "./style.module.css";

const App = () => {
  const dispatch = useDispatch();

  const fetchAllNotes = async () => {
    const mondeList = await NoteAPI.fetchAll();
    dispatch(setMondesList(mondeList));
  };

  useEffect(() => {
    fetchAllNotes();
  }, [fetchAllNotes, dispatch]);

  return (
    <div className="container-fluide">
      <BackgroundPage />
      <div className={style.outlet_container}>
        {/* L'Outlet n'est plus nécessaire car les routes sont gérées dans index.js */}
      </div>
    </div>
  );
};

export default App;


