// Hamburger Menu
const ul = document.querySelector('ul');
const container = document.querySelector('.wrapper');
const lis = document.querySelectorAll('nav ul > li');

lis.forEach((x) => {
    x.addEventListener("click", () => {
        ul.className = '';
        container.classList.remove('change');
    });
});

const toggle = (x) => {
    ul.classList.toggle('show');
    x.classList.toggle('change');
}

// Toggle dots with a function
const dots = document.querySelectorAll('.dots > a');

dots.forEach(dot => dot.addEventListener('click', toggleDots));

function toggleDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('filled');
    }
    this.classList.add('filled');
}

// Toggle dots and links when u scroll on a page
const navLinks = document.querySelectorAll('li > a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
    let current = '';
    let filled = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // const sectionHeight = section.clientHeight;

        if (this.pageYOffset >= (sectionTop - 500)) {
            current = section.getAttribute('id');
            filled = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            a.classList.add('active');
        }
        if (current === 'aktivnosti') {
            a.style.color = 'black';
            ul.style.backgroundColor = 'white';

        } else {
            a.style.color = 'white';
            ul.style.backgroundColor = 'transparent';

        }
    });

    dots.forEach(dot => {
        dot.classList.remove('filled');
        if (dot.classList.contains(filled)) {
            dot.classList.add('filled');
        }
    });
});