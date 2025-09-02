// Lepší AOS inicializace
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true, // animace se spustí jen jednou
  offset: 120, // vzdálenost od spodní části obrazovky
  delay: 0,
  anchorPlacement: 'top-bottom'
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 20,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	          items: 2
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 2
	        },
	        1200:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var swiperSetting = function() {
		var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    // direction: 'horizontal',
	    // loop: true,

	    // If we need pagination
	    pagination: {
	      el: '.swiper-pagination',
	    },

	    // Navigation arrows
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    mousewheel: {
		  	invert: false,
		  	forceToAxis: true,
		  	releaseOnEdges: true,
		  },

		  // direction: 'vertical',
		  freeMode: true,
      // slidesPerView: 'auto',
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

	    // And if we need scrollbar
	    // scrollbar: {
	    //   el: '.swiper-scrollbar',
	    // },

	    slidesPerView: 3,
			breakpoints: {
				668: {
					slidesPerView: 1
				},
				1024: {
					slidesPerView: 2 
				}
			},
			// paginationClickable: false,
			spaceBetween: 20,
			// freeMode: true,
			// grabCursor: true,
			// mousewheelControl: true

	  })
	}
	swiperSetting();

});
$(function(){
  // Pauza ostatních videí, když se některé spustí
  $(document).on('play', 'video.img-video', function(){
    $('video.img-video').not(this).each(function(){ this.pause(); });
  });

  // Play on hover pro desktop, na mobilu zapnout controls a vypnout autoplay
  function isTouch() { return ('ontouchstart' in window) || navigator.maxTouchPoints > 0; }

  if (!isTouch()) {
    // desktop: play/pause on hover
    $(document).on('mouseenter', '.image-wrap-2', function(){
      var v = $(this).find('video.img-video').get(0);
      if (v) { v.muted = true; v.play(); }
    }).on('mouseleave', '.image-wrap-2', function(){
      var v = $(this).find('video.img-video').get(0);
      if (v) { v.pause(); v.currentTime = 0; }
    });
  } else {
    // mobile: povolit native controls a zajistit pauzu
    $('video.img-video').each(function(){
      this.muted = false;
      this.controls = true;
      this.pause();
      this.currentTime = 0;
    });
  }
});

(function(){
  function loadVideoEl(video){
    if (video.dataset.loaded) return;
    var src = video.getAttribute('data-src');
    if (!src) return;
    var s = document.createElement('source'); s.src = src; s.type = 'video/mp4';
    while (video.firstChild) video.removeChild(video.firstChild);
    video.appendChild(s);
    video.load();
    video.dataset.loaded = '1';
  }

  function tryPlay(video){
    // nutné pro většinu mobilů: muted + playsinline
    video.muted = true;
    video.playsInline = true;
    loadVideoEl(video);
    var p = video.play();
    if (p !== undefined){
      p.catch(function(){
        // autoplay zamítnut -> zobraz overlay nebo počkej na tap
        video.classList.add('needs-user-play');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    var videos = document.querySelectorAll('video.img-video');

    // Pokus o autoplay pro každé video po načtení (ale nevnucovat)
    videos.forEach(function(v){
      tryPlay(v);
    });

    // Pokud autoplay zamítnut, první uživatelský tap spustí všechna videa z požadavkem
    function onFirstUserGesture(){
      videos.forEach(function(v){
        // pokud ještě nenaloženo, naložit a spustit
        loadVideoEl(v);
        v.muted = true; // může být false pokud chcete zvuk po tap
        v.play().catch(function(){});
        v.classList.remove('needs-user-play');
      });
      document.removeEventListener('touchstart', onFirstUserGesture);
      document.removeEventListener('click', onFirstUserGesture);
    }
    document.addEventListener('touchstart', onFirstUserGesture, {once:true});
    document.addEventListener('click', onFirstUserGesture, {once:true});
  });
})();