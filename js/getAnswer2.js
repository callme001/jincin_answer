$(document).ready(function(){
	console.log(2333);
	$("#record").children().each(function(){
		var selected = "input[option=" + $(this).attr("stranswer")+"]";
		$(this).find(selected).click();
	});
});