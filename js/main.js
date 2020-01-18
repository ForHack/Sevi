let contents = document.querySelectorAll('.sell__box-content');
let lines = document.querySelectorAll('.line');

let items = document.querySelectorAll('.sell__box > li');
items.forEach((item, index) => {
	item.addEventListener('click', () => {

		contents.forEach((content) => {
			content.classList.remove('show')
			content.style.clipPath = 'circle(100px at 0 0)';
		});

		lines.forEach(line => line.classList.remove('animation__move'))
		contents[index].classList.toggle('show');
		lines[index].classList.toggle('animation__move')
		
		setTimeout(() => {
			contents[index].style.clipPath = 'circle(100%)';
		}, 0)

	});
})

let open = document.querySelector('.burger'),
	close = document.querySelector('.close'),
	menu = document.querySelector('.header__top ul');
open.addEventListener('click', () => menu.style.clipPath = 'circle(100%)');
close.addEventListener('click', () => menu.style.clipPath = 'circle(0 at 0 0)');






