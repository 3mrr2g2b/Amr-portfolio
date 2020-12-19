$(document).ready(function(){
    
    //toggle click 
    $('.toggle').click(function(){
			$('.toggle').toggleClass('active');
			$('.back').toggleClass('active');
			
			$('ul').slideToggle(300);
			
		});
	$(".ch_1").click(function(){
        
        $('html,body').animate({scrollTop:0},1000);
      
    });
	$(".ch_2").click(function(){
        
        $('html,body').animate({scrollTop:1100},1000);
      
    });
	$(".ch_3").click(function(){
        
        $('html,body').animate({scrollTop:4600},1000);
      
    });
	$(".ch_4").click(function(){
        
        $('html,body').animate({scrollTop:5050},1000);
      
    });
	$(".button_1").click(function(){
        
          
          $(".show").css('display','block');
          $("video").trigger('play'); 
          $(".button_1").css('z-index','-1');
    });
	$(".close").click(function(){
          $(".show").css('display','none');
          $(".button_1").css('z-index','99999');
    });
	
		
		//scroll window
		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10 ) {
        $(".start-begin").addClass("active");
        
    } 
    else {
        $(".start-begin").removeClass("active");
    
    }
    
    
});

		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100 ) {
        
        $(".sec_3 .box:nth-child(1)").addClass("active");
    } 
    else {
        
        $(".sec_3 .box:nth-child(1)").removeClass("active");
    }
    
    
});

		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400 ) {
        
        $(".sec_3 .box:nth-child(2)").addClass("active");
    } 
    else {
        
        $(".sec_3 .box:nth-child(2)").removeClass("active");
    }
    
    
});

		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 800 ) {
        
        $(".sec_3 .box:nth-child(3)").addClass("active");
    } 
    else {
        
        $(".sec_3 .box:nth-child(3)").removeClass("active");
    }
    
    
});

		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1100 ) {
        
        $(".box_work:nth-child(1)").addClass("move_box");
    } 
    else {
        
        $(".box_work:nth-child(1)").removeClass("move_box");
    }
    
    
});
		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1800 ) {
        
        $(".box_work:nth-child(2)").addClass("move_box");
    } 
    else {
        
        $(".box_work:nth-child(2)").removeClass("move_box");
    }
    
    
});
		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 2500 ) {
        
        $(".box_work:nth-child(3)").addClass("move_box");
    } 
    else {
        
        $(".box_work:nth-child(3)").removeClass("move_box");
    }
    
    
});
		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 3000 ) {
        
        $(".box_work:nth-child(4)").addClass("move_box");
    } 
    else {
        
        $(".box_work:nth-child(4)").removeClass("move_box");
    }
    
    
});
		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 3500 ) {
        
        $(".box_work:nth-child(5)").addClass("move_box");
    } 
    else {
        
        $(".box_work:nth-child(5)").removeClass("move_box");
    }
    
    
});
		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 3800 ) {
        
        $(".box_work:nth-child(6)").addClass("move_box");
    } 
    else {
        
        $(".box_work:nth-child(6)").removeClass("move_box");
    }
    
    
});
		
		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >=  4400) {
        $(".h1_div .h1_connect").addClass("move");
        $(".connect").addClass("active");
        $(".connect .container").addClass("active");
        $(".connect .container .box").addClass("active");
        
    } 
    else {
        $(".h1_div .h1_connect").removeClass("move");
        $(".connect").removeClass("active");
        $(".connect .container").removeClass("active");
        $(".connect .container .box").removeClass("active");
        
    }
    
    
});

		$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >=  4900) {
        $(".box_b").addClass("active");
        $(".box_about").addClass("active");
        $(".box_about:nth-child(3)").addClass("active");
        
        
    } 
    else {
        $(".box_b").removeClass("active");
        $(".box_about").removeClass("active");
        $(".box_about:nth-child(3)").removeClass("active");
        
    }
    
    
});
		
		//type writter code
		$(".typewritter").typewriter({
        prefix : "",
        text : [" I'm Web Designer", "I'm Web Developer", "I'm Grafic Designer","Let's See The Future With Me And Catch Your Dreem. ",'We help you to learn more and more And become Awesome In Many Languages.'],
        typeDelay : 100,
        waitingTime : 1500,
        blinkSpeed : 800
    });
});
