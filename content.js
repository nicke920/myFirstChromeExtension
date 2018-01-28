//we send a message to the event page to request an action... basically sends it into chrome, then we add a listener on the event page so that it listens for this specific message 
chrome.runtime.sendMessage({
	todo: "showPageAction"
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.todo == "changeStyle") {
		var addColor = "#" + request.clickedColor;
		var fontSize = request.changedFontSize;

		console.log('whats it returnn', $('p').css(["color", "font-size"]))

		// $('p').css({
		// 	"color": addColor,
		// 	"font-size": fontSize + "px"
		// });

		$('body').toggleClass('mix')

		chrome.runtime.sendMessage({
			persist: "updateStylesInPopup",
			color: addColor, 
			size: fontSize
		})
	}
})