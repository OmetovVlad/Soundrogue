/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */

export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function range(){
	const ranges = document.querySelectorAll('input[type="range"]');
	const imagesList = document.querySelectorAll('.viewer .img-list img');

	let cursorPositions = [];
	const step = Math.ceil(100 / imagesList.length);

	for (let i = 0; i < imagesList.length; i++) {
		cursorPositions[i] = [step * i, step * (i + 1)];
	}

	if (ranges) {
		ranges.forEach(function (item) {
			item.addEventListener("input", rangeInput);
			return true;
		});
	}

	function rangeInput () {
		let rangeValue = this.value;
		let rangeInput = this.parentNode;

		// Перемещаем стилизованный ползунок
		rangeInput.querySelector('.input_range__dot').style.left = rangeValue + "%";
		let i = 0;

		for ( i = 0; i < imagesList.length; i++ ) {
			if ( rangeValue >= cursorPositions[i][0] && rangeValue <= cursorPositions[i][1] ) {
				document.querySelector('.viewer .img-list img.active').classList.remove('active');
				imagesList[i].classList.add('active');
			}
		}

	}
}

export function videoIndexPage(){
	const video = document.querySelector('#video');

	if (video) {
		video.addEventListener("click", playVideo);
	}

	function playVideo () {
		video.querySelector('iframe').src = video.querySelector('iframe').src.valueOf() + '&autoplay=1';
		video.querySelector('iframe').classList.add('active');
	}
}

export function smoothScroll () {
	document.addEventListener('DOMContentLoaded', () => {
		const links = document.querySelectorAll('.menu a');
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
}