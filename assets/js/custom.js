


$(document).ready(function(){

  // preloder
  $(window).load(function() {
     $(".preloder").delay(1000).fadeOut("fast");
     $(".loder").delay(1000).fadeOut("fast");
   });


  // back to top button
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


    // nav-bar-button
    let menuToggle = document.querySelector(".toggle");
      menuToggle.onclick = function() {
       menuToggle.classList.toggle("active")
      }
    $('.toggle').click(function(){
      $('.header-nav').toggleClass('toggle-menu');
    })


     // window scroll
    window.onscroll = function(){
      scrollFunction();
    }
    function scrollFunction(){
      if(document.body.scrollTop >50 || document.documentElement.scrollTop > 50){
        document.getElementById("header-nave").classList.add('header-style'); 
      }
      else{
        document.getElementById("header-nave").classList.remove('header-style');
      }  
    }
    // menu-active
     const li=document.querySelectorAll(".links"); 
     const sec=document.querySelectorAll(".commons-section"); 
      function activeMenu(){ 
        let len=sec.length;
       while(--len && window.scrollY + 150 < sec[len].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active")); 
        li[len].classList.add("active"); 
       } 
       activeMenu(); 
       window.addEventListener("scroll", activeMenu); 
  // counterUP Plugin
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
$('.demo-slide').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:700,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

  // swiper-slider
    var swiper = new Swiper(".testimonial", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplayHoverPause:true,
       autoplay: {
         delay: 2500,
         disableOnInteraction: true,
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
   
     // magnific-popup
         $('.video-play-button').magnificPopup({
        type: 'iframe',
      
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', 
          
            patterns: {
              youtube: {
                index: 'youtube.com/',
          
                id: 'v=',
          
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: 'https://player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }

            },
          
            srcAction: 'iframe_src', 
          }  
    });
 
});


// pulsing play button
