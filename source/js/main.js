import { switchingNav } from './modules/nav.js';
import { submitForm } from './modules/form.js';
import { initScrollAnimation } from './modules/on-scroll-animate.js';
import { handleParallax } from './modules/parallax.js';
import { rotateCard } from './modules/rotate-card.js';

window.addEventListener('DOMContentLoaded', () => {
  switchingNav();
  submitForm();
  initScrollAnimation();
});

window.addEventListener('resize', () => {
  switchingNav();
  handleParallax();
});

window.addEventListener('scroll', () => {
  handleParallax();
  rotateCard();
});

