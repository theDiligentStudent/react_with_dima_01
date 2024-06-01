import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Technologies from './components/Technologies';


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

// const Header = () => {
//   return (
//     <div>
//       <a href='#s'>Home </a>
//       <a href='#'> Messages </a>
//       <a href='#'> About Us</a>
//     </div>
//   );
// };

// const Technologies = () => {
//   return (
//     <div>
//       <ul>
//         <li>html</li>
//         <li>css</li>
//         <li>js</li>
//         <li>react</li>
//       </ul>
//     </div>
//   );
// };

export default App;
