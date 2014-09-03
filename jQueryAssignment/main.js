$(function(){

	$(".striped").on("click", function(){
		$(".table").toggleClass("table-striped");
	});

	$(".bordered").on("click", function(){
		$(".table").toggleClass("table-bordered");
	});

	$(".hover").on("click", function(){
		$(".table").toggleClass("table-hover");
	});

	$(".condense").on("click", function(){
		$(".table").toggleClass("table-condensed");
	});	

	$(".successful").on("click", function(){
		$("tr:nth-child(2n+2)").toggleClass("success");
	});	
	
});