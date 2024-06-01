// import openMapYahoo from './yahoo'  ПРАВИЛЬНЕЕ Этот Вариант ---   БЕЗ .js
import openMapYahoo from './yahoo.js';

// import openMapGoogle from './../google';    ПРАВИЛЬНЕЕ Этот Вариант ---   БЕЗ .js
import openMapGoogle from './../google.js';

let openAllMaps = () => {
  openMapYahoo();
  openMapGoogle();
};

export default openAllMaps;
