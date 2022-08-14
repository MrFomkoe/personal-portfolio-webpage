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
