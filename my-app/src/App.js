import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


// 1/06/24

// Удаляем ---- ВСЁ !!!!!!  ____   Что Делали Перед этим
// (почти Всё)
// импорты, файлы с Ком-ми (у меня для этого была Отдельная Пп.)
// и
// Начинам Всё ---- с ЧистогО Листа

const App = () =>{
    return(
        <div className='app-wrapper'>
            <Header />
            <Sidebar />
            <Content />
        </div>
    )
}

export default App
