// document.querySelector('video').playbackRate = 1.25;
const video = document.getElementById('background-video');
video.playbackRate = 0.5;


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active')); // Remove active from all links
            this.classList.add('active'); // Add active to clicked link
        });
    });
});



// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var first_swiper = new Swiper(".FirstMySwiper ", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});



//   var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20 
//   })


  $(document).ready(function(){
    $('.about-text').waypoint(function(direction){
        $('.about-text').addClass('animated bounce')
    },{
        offset: '400px'
    })
  })


let valueDisplays = document.querySelectorAll(".c-number");
let interval = 4000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);

})