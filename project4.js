let menu = document.querySelector('#if');
let navlist = document.querySelector('.nava');

menu.onclick = () => {
    menu.classList.toggle('fa-solid');
    navlist.classList.toggle('open');
}