const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
  sidebar.classList.toggle('show-sidebar');
});