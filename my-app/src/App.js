import logo from './logo.svg';
import './App.css';

// import Header from './components/Header';  // Правильный вариант БЕЗ .js
import Header from './components/Header.js';
// import Technologies from './components/Technologies'; // Правильный вариант БЕЗ .js
import Technologies from './components/Technologies.js';


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
