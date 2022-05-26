window.addEventListener('load', function () {
    console.log('controls loaded')
    const projectBtn = document.querySelectorAll('.project-heading-btn');

    console.log(projectBtn);

    projectBtn.forEach(element => {
        element.addEventListener('click', increaseHeight);
    });

    function increaseHeight (e) {
        let targetElement = e.target;
        let projectContainer = targetElement.parentNode.nextElementSibling;
        projectContainer.style.transition = '1s';
        // projectContainer.style.maxHeight  = '1000px';
        console.log(projectContainer);
        projectContainer.classList.toggle('opened');
    };
});