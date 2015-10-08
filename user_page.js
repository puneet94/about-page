(function(){
    $(document).ready(function(){
        $('.videoPopUp').hide();
            $('#vidtest').height($(window).height()-7);
            $('#videoPlayButton').on('click',function(){
                $('#vidtest').click();
                $('#vidtest').get(0).play();
                $('.videoPopUp').show();
                
               
            });
            $('#closeVideoButton').on('click',function(){
                $('.videoPopUp').hide();
               $('#vidtest').get(0).pause();
            });
        $('.toggle_button').on('click',function(){
            $('.sideMenu').height($(document).height());
          $('.sideMenu').animate({'right':'0%'},function(){
            $('.sideMenuHideArea').css('background','rgba(0,0,0,0.7)');   
          });
          $('.sideMenu').data('shown','1');
        });
        $('.sideMenuHideArea').on('click',function(){
          $('.sideMenuHideArea').css('background','transparent'); 
          $('.sideMenu').animate({'right':'100%'});
          $('.sideMenu').data('shown','0');
        });
        $(".searchSectionIconButton").click(function(){
        $(".fullSearch").show();
            $(window).scrollTop(0);
            
            $(".fullSearch").height($(document).height());
    });
    $('body').on('click','.searchSectionCloseButton',function(){
      $(".fullSearch").hide();
    });
        $(".categoriesLink").click(function(){
            $(".inputPopUp").show();
            $(window).scrollTop(0);
            
        });
        $(".locationsLink").click(function(){
            $(".locationPopUp").show();
            $(window).scrollTop(0);
            
        });
        $(".inputPopUpClose").click(function(){
            $(".inputPopUp").hide();
        });
        $(".locationPopUpClose").click(function(){
            $(".locationPopUp").hide();
        });
        $(".searchSectionLocationInput, .searchSectionStoreInput").blur(function(){
            $(window).scrollTop(0);
        });
        $(".searchSectionLocationInput, .searchSectionStoreInput").keyup(function(event){
            if(event.keyCode == 13){
                $(window).scrollTop(0);
            }
        });
    	wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       100,          // default
                      mobile:       false,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
    	$('.image-background').css("height", 300+$(".mastContent").height());
    	$(window).scroll(function() {
    		
    		var hT = [];
    		var hH = [];

    		for(var i=0;i<$('.employeeThreeList').length;i++){
    			hT[i] = $($('.employeeThreeList')[i]).offset().top;
		       	hH[i] = $($('.employeeThreeList')[i]).outerHeight();
		       	var wH = $(window).height();
		       	var wS = $(this).scrollTop();
			   	
		  		if (wS > (hT[i]+hH[i]-wH)){
		   			
		   		}
		
    		}
    	});
    });
})();