$(document).ready(function(){
	$(".cen_js_r").children().each(function(){
		var selected = "input[option=" + $(this).attr("stranswer")+"]";
		$(this).find(selected).click();
	});
	$(".cen_js_r > input[type=button]").first().click();
});