// scrolling effects js
const body = document.body;
let lastScroll = 0;

window, addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    if (currentScroll <= 0) {
        body.classList.remove('scroll-up')
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
        ham.classList.remove('active');
        navMenu.classList.remove('active');
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
        navMenu.classList.remove('active');
        ham.classList.remove('active');
    }

    lastScroll = currentScroll;
});


//ham and nav links
const ham = document.querySelector('.hamburger_wrapper');
const navMenu = document.querySelector('.nav-menu');
const homeBtn = document.querySelector('.home-btn')

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    navMenu.classList.toggle('active');
    homeBtn.classList.toggle('active')
    body.classList.add('scroll-up')
})

if (navMenu.classList.contains('active')) {


}

const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => { link.classList.remove('active') });
        link.classList.add('active');
        ham.classList.remove('active');
        navMenu.classList.remove('active');
        homeBtn.classList.remove('active');
    })
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            const activeSection = section.getAttribute('id');
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeSection}`) {
                    link.classList.add('active');
                }
            })
        }
    })
})