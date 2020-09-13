var scroll = new SmoothScroll('a[href*="#"]');

let navElement = document.querySelector('.nav')
let navItem = document.querySelector('.nav__item')
let projectHeadingElement = document.querySelector('.my-projects__heading')
 
window.addEventListener('scroll', e => {
	if(window.pageYOffset > 80) {	navElement.classList.add('fixed_style')		}
	if(window.pageYOffset < 80) {	navElement.classList.remove('fixed_style')	}
	if(window.innerWidth < 800) {	navElement.classList.remove('fixed_style')
	}
})

