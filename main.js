var counter=0;
$(document).ready(function () {
	$("li a").click(function(){
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, "fast");
	});
	$("button").click(function(){
		if($("#funzioni").css("font-size")=="0px"){
			console.log("herru");
			if(counter%2==0){
				$("nav").animate({width:"0%"}, "slow");
			}else{
				$("nav").animate({width:"30%"}, "slow");
			}
			
		}else{
			
			$("nav").slideToggle("slow");
		}
		/*
		if(counter%2==0){
			console.log("okay");
			$("button").text("Show");
		}else{
			$("button").text("Hide");
		}
		
		*/
		
		counter++;
	});
});

