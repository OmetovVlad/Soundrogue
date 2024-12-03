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

	const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0; // Проверка на touch устройстов

	if (!isTouchDevice) {
		document.documentElement.classList.add("no-touch");
	}
}

export function mobileMenu(){
	const mobileBtn = document.querySelector('.mobile_menu_btn');
	const mobileMenu = document.querySelector('.mobile_menu_wrapper');

	mobileBtn.addEventListener("click", toggleMenu);

	function toggleMenu(){
		mobileBtn.classList.toggle("active");
		mobileMenu.classList.toggle("active");
		document.querySelector('body').classList.toggle("lock");
	}
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

export function emailValidation() {
	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	const input = document.querySelector('#subscribe input.input-text');
	const emailForm = document.querySelector('#subscribe form');

	function onInput() {
		if (input.value.length > 0) {
			if (isEmailValid(input.value)) {
				emailForm.classList.remove('invalid');
			}
		} else {
			emailForm.classList.remove('invalid');
		}
	}

	if (input) {
		input.addEventListener('input', onInput);
	}

	function isEmailValid(value) {
		return EMAIL_REGEXP.test(value);
	}
}

export function emailSubscribe() {
	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	const button = document.querySelector('#subscribe button');
	const input = document.querySelector('#subscribe input.input-text');
	const emailForm = document.querySelector('#subscribe form');

	if (button) {
		button.addEventListener('click', subscribe);
	}

	function isEmailValid(value) {
		return EMAIL_REGEXP.test(value);
	}

	function subscribe(e) {
		e.preventDefault();
		if (isEmailValid(input.value) ) {
			emailForm.classList.remove('invalid');
			document.querySelector('#subscribe .title-card span').textContent = 'Thank you!';
			document.querySelector('#subscribe div.text span').textContent = 'Your submission has been received';
			document.querySelector('#subscribe .subscribe-form').remove();
		} else {
			emailForm.classList.add('invalid');
		}
	}
}