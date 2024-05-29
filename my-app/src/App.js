import logo from './logo.svg';
import './App.css';

// Ниже ----
// Три РАБОЧИХ Варианта Объявления Ф.-и
// Дима остановился на Последнем - Стрелке

// function Header() {  // РАБОЧИЙ вариант
//     return(
//         <div>
//             <a>News</a>
//             <a>Messages</a>
//             <a>About Us</a>
//         </div>
//     )
// }

// const Header = function() {  // РАБОЧИЙ вариант
//     return <div>
//         <a>News</a>
//         <a>Messages</a>
//         <a>About Us</a>
//     </div>
// }

const Header = () => {   // РАБОЧИЙ вариант
  return (
    <div>
      <a>News</a>
      <a>Messages</a>
      <a>About Us</a>
    </div>
  );
};

export default Header;
