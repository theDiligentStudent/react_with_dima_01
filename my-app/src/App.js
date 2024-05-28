import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    // <div></div>   ----- НЕ допустимо!!!!!!!
    // Должен быть ---- ТОЛЬКО ОДИН ---- Корневой Узел
    // return должен Возвращать  ---- ЛИШЬ ОДНО - З. ---
    //   в нашем случае это - div-ка
    //      а ВНУТРИ НЕЁ --- уже  --- ЛЕЖИТ- В С Ё  ОСТАЛЬНОЕ

    <div className='App'>
      {/* <div> */}
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>React</li>
      </ul>
    </div>
  );
};

export default App;
