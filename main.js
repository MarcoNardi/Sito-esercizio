var counter=0;
$(document).ready(function () {
	$("li a").click(function(){
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, "slow");
		if($("#funzioni").css("font-size")=="0px"){
			toggleNav("fast");
		}
	});
	$("button").click(function(){
		toggleNav("slow");
		/*
		if($("#funzioni").css("font-size")=="0px"){
			if(counter%2==0){
				$("nav").animate({width:"0%"}, "slow");
				$(".col-8").animate({marginLeft :"5%"}, "slow");
			}else{
				$("nav").animate({width:"40%"}, "slow");
				$(".col-8").animate({marginLeft :"41%"}, "slow");
				
			}
			
		}else{
			
			$("nav").slideToggle("slow");
		}*/
		/*
		if(counter%2==0){
			console.log("okay");
			$("button").text("Show");
		}else{
			$("button").text("Hide");
		}
		
		*/
		
		//counter++;
	});
	
});

function toggleNav(speed){
	if($("#funzioni").css("font-size")=="0px"){
		if(counter%2==0){
			$("nav").animate({width:"0%"}, speed);
			$(".col-8").animate({marginLeft :"5%"}, speed);
		}else{
			$("nav").animate({width:"40%"}, speed);
			$(".col-8").animate({marginLeft :"41%"}, speed);
				
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
}