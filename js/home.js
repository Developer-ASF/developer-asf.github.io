// Navbar toggle
const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
//add active class to nav-link 
$(document).ready(function(){
      $(".nav-link").click(function(e){
       $(".nav-link").removeClass("active");
       $(this).addClass("active");
      });
});
  // Scrolling Effect

  $(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('.header').addClass('black');
    }

    else {
          $('.header').removeClass('black');
    }
});

// typed js
var typed = new Typed('.element',{
      strings: [ 'Web Developer',
                  'Freelancer',
                  'Student'],
      typespeed: 50,
      backspeed: 50,
      loop: true,
});

// counter number js
//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
      const target = document.querySelector(qSelector);
      let startTimestamp = null;
      const step = (timestamp) => {
       if (!startTimestamp) startTimestamp = timestamp;
       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
       target.innerText = Math.floor(progress * (end - start) + start);
       if (progress < 1) {
        window.requestAnimationFrame(step);
       }
      };
      window.requestAnimationFrame(step);
     };
     //#endregion - end of - number counter animation
     
     document.addEventListener("DOMContentLoaded", () => {
      counterAnim("#count1", 10, 300, 1000);
      counterAnim("#count2", 10, 21, 1000);
      counterAnim("#count3", 10, 1200, 1000);
      counterAnim("#count4", 10, 1011, 1000);
      counterAnim("#count5", 10, 707, 1000);
      
     });  


      //progressbar skills
var offsetTop = $('#skills').offset().top;
$(window).scroll(function() {
var height = $(window).height();
if($(window).scrollTop()+height > offsetTop) {
jQuery('.prgbar-out').each(function(){
jQuery(this).find('.prgbar-in').animate({
width:jQuery(this).attr('data-percent')
},2000);
});
}
});