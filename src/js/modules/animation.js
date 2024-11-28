import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0; // Проверка на touch устройстов


const textElement = document.querySelector('.text');
const render = document.querySelector('.render');

gsap.fromTo(
    textElement,
    {
      transform: 'translateY(-100%)' // Начальная позиция
    },
    {
      duration: 2,
      transform: 'translateY(0)',
      ease: 'power4.out',
    }
);

gsap.fromTo(
    render,
    {
      opacity: '0',
      scale: '0.7'
    },
    {
      duration: 1.5,
      opacity: '1',
      scale: '1',
      ease: 'power4.out',
    }
);


const elements = gsap.utils.toArray(".to-top");
if (elements) {
  const tl = gsap.timeline({delay: 0.1}); // Общая задержка перед началом

  tl.to(".logo", {
    opacity: 1,
    y: 0,
    duration: 0,
    ease: "power4.out"
  });

  const menuItems = document.querySelectorAll(".menu a");
  menuItems.forEach((item, index) => {
    tl.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.1,
      ease: "power4.out"
    }, `-=${0}`);
  });

  tl.to(".support-us", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power4.out"
  }, "-=0");
}

const tl = gsap.timeline();


tl.to(".text1", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out"
}, "+=0.7");


tl.to(".text2", {
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: "power2.out"
}, "+=0");

