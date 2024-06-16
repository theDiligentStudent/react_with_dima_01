import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      {/* пока Комментируем эту Ком.-у --- (думаю - до Следующего В.) -- чтобы можно было работать/видеть с Новой Ком.-й Dialogues */}
      {/* <Profile /> */}

      {/* создаю НОВУЮ Ком.-у для Сообщений */}
      <div className='wrapper-content'>
        <Dialogues />

      </div>
    </div>
  );
};

export default App;
