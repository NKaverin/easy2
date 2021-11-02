const swiper = new Swiper('.gallery__swiper', {
    navigation: {
        nextEl: '.gallery__swiper-right',
        prevEl: '.gallery__swiper-left',
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
                let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        })
    });
}

