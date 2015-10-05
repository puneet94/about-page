(function(){
    $(document).ready(function(){
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
			   	console.log((hT[i]-wH) , wS);
		  		if (wS > (hT[i]+hH[i]-wH)){
		   			console.log($('.employeeThreeList')[i]);  
		   		}
		
    		}
    	});
    });
})();