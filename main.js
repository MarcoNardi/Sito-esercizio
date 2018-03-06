var counter=0;
$(document).ready(function () {
	$("li a").click(function(){
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, "fast");
	});
	$("button").click(function(){
		
		$("nav").slideToggle("slow");
		/*
		if(counter%2==0){
			console.log("okay");
			$("button").text("Show");
		}else{
			$("button").text("Hide");
		}
		counter++;
		
		*/
	});
});

