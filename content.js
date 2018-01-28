//we send a message to the event page to request an action... basically sends it into chrome, then we add a listener on the event page so that it listens for this specific message 
chrome.runtime.sendMessage({
	todo: "showPageAction"
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.todo == "changeColor") {
		var addColor = "#" + request.clickedColor;

		$('p').css('color', addColor);
	}
})