/**
* Template Name: Regna - v4.8.1
* Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset + 90,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });


  /**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    })
  // });

  $(document).ready( function (e) {
    var cards = document.querySelectorAll(".service-card");
    $("#services .services-list li").on('click', function(e) {
      $("#services .services-list li").removeClass("active_cat");
      var index = $(this).index();
      $(this).addClass("active_cat");
      $( ".showSlide" ).removeClass( "slideIn");
      $( ".showSlide" ).addClass( "slideOut");
      console.log(cards , '-----------------')
      setTimeout(function() {
        if(index == 0) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }

        if(index == 1) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }

        if(index == 2) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }

        if(index == 3) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }

        if(index == 4) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }
    }, 300);
 
      
     
    })


  });

  $(document).ready( function (e) {
    console.log('----videos----');
    var vid = document.querySelectorAll(".bgvid-m"); 
    var vid_mob = document.querySelectorAll(".bgvid"); 
    for(var i=0;i<vid.length;i++) {
      vid[i].play();
      vid_mob[i].play();
    }


  });

  var vid = document.getElementById("bgvid-m"); 

function playVid() { 
; 
} 

  $(document).ready( function (e) {
    console.log('--------')
    $("#contact .categories li").on('click', function(e) {
      console.log('--------1')
      // var index = $(this).index();
      $(this).toggleClass("selected-cat");
      
    });
  });
  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()