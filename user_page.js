(function(){
    $(document).ready(function(){
        var filesJSON = [];
        
        $('.card').hover(function(){
            $(this).toggleClass('applyflip');
        });

        /*$('.employeeInfo').mouseenter(function() {
            emp_img = $(this).find('.employeeImage');
            emp_name = $(this).find('.employeeName');
            emp_desig = $(this).find('.employeeDesignation');
            emp_line = $(this).find('.employeeLine');
            //emp_name.fadeOut();
            //emp_desig.fadeOut();
            //emp_line.fadeIn();
            var src = emp_img.attr( "src" );
            var src2 = emp_img.data( "src2" );
            emp_img.attr( "src",src2 );
            emp_img.data( "src2",src );
            emp_img.addClass('employeeImage_Rotate')
            
        })
            .mouseleave(function() {
                emp_img = $(this).find('.employeeImage');
                emp_name = $(this).find('.employeeName');
                emp_desig = $(this).find('.employeeDesignation');
                emp_line = $(this).find('.employeeLine');
                //emp_name.fadeIn();
                //emp_desig.fadeIn();
                //emp_line.fadeOut();
                var src = emp_img.attr( "src" );
                var src2 = emp_img.data( "src2" );
                emp_img.attr( "src",src2 );
                emp_img.data( "src2",src );
                emp_img.removeClass('employeeImage_Rotate')
            });*/
        $('.videoPopUp').hide();
        $('#videoPlayButton').on('click',function(){
            $('#vidtest').click();
            $('.videoPopUp').fadeIn( "slow");
            $('#vidtest').height($(window).height());
            var vid = $('#vidtest').get(0);
            vid.play();
            /*if (vid.requestFullscreen) {
                vid.requestFullscreen();
            } else if (vid.mozRequestFullScreen) {
                vid.mozRequestFullScreen();
            } else if (vid.webkitRequestFullscreen) {
                vid.webkitRequestFullscreen();
            }*/
        });
        $('#closeVideoButton').on('click',function(){
            $('.videoPopUp').fadeOut();
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
                      offset:       0,          // default
                      mobile:       false,       // default
                      live:         true        // default
                  }
                  )
        wow.init();
        function isMobile() {
          try{ document.createEvent("TouchEvent"); return true; }
          catch(e){ return false; }
        }
        if(isMobile()){
            $('.image-background').css("height", 150+$('.mastContent').height());    
            
        }
        else{
            $('.image-background').css("height", $(window).height()); 
            
        }
        
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