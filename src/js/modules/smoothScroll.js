document.addEventListener('DOMContentLoaded', () => {

  const links = document.querySelectorAll('[data-anchor]');
  const isMainPage = window.location.pathname === "/";

  // Функция для плавного скролла к элементу
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      // Закрытие меню и разблокировка body, если требуется
      document.querySelector('.header')?.classList.remove('_active');

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  // Обработка кликов на ссылки
  links.forEach(link => {
    const anchor = link.getAttribute('data-anchor');

    if (isMainPage) {
      // На главной странице выполняем скролл
      link.addEventListener('click', (event) => {
        if (anchor) {
          event.preventDefault();
          scrollToElement(anchor);
          if(document.querySelector(".mobile_menu_btn").classList.contains('active')) {
            document.querySelector(".mobile_menu_btn").classList.remove('active');
            document.body.classList.remove("lock");
            document.querySelector(".mobile_menu_wrapper").classList.remove('active');
          }
          // Закрытие навигации (если требуется)
          document.querySelector('.nav')?.classList.remove('_active');
        }
      });
    } else {
      // На других страницах сохраняем секцию в localStorage
      link.addEventListener('click', () => {
        if (anchor) {
          localStorage.setItem('scrollToSection', anchor);
        }
      });
    }
  });

  // Скроллим к секции после полной загрузки страницы
  if (isMainPage) {
    const savedAnchor = localStorage.getItem('scrollToSection');
    if (savedAnchor) {
      window.addEventListener('load', () => {
        localStorage.removeItem('scrollToSection'); // Очищаем после использования
        scrollToElement(savedAnchor);
      });
    }
  }
});