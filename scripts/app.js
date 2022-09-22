
const sliderContainers = document.querySelectorAll('[data-slider-container');

let imageWidth;


sliderContainers.forEach(container => {
    const sliderBtns = container.querySelectorAll('[data-slider-btn]');
    const slider = container.querySelector('[data-slides]')
    const sliderImages = Array.from(slider.querySelectorAll('[data-slider-image'));
    let index = 0;
    let offset;

    imageWidth = getImageWidth(sliderImages);

    sliderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            index = index + getOffset(btn);
            if (index <= 0) {
                index = 0;
            } else if (index > sliderImages.length - 1) {
                index = sliderImages.length - 1;
            };
            changeImage(slider, index, imageWidth);
        });
    });

    window.addEventListener('resize', ()=> {
        imageWidth = getImageWidth(sliderImages);
        changeImage(slider, index, imageWidth);
    });
});


function getImageWidth(sliderImages) {
    let computedWidth = sliderImages[0].clientWidth;
    return computedWidth;
};

function getOffset (btn) {
    let computeOffset;
    if (btn.hasAttribute('data-next-image')) {
        computeOffset = 1;
    } else {
        computeOffset = -1;
    }
    return computeOffset;
}

function changeImage(slider, index, imageWidth) {
    slider.style.transform = `translateX(${imageWidth *-index}px)`
}

// Section for collapsing projects

const projectBtn = document.querySelectorAll('.project-heading-btn');
const projectContainers = document.querySelectorAll('.project-data');

projectBtn.forEach(element => {
    element.addEventListener('click', increaseHeight);
});

function increaseHeight (e) {
    let targetElement = e.target;
    let currentProjectContainer = targetElement.parentNode.nextElementSibling;
    currentProjectContainer.classList.toggle('opened');
};


// Footer section date updater

const currentDateContainer = document.getElementById('current-year');
const currentDate = new Date().getFullYear();
currentDateContainer.innerHTML = currentDate;
currentDateContainer.style.fontSize = '14px'