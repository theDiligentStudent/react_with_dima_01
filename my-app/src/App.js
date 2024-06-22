import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import Guests from './components/components_sidebar/Guests/Guests';
import News from './components/components_sidebar/News/News';
import Settings from './components/components_sidebar/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        {/* пока Комментируем эту Ком.-у --- (думаю - до Следующего В.) -- чтобы можно было работать/видеть с Новой Ком.-й Dialogues */}
        {/* <Profile /> */}

        {/* создаю НОВУЮ Ком.-у для Сообщений */}

        <div className='wrapper-content'>
          <Routes>
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Dialogues' element={<Dialogues />} />
            {/* <Route path='//components_sidebar/Guests/Guests' element={Guests} /> */}
            <Route path='/News' element={<News />} />
            <Route path='/Guests' element={<Guests />} />
            <Route path='/Settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
