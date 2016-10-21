// var callback = function(detail){
//   console.log(detail);
// };
//
// chrome.webRequest.onBeforeRequest.addListener(function(detail){
//   console.log(detail);
// },{urls: ["<all_urls>"],types:["main_frame","sub_frame","stylesheet","script","image","object","xmlhttprequest","other"]},["responseHeaders","requestHeaders","blocking"]);

//*://v.polyv.net/uc/exam/get?vid=*

var i = 0;

chrome.webRequest.onCompleted.addListener(
    function(details){
		
		if(i == 0){
			$.get(details.url,function(data,statue){
				console.log(data);
				
				var str = "一共有问题:"+data.length+"道\n\n";
								
				for(var item = 0;item < data.length;item++){
					var answers = JSON.parse(data[item].choices);
					str += "q:" +data[item].question + "\n"
					for(var n=0;n<answers.length;n++){
						if(answers[n].right_answer == 1){
							console.log(answers[n].answer);
							str += "a: " + answers[n].answer.substring(0,1) + "\n\n";
						}
					}
				}
				
				alert(str);
				console.log(str);
			})
		}
		
		i++;
    },
    {urls:["*://v.polyv.net/uc/exam/get?vid=*"]},
    ["responseHeaders"]);
	
chrome.webRequest.onCompleted.addListener(
    function(details){
		
		i = 0;
    },
    {urls:["*://course.njcedu.com/newcourse/course.htm?courseId=*"]},
    ["responseHeaders"]);
	
	
	
	