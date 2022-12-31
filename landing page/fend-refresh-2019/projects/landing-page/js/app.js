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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// for (const section of sections){
//     const listLi = document.createElement('li');
//     const listUl = document.getElementById("navbar__list")

//     listLi.innerHTML=`<a href= "#${section.id}" class="menu__link" >${section.getAttribute("data-nav")}`
//     // listUl.appendChild(listLi);
 
// }

//scroll to top
const toTop = document.getElementById("scroll__top");
window.onscroll = function (){
    // console.log(this.scrollY);
    this.scrollY >= 500 ? toTop.classList.add("show") : toTop.classList.remove("show");
}
toTop.onclick = function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}




const sections = document.querySelectorAll('section');
const navbarUl = document.getElementById('navbar__list');


let navList = '';

function createNavbar() {
    sections.forEach((section) => {
 
  navList += `<li> <a class="nav__link menu__link" href="#${section.id}" >
            ${section.dataset.nav}</a></li>`;
           
    });
   
    navbarUl.innerHTML = navList;
    // navbarUl.appendChild(navbarList);
    this.goToSection();
  }
  createNavbar();



// Add class 'active' to section when near top of viewport

// function makeActive(){
//     for (const section of sections) {
//     const box = section.getBoundingClientRect();
//     //Find a value that works best, but 150 seems to be a good start.
//     if (box.top <= 0 && box.bottom >= 300) {
//     //apply active state on current section and corresponding Nav link
//     console.log("yes");
//     } else {
//     //Remove active state from other section and corresponding Nav link
//     console.log("no");

   
//     }
//     }
//     }
const navbarLi = document.getElementsByTagName("li");
function makeActiveSection() {
    sections.forEach((section) => {
    
      let elementOffset = section.getBoundingClientRect();
      if (elementOffset.top <= 300 && elementOffset.bottom >= 88) {
        section.classList.add("your-active-class");
        // navbarLi.classList.add("active-link");

      } else {
        section.classList.remove("your-active-class");
        // navbarLi.classList.remove("active-link");
      }
    });
  }
  
  document.addEventListener('scroll', makeActiveSection);


  //Active class
  // function addClassActive (id){
  //   document.querySelector(".link__active")?classList.remove("link__active");
  //   document.querySelector("[href='#${id}']")?classList.add("link__active")

  // }


//scroll to secton


//    const navBar = document.getElementById("navbar__list ");
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


// const scrollToSection =(e) =>{
//     e.preventDefault();
//     const target = e.target.getAttribute('data-scroll-to');
//     const element = document.querySelector(target);
//     element.scrollInToView({behavior:"smooth"});
// };



navbarUl.addEventListener("click", (scrollToSection) =>{
    // console.log("jj");
    scrollToSection.preventDefault();
    if(scrollToSection.target.dataset.nav){
        document
        .getElementById('${toSec.target.dataset.nav}')
        .scrollIntoView({behavior:"smooth"});
      AddActiveClass(scrollToSection.target.dataset.sectionId)
    }
})





// responsive

// Responsive Menu
// Responsive Menu
let responsiveMenu = document.getElementById("bars");
let Navbartoggle = document.getElementById("navbar");
// let NavbarMenu = document.querySelector(".navbar__menu ");
let Navbarlist = document.getElementById("navbar__list")
responsiveMenu.addEventListener("click" , function(){
 console.log("ss");
 Navbarlist.classList.toggle('bars-toggler');
 // Navbartoggle.classList.toggle('active');
// Navbartoggle.style.display="block";
Navbarlist.style.display="block"

})


//active
// let Link = document.getElementsByTagName("li");
// Link.addEventListener("click" , function(){
// Link.classList.add("active-link");

// // document.getElementsByTagName("li").style.backgroundColor = "#foo";
// })

// function addActive (){
//   let AnchorLink = document.getElementsByClassName("menu__link");
//   AnchorLink.addEventListener("click", function(){
//     console.log("d");
//   })
// }


// let btn = document.getElementsByTagName("li");

// btn.addEventListener('click', function onClick(event) {
//   // 👇️ change background color
//   document.body.style.backgroundColor = 'salmon';

//   // 👇️ optionally change text color
//   // document.body.style.color = 'white';
// });
 /**

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


