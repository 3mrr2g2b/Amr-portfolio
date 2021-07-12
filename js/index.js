$(document).ready(function(){
    
    //window loading...
    
    //toggle click....
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
        
        $('html,body').animate({scrollTop:4800},1000);
      
    });
	$(".ch_4").click(function(){
        
        $('html,body').animate({scrollTop:5750},1000);
      
    });
	$(".button_1").click(function(){
        
          
     //   $('html,body').animate({scrollTop:5430},1000);
      
    });
	$(".close").click(function(){
          $(".show").css('display','none');
          $(".button_1").css('z-index','99999');
    });
	$("#about_con").click(function(){
          //$('.main_pop_up').animate({display:block},1000);
          $(".main_pop_up").css('display','block');
         
         
          $(".pop_up span:nth-child(1)").addClass("active");
    });
	$("span:nth-child(1)").click(function(){
          $(".main_pop_up").css('display','none');
            
    });
	$('#skilles').click(function(){
	    $('.skilles').css('display','block');
	    $(".html").addClass("anim");
        $(".css").addClass("anim");
        $(".js").addClass("anim");
        $(".jquery").addClass("anim");
        $(".react").addClass("anim");
        $(".json").addClass("anim");
        $(".php").addClass("anim");
        $(".java").addClass("anim");
        $(".grafic_design").addClass("anim");
        $(".essential_work_skilles").addClass("anim");
	 });
	 $(".close_skilles").click(function(){
	     $(".skilles").css("display","none");
	 });
	 $(".fa-adjust").click(function(){
	     $('body').toggleClass('active');
	     $('.start-begin .icon_logo .toggle span').toggleClass('active');
	     $('ul').toggleClass('ac');
	     $('.my_works .box_work').toggleClass('active');
	     $('.my_works .navigation-manual .manual-btn').toggleClass('active');
	     $('.connect .container').toggleClass('active');
	     $('.connect .container .box button').toggleClass('active');
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

    if (scroll >=  2000) {
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
        text : ["I'm Here To Speak For All Generations To Come"," I'm a FrontEnd Developer", "I'm Grafic Designer","Let's See The Future With Me And Catch Your Dreem. ",'We help you to learn more and more And become Awesome In Many Languages.','The rhythme is yours.'],
        typeDelay : 100,
        waitingTime : 1500,
        blinkSpeed : 800
    });
});

