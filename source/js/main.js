// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { switchingNav } from './modules/nav.js';

window.addEventListener('DOMContentLoaded', () => {
  switchingNav();
});

window.addEventListener('resize', () => {
  switchingNav();
});
