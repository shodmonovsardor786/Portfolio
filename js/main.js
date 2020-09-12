var scroll = new SmoothScroll('a[href*="#"]');

let navElement = document.querySelector('.nav')
let navItem = document.querySelector('.nav__item')
let projectHeadingElement = document.querySelector('.my-projects__heading')
 
window.addEventListener('scroll', e => {
	if(window.pageYOffset > 80) {	navElement.classList.add('fixed_style')		}
	if(window.pageYOffset < 80) {	navElement.classList.remove('fixed_style')	}
	if(window.innerWidth < 800) {	navElement.classList.remove('fixed_style')
	}

	// if(window.pageYOffset > 660) {	navItem.classList.remove('home')	}
	// if(window.pageYOffset < 620) {	navItem.classList.add('home')		}

	if(window.pageYOffset > 880) {	projectHeadingElement.classList.add('my-projects__heading--style')	}
})
