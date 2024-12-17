// Code Created by Adexsoft
//###############################

//mengaktifkan fungsi class active di navbar
const navbarNav = document.querySelector(".navbar-nav");

//Ketika icon hamburger diklik
document.getElementById('hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};

//Menghilangkan sidebar bukan hanya mengkklik hamburger menu
const hamburger = document.getElementById('hamburger-menu');

document.addEventListener("click", function (e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
