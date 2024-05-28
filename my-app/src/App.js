import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    // <div></div>   ----- НЕ допустимо!!!!!!!
    // Должен быть ---- ТОЛЬКО ОДИН ---- Корневой Узел
    // return должен Возвращать  ---- ЛИШЬ ОДНО - З. ---
    //   в нашем случае это - div-ка
    //      а ВНУТРИ НЕЁ --- уже  --- ЛЕЖИТ- В С Ё  ОСТАЛЬНОЕ

    //  <div>
    //   </div>    НЕ допускается      !!!!!!

    <div className='App'>

{/* допускается */}
      <div></div>    

      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>React</li>
      </ul>

      <div></div>
      <div></div>
    </div>
  );
};

export default App;
