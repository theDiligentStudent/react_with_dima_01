import React from 'react';
import './App.css';

// Исправлял Ош.-и с Помощью ДжиПиТи:
// import Sidebar from './component.jsx/Sidebar';

import Header from './components_jsx/Header';
import Sidebar from './components_jsx/Sidebar';
import Profile from './components_jsx/Profile';


// в ПРЕДЫДУЩЕЙ Версии проекта:
// import Content from './components/Content';

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
      
      {/* Hello */}

 {/* Исправлял Ош.-и с Помощью ДжиПиТи: */}
      {/* <Sidebar /> */}
    </div>
  );
};

export default App;
