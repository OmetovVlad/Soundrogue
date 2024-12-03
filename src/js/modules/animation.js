import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0; // Проверка на touch устройстов

document.addEventListener("DOMContentLoaded", () => {
  if (!isTouchDevice) {
    const animateImage = document.querySelector(".animate-image");
    if (animateImage) {

      // Анимация фотографии
      gsap.fromTo(
          ".animate-image",
          {
            clipPath: "inset(0 100% 0 0)"
          },
          {
            clipPath: "inset(0 0 0 0)",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".photo",
              start: "top center",
              end: "bottom center",
              scrub: true,
              once: true,
            }
          }
      );
    }

    // Получение элементтов из .text, и разбиение на отдельные элементы для анимации
    const textElements = document.querySelectorAll('.text');
    textElements.forEach((el) => {
      el.innerHTML = el.textContent
          .split('')
          .map(letter => `<span class="letter">${letter}</span>`)
          .join('');
    });

    // Создание таймлайна
    const timeline = gsap.timeline();

    // Добавление анимации для каждого элемента. Последней цифре задаем отдельно.
    document.querySelectorAll('.letter').forEach((letter, index) => {
      timeline.fromTo(
          letter,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power2.out' },
          index * 0.1 // Задержка между буквами
      );
    });

    // Анимация круга параллельно с текстом MIDI
    timeline.fromTo(
        '.circle',
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 0.5, ease: 'power2.out' },
        0.4 // Появляется параллельно второй букве MIDI
    );

    // // Анимация цифры 9
    // timeline.fromTo(
    //     '.text__2 .letter:last-of-type',
    //     { clipPath: 'inset(100% 0 0 0)' },
    //     { clipPath: 'inset(0% 0 0 0)', duration: 0.5, ease: 'power2.out' },
    //     '+=0.4' // Задержка после круга
    // );


    // Анимация Картинки
    const render = document.querySelector('.render img');
    if (render) {
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
    }
    //  Анимация элементов шапки
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
    }, 1);
  }else{
    document.documentElement.classList.remove("no-touch");
  }
});




