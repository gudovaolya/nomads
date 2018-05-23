$(document).ready(function(){

	$('#menu-btn').click(function(){		
		$('.menu').slideToggle(700);	
		if ($(this).hasClass('not-active')) {
			$(this).addClass('is-active').removeClass('not-active');
		}else{
			setTimeout(function(){
				$('.is-active').addClass('not-active').removeClass('is-active')
			},600)			
		}		
	});

	//photoblock - news
	var photo = $(".photo");
	var photo_block = $(".photo-block");
	var one_photo = $(".one-photo");
	photo_block.hover(
		function(){
			$(this).addClass("active");			
		},
		function(){
			$(this).removeClass("active");			
		}			
	);
	photo.hover(
		function(){
			$(this).addClass("is-active");						
		},
		function(){
			$(this).removeClass("is-active");					
		}
	);

	one_photo.hover(
			function(){
				$(this).addClass("is-active");						
			},
			function(){
				$(this).removeClass("is-active");					
			}
		);
	//shedule - initialize slider
	$('.shedule__slider').slick({ 
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,	  
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1	       	        
	      }
	    },
	    {
	      breakpoint: 840,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }	    
	  ]
	});

	//partners - initialize slider
	$('.partners__slider').slick({ 
	  infinite: true,
	  speed: 800,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true	 
	});

	//topic-block - initialize slider
	$('.topic-block__slider').slick({ 
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,	  
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1	       	        
	      }
	    },
	    {
	      breakpoint: 840,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 460,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }	    
	  ]
	});

	(function($) {
      $(function() {
        $('.lang select').styler();
        $('.filter select[name=sport]').styler({
        	selectPlaceholder: 'Вид спорта'
        });
        $('.filter select[name=country]').styler({
        	selectPlaceholder: 'Страна'
        });

      });
    })(jQuery);

    
    function formatState (state) {
		if (!state.id) { return state.text; }
		var $state = $(
			'<span><img src="' + state.element.getAttribute('data-url') + '" class="img-flag" width="16" height="12" /> ' + state.text + '</span>'
		);
		return $state;
	};
	
    // events description toggle on schedule-events page
    $('.event__title').on('click', function(e){
    	e.preventDefault();
    	$(this).toggleClass('active');
    	$(this).next('.event__description').slideToggle();
    });

	// Fancybox initialzation for images and videos
	var addedSocialIcons = false;
	var socialIcons = $('#fancybox-social');
	$(".fancybox")
	.fancybox({
		padding : [20, 0, 60, 0],
		margin: [0, 0, 0, 0],
		margin: 0,
		transitionIn: 'none',
		transitionOut: 'none',
		autoSize: true,
		//height: "100%",
		//width: "auto",
		//minHeight: "100%",
        helpers: {
        	title: {
        		type: 'inside',
        		position: 'top'
        	}
        },
        beforeShow: function () {
			if (!addedSocialIcons) {
				$(".fancybox-overlay").append(socialIcons);
				socialIcons.show();
				addedSocialIcons = true;
			}
			$(".fancybox-skin").append('<div class="fancybox-counter"><span class="current">' + (this.index + 1) + '</span> / ' + this.group.length + '</div>');
		},
       	afterClose: function () {
		    addedSocialIcons = false;
		},
    });
    $(".fancybox-video")
    .fancybox({
        padding : [20, 0, 60, 0],
        margin: [0, 0, 0, 0],
        transitionIn: 'none',
		transitionOut: 'none',
        autoSize: true,       
        helpers: {
        	title: {
        		type: 'inside',
        		position: 'top'
        	}
        },
        beforeShow: function () {
			if (!addedSocialIcons) {
				$(".fancybox-overlay").append(socialIcons);
				socialIcons.show();
				addedSocialIcons = true;
			}
			$(".fancybox-skin").append('<div class="fancybox-counter"><span class="current">' + (this.index + 1) + '</span> / ' + this.group.length + '</div>');
		},
       	afterClose: function () {
		    addedSocialIcons = false;
		},
    });

    // Open gallery if url contains id of a gallery
    if ( document.location.href.indexOf('#') > -1 ) {
		var id = window.location.hash;
		$(id).trigger('click');
	}	

	$(function () {
    var newYear = new Date(); 
    newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
    $('#defaultCountdown').countdown({until: new Date(2016, 09 - 1, 10),format: 'DHMS'});
  });	

//menu -start
  var base_menu_link = $('.menu > li > a');
  var sub_menu = $('.submenu');
  var base_menu = $('.menu > li');

  if ($(window).width() <= 840) {

  	base_menu_link.click(function(e){

  			if ($(this).parent('li').find('> .submenu')) {
  				e.preventDefault();
  			};

  			if (!$(this).hasClass('active')) {
					sub_menu.hide(0); 
					base_menu_link.removeClass('active');
					$(this).addClass('active');	  		 	
		  		$(this).next('.submenu').slideDown(400);

				} else{

					$(this).removeClass('active');
					$(this).next('.submenu').slideUp(400);

				}	

	  });

  } else{

  	base_menu.mouseover(function(){  	
  		$(this).addClass('hover');  		
  	});

  	base_menu.mouseleave(function(){  	
  		$(this).removeClass('hover');  		
  	});

  };

//menu - finish

});