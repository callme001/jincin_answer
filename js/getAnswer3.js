$(document).ready(function(){
	console.log('课后答题拦截....');
	$("#record > table").each(function(){
		var selected = $(this).find("input[option=" + $(this).attr("stranswer")+"]");
		$(this).find(selected).click();
	});
    $("#record  input[type=button]").first().click();
});
