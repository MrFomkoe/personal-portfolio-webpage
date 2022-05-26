window.addEventListener('load', function() {
    console.log('carousel loaded')
    // const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlide = document.querySelector('.carousel-slides');
    const prevBtn = document.querySelector('.carousel-btn-left');
    const nextBtn = document.querySelector('.carousel-btn-right');
    
    let carouselImages = document.querySelectorAll('.carousel-slide');
    let index = 1;
    let firstClone = carouselImages[0].cloneNode(true);
    let lastClone = carouselImages[carouselImages.length - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    carouselSlide.append(firstClone);
    carouselSlide.prepend(lastClone);

    let slideWidth = carouselImages[index].clientWidth;

    window.addEventListener('resize', () => {
        slideWidth = carouselImages[index].clientWidth;
        carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;
    })

    carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;

    // re-assigning variable so it contains all slides including pre/appended
    carouselImages = document.querySelectorAll('.carousel-slide');

    function moveToNextSlide () {
        if (index >= carouselImages.length - 1) {
            return;
        };
        index++;
        carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;
        carouselSlide.style.transition = '0.5s';
    };

    function moveToPrevSlide () {
        if (index <= 0) {
            return;
        };
        index--;
        carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;
        carouselSlide.style.transition = '0.5s';        
    };

    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[index].id === firstClone.id) {
            carouselSlide.style.transition = 'none';
            index = 1;
            carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;
        } else if (carouselImages[index].id === lastClone.id) {
            carouselSlide.style.transition = 'none';
            index = carouselImages.length - 2;
            carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;            
        };
    });

    nextBtn.addEventListener('click', moveToNextSlide);
    prevBtn.addEventListener('click', moveToPrevSlide);
});

