import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
// import Header from './components/Header';  // Правильный вариант БЕЗ .js


// НЕПРИЯТНАЯ ОШИБКА!!!!!
//   НЕПОКАЗЫВАЕМАЯ нам редактором......
//   ----
//   Ком.-т (по Ош.-е - НЕдосмотру ВЗЯТА НЕ ИЗ ТОГО Фа.-а !!!!!)
// import Header from './components/Technologies.js';

import Technologies from './components/Technologies.js'
// import Technologies from './components/Technologies'; // Правильный вариант БЕЗ .js


const App = () => {
  return (
    <div>
      <Header />
      <Head />
      <Technologies />
    </div>
  );
};



const Head = () => {};


export default App;
