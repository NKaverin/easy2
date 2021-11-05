const swiper = new Swiper('.gallery__swiper', {
    navigation: {
        nextEl: '.gallery__arrow-button_type_right',
        prevEl: '.gallery__arrow-button_type_left',
    },
    spaceBetween: 40,
});

const swiper2 = new Swiper('.press__swiper', {
    pagination: {
        el: '.press__pagination',
        clickable: true,
        horizontalClass: '.press__pagination'
    }
});

let menuLinks= document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function(e) {
            let menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                let gotoBlock = document.querySelector(menuLink.dataset.goto);
                let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        })
    });
}

let readButton = document.querySelector('.press__read');
readButton.addEventListener('click', function(){
    let activeSlide = document.querySelector('.press__slide.swiper-slide-active');
    if (activeSlide.dataset.ref) {
        window.open(activeSlide.dataset.ref);
    }
})

let burger = document.querySelector('.menu__menu-icon');
burger.addEventListener('click', function(e){
    document.querySelector('.menu__body').classList.toggle('menu_condition_active')
})
let closeIcon = document.querySelector('.header__close-icon');
closeIcon.addEventListener('click', function(e){
    document.querySelector('.menu__body').classList.toggle('menu_condition_active')
})

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', function(e){
    e.preventDefault();
})