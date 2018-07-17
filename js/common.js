$(document).ready(function(){
 
  // hide our element on page load

$('#owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    items:3,
    autoplay:true,
    autoplayTimeout:3000,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items:1,
    },
    // breakpoint from 480 up
    480 : {
        items:2,
    },
    // breakpoint from 768 up
    768 : {
        items:3,
    }
}
});

$('#owl-carousel-2').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    dotsEach:true,
    thumbs: true,
    thumbsPrerendered: true,
});

$('#owl-carousel-3').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    dotsEach:true,
    nav:false,
});

var owl = $('#owl-carousel-3');
owl.owlCarousel();
// Go to the next item
$('.nextt').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prevv').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});


$('#glitch').mouseenter ( function () {
  $(this).addClass('glitch');
});
$('#glitch').mouseleave ( function () {
  $(this).removeClass('glitch');
});

$('.div_img').mouseenter ( function () {
  $('.search').css('display', 'block');
});
$('.div_img').mouseleave ( function () {
  $('.search').css('display', 'none');
});

$('.owl-thumb-item').mouseenter ( function () {
  $('.search').css('display', 'block');
});
$('.owl-thumb-item').mouseleave ( function () {
  $('.search').css('display', 'none');
});


$('#div_img').magnificPopup({
    items: [
      {
        src: '../img/services/pics/1.png'
      },
      {
        src: '../img/services/pics/2.jpg'
      },
      {
        src: '../img/services/pics/3.jpg'
      },
      {
        src: '../img/services/pics/4.jpg'
      },
      {
        src: '../img/services/pics/5.jpg'
      },
      {
        src: '../img/services/pics/6.jpeg'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});

  $('.header').waypoint(function() {
       $('.header').addClass('fadeIn');
  }, { offset: '100%' });
  $('.company').waypoint(function() {
       $('.company').addClass('fadeIn');
  }, { offset: '80%' });
  $('.why_we').waypoint(function() {
     $('.why_we').addClass('fadeIn');
  }, { offset: '80%' });
  $('.services').waypoint(function() {
     $('.services').addClass('fadeIn');
  }, { offset: '100%' });
  $('.expert').waypoint(function() {
     $('.expert').addClass('fadeIn');
  }, { offset: '80%' });
  $('.form_1').waypoint(function() {
     $('.form_1').addClass('fadeIn');
  }, { offset: '100%' });
  $('.teacher').waypoint(function() {
     $('.teacher').addClass('fadeIn');
  }, { offset: '80%' });
    $('.testimonials').waypoint(function() {
     $('.testimonials').addClass('fadeIn');
  }, { offset: '80%' });
    $('.form-2').waypoint(function() {
     $('.form-2').addClass('fadeIn');
  }, { offset: '100%' });

$("#com").click(function() {
  $.scrollTo($("#sect_1"), 800, {
    offset: 0
  });
});
$("#ser").click(function() {
  $.scrollTo($("#sect_2"), 800, {
    offset: 0
  });
});
$("#tea").click(function() {
  $.scrollTo($("#sect_3"), 800, {
    offset: 0
  });
});
$("#tes").click(function() {
  $.scrollTo($("#sect_4"), 800, {
    offset: 0
  });
});
$(".con").click(function() {
  $.scrollTo($("#sect_5"), 800, {
    offset: 0
  });
});


// Coffeluxe

  $('#section_11').waypoint(function() {
       $('.sect_1_item').addClass('fadeInUp');
       $('.h1_1').addClass('fadeIn');
  }, { offset: '100%' });
	$('#section_21').waypoint(function() {
       $('.h1_2').addClass('fadeIn');
       $('img').addClass('fadeIn');
  }, { offset: '80%' });
	$('#section_31').waypoint(function() {
     $('.h1_3').addClass('fadeIn');
	   $('.item').addClass('fadeInUp');
	}, { offset: '80%' });
	$('#section_41').waypoint(function() {
     $('.h1_4').addClass('fadeIn');
	   $('.item_41').addClass('fadeInUp');
	}, { offset: '90%' });
  $('#section_51').waypoint(function() {
     $('.h1_5').addClass('fadeIn');
     $('.sect_5_item').addClass('fadeInUp');
  }, { offset: '90%' });
  $('#section_61').waypoint(function() {
     $('.h1_6').addClass('fadeIn');
  }, { offset: '90%' });


$('.showLink').click(function(){
    var $this = $(this);
    $this.toggleClass('showLink');
    if($this.hasClass('showLink')){
        $this.text('See more');
        $('.example').removeClass('more2');
        $('.example').addClass('more');
    } else {
        $this.text('See less');
        $('.example').removeClass('more');
        $('.example').addClass('more2');
    }
});

  $('img.leter_1, img.leter_2, img.leter_3, img.leter_4, img.leter_5, img.leter_6').waypoint(function() {
		$('.header').addClass('fadeIn');
		$('img.leter_1').addClass('animation_leter_1');
		$('img.leter_2').addClass('animation_leter_2');
		$('img.leter_3').addClass('animation_leter_3');
		$('img.leter_4').addClass('animation_leter_4');
		$('img.leter_5').addClass('animation_leter_5');
		$('img.leter_6').addClass('animation_leter_6');
  }, { offset: '100%' });


$('#glitch').mouseenter ( function () {
	$(this).addClass('glitch');
});
$('#glitch').mouseleave ( function () {
	$(this).removeClass('glitch');
});


$(".menu-item1").click(function() {
	$.scrollTo($(".section_1"), 800, {
		offset: -90
	});
});
$(".menu-item2").click(function() {
	$.scrollTo($(".about_us"), 800, {
		offset: 0
	});
});
$(".menu-item3").click(function() {
  $.scrollTo($(".why_us"), 800, {
    offset: 0
  });
});
$(".menu-item4").click(function() {
  $.scrollTo($(".our_menu"), 800, {
    offset: -90
  });
});
$(".menu-item5").click(function() {
  $.scrollTo($(".section_5"), 800, {
    offset: 0
  });
});
$(".menu-item6").click(function() {
  $.scrollTo($(".contacts"), 800, {
    offset: 0
  });
});
 
});



