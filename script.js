let menuIcon = document.querySelector('#menu-Icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('headers nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec,offsetHeight;
        let id = sec.getAttribute; ('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}
menuIcon,oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar,classList,toggle('active');
}