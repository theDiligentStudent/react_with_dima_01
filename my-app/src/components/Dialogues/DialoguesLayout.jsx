import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dialogues from './Dialogues';
import DialogueDetail from './DialogueDetail';
import s from './Dialogues.module.css'

const DialoguesLayout = () => {
  return (
    <div className={s.dialogues}>
      <Dialogues />
      <Routes>
        <Route path='id' element={<DialogueDetail />} />
      </Routes>
    </div>
  );
};

export default DialoguesLayout
