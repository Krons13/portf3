
const animItems = document.querySelectorAll('.anim-items')

if (animItems.length > 0) {
	window.addEventListener('scroll',animOnScroll);
	function animOnScroll(params) {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index]
				const animItemHeight = animItem.offsetHeight
				const animItemOffset = offset(animItem).top
				const animStart = 4

				let animItemPoint = window.innerHeight - animItemHeight / animStart
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart
				}
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('active')
				} else {
					if (!animItem.classList.contains('anim-no-hide')) {
						animItem.classList.remove('active')
					}
				}
			}
		}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top:rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll()
	}, 300)
}

const toggleButton = document.querySelector('.toggle-menu')
const navBar = document.querySelector('.nav-bar')
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle')
	toggleButton.classList.toggle('close')
})


const elem = document.querySelector(".main__img2")
const wrapper = document.querySelector(".main__wrapper")
wrapper.addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth
	let y = e.clientY / window.innerHeight
	elem.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'
})

const slides = document.querySelectorAll('.product__slide')
const dots = document.querySelectorAll('.product__list-title')

let index = 0

        const activeSlide = n => {
                for (const slide of slides) {
                    slide.classList.remove('active-slide')
                }
                slides[n].classList.add('active-slide')
        }
        const activeDot = n => {
                for (const dot of dots) {
                    dot.classList.remove('active-title')
                }
                dots[n].classList.add('active-title')
        }

        const prepareCurrentSlide = ind => {
            activeSlide(ind)
            activeDot(ind)
        }

        const nextSlide = () => {
            if(index == slides.length - 1 ) {
                index = 0
                prepareCurrentSlide(index)
            } else {
                index++
                prepareCurrentSlide(index)
            }
        }
        const prevSlide = () => {
            if(index == 0) {
                index = slides.length - 1
                prepareCurrentSlide(index)
            } else {
                index--
                prepareCurrentSlide(index)
            }
        }

        dots.forEach((item, indexDot) => {
            item.addEventListener('click', () => {
                index = indexDot
                prepareCurrentSlide(index)
            })
        })