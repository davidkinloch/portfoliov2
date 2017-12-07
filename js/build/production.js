// Place any jQuery/helper plugins in here.


$(function() {
  

  // smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });



  /// loading SVG
  var tmax_optionsGlobal = {
	  delay: 0.00000001,
	  repeat: 0,
	  repeatDelay: 0.00000001,
	  yoyo: false
	};

	// Force the transforms to be applied to actual transform attribute
	// rather than the CSS style. This is an undocumented property added
	// somewhat recently by GreenSock. As of 1.15.0, transforms are 
	// automatically GPU-accelerated. It won’t matter in this example, 
	// though, because browsers won’t GPU-accelerate SVG (as of 2/22/15).
	// Thanks Jack Doyle@GreenSock for the tip!
	CSSPlugin.useSVGTransformAttr = true;

	var stagger_opts_from = {
	  opacity: 0,
	  scale: 0,
	  transformOrigin: 'center center',
	  force3D: true
	};

	var stagger_opts_to = {
	  opacity: 1,
	  scale: 1,
	  ease: Elastic.easeInOut,
	  force3D: true
	};

	var tl          = new TimelineMax(tmax_optionsGlobal),
	    path        = $('svg.polyman path'),
	    stagger_val = 0.01,
	    duration    = 1.00;

	tl.staggerFromTo(path, duration, stagger_opts_from, stagger_opts_to, stagger_val, 0);


  $('.section .switch').click( function(e) {
    e.preventDefault();
    $(this).parents('section').toggleClass('section--active');
    $(this).toggleClass('active');
  });

  $('.nav-toggle').click( function(e) {
    e.preventDefault();
    $('.site-header').toggleClass('active');
    $('.nav-primary').toggleClass('active');
  });

  $('.section__figure').click( function(e) {
    var url = $(this).attr('href');
    var myUrl = $(this).attr('href') + ' #beamme';
    $('body').addClass('swipe');
    $('.site-header,.nav-primary, .work-nav').removeClass('active');
   // $(".main-container.clone").load(myUrl);
    setTimeout(function() {
      document.location.href = url;
    }, 1500);
    e.preventDefault();
  });

  //go right
  $('.work-nav__link--next').click( function(e) {
    var url = $(this).attr('href');

    $('body').addClass('swipe-right');
    $('.site-header,.nav-primary,.work-nav').removeClass('active');

    setTimeout(function() {
      document.location.href = url;
    }, 1500);
    e.preventDefault();
  });

  //go left
  $('.work-nav__link--prev, .work .nav-primary__link').click( function(e) {
    var url = $(this).attr('href');

    $('body').addClass('swipe-left');
    $('.site-header,.nav-primary,.work-nav').removeClass('active');


    setTimeout(function() {
      document.location.href = url;
    }, 1500);
    e.preventDefault();
  });


  $('.work-nav__link--all').click( function(e) {
    e.preventDefault();
    //$('.work-nav').toggleClass('active');
    $('.work-nav').toggleClass('all').addClass('killslow');
    $('body').toggleClass('scroll-lock');
  });

  //going down
  $('.work-nav__projectlink').click( function(e) {
    var url = $(this).attr('href');

    $('body').addClass('swipe-top');
    $('.work-nav').removeClass('all');
    $('.site-header,.nav-primary, .work-nav').removeClass('active');

    setTimeout(function() {
      document.location.href = url;
    }, 1500);
    e.preventDefault();
  });

  $('.work .nav-toggle').click( function(e) {
    var url = $(this).attr('href');

    $('body').addClass('swipe-left');
    $('.site-header,.nav-primary,.work-nav').removeClass('active');


    setTimeout(function() {
      document.location.href = url;
    }, 1500);
    e.preventDefault();
  });  
});


/*

$(function() {
                     
  $('.section').click(function() {
    
    $(".section").not(this).hide("500");
    $(this).addClass('section--big');
  });
    
  $('.revert').click(function() { 
      alert('test');
      $(this).parent().removeClass('go-big');
    	//$('.cell').show();
  });
      
});

*/

/*
$( ".section__figure", document.body ).click(function( e) {
  var offset = $( this ).offset();
  e.stopPropagation();
  e.preventDefault();
  $( "#result" ).text( this.tagName +
    " coords ( " + offset.left + ", " + offset.top + ", " + offset.bottom + ", " + offset.right + "   )" );
  $( this ).toggleClass('active');
  $( this ).parent.animate({
    opacity: 0.25,
    left: "+ offset.left +"
  }, 1500, function() {
    // Animation complete.
  });
});

//CAPTIONS
  $('.thumbnails li').hover(function(){
    $(".caption p", this).stop().fadeIn("slow");
  }, function() {
    $(".caption p", this).stop().fadeOut("fast");
  });
*/


/*
$( document ).ajaxComplete(function() {
  var scroll = $(window).scrollTop();
// yada
  $('html').scrollTop(scroll);  
 
  
  $('.main-container').remove(this);
  setTimeout(function() {
     window.scrollTo(0,0); 
  }, 800);
  setTimeout(function() {
    $('.main-container.clone .main').addClass('active');
  }, 1600);
  
});
*/




 
$( window ).on( "load", function() {
 // setTimeout(function() {

    $('.work .main, .work-nav, .section-hero__down').addClass('active');
  //   }, 600);
});


   