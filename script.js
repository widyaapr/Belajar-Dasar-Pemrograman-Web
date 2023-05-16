const footer = document.getElementById('footer');
footer.innerHTML = 'Dicoding - Widya Apriani';

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
