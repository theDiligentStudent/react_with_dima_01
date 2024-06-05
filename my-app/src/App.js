import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import Content from './components/Content';
import Profile from './components/Profile';

// 1/06/24

// Удаляем ---- ВСЁ !!!!!!  ____   Что Делали Перед этим
// (почти Всё)
// импорты, файлы с Ком-ми (у меня для этого была Отдельная Пп.)
// и
// Начинам Всё ---- с ЧистогО Листа

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Profile />
      Hello
    </div>
  );
};

export default App;
