/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
//  const mybutton = document.getElementById('scroll__top');
 const sectionsElements = document.querySelectorAll('section');
 const navbarUl = document.getElementById('navbar__list');
 // change title's text
//  const title = document.getElementById('landing-title');
 
 let navList = '';
//  title.textContent = `Udactiy's Project`;
 /**
  * End Global Variables
  * Start Helper Functions
  
  *
  */

//  create navbar
 function gernerateNavbar() {
   sectionsElements.forEach((section) => {

     navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
           ${section.dataset.nav}</a></li>`;
   });
  
   navbarUl.innerHTML = navList;
 }
 gernerateNavbar();
 
 // Add class 'active' to section when near top of viewport (Eye level )
 
 function addActiveClass(section) {
   // get the id from the section
   const id = section.getAttribute('id');
 
   // add the active class to the section
   document.querySelector(`#${id}`).classList.add('your-active-class');
 }
 
 //Removing the active class from the section
 function removeActiveClass(section) {
   const id = section.getAttribute('id');
   document.querySelector(`#${id}`).classList.remove('your-active-class');
 }
 
 // calcualting when the section is active
 function makeActiveSection() {
   sectionsElements.forEach((section) => {
   
     let elementOffset = section.getBoundingClientRect();
     if (elementOffset.top <= 300 && elementOffset.bottom >= 88) {
       addActiveClass(section);
     } else {
       removeActiveClass(section);
     }
   });
 }
 
 document.addEventListener('scroll', makeActiveSection);
 
 
//  window.onscroll= function(){
//   'use strict';

//   if(window.pageYOffset >= 400){
//     mybutton.style.display = 'block';
//   }else{
//     mybutton.style.display = 'none';
//   }
//  };
//  mybutton.onclick = function(){
//   'use strict';
//   window.scrollTo(0,0);
//  };




const toTop = document.getElementById("scroll__top");
window.onscroll =function (){
    // console.log(this.scrollY);
    this.scrollY >= 500 ? toTop.classList.add("show") : toTop.classList.remove("show");
}
toTop.onclick = function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}

 // scroll To Section
//  const navBar = document.getElementById("navbar__list ");
//  navBar.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.dataset.nav) {
//     document
//       .getElementById(`${event.target.dataset.nav}`)
//       .scrollIntoView({ behavior: "smooth" });
//       setTimeout(() => {
//         location.hash = `${event.target.dataset.nav}`;
//       }, 2000);
//   }
// });


// Responsive Menu
let responsiveMenu = document.getElementById("bars");
 let Navbartoggle = document.getElementById("navbar");
// let NavbarMenu = document.querySelector(".navbar__menu ");
let Navbarlist = document.getElementById("navbar__list")
responsiveMenu.addEventListener("click" , function(){
  // console.log("ss");
  Navbartoggle.classList.toggle('bars-toggler');
  // Navbartoggle.classList.toggle('active');
// Navbartoggle.style.display="block";
Navbarlist.style.display="block"

})


 /**
  * End Helper Functions
  * Begin Main Functions
  *
  */
 
 // build the nav
 
 // Add class 'active' to section when near top of viewport
 
 // Scroll to anchor ID using scrollTO event
 
 /**
  * End Main Functions
  * Begin Events
  *
  */
 
 // Build menu
 
 // Scroll to section on link click
 
 // Set sections as active