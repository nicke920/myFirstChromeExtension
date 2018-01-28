//we listen for all the messages, and then if the request matches the message sent from content script, do something...
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	if (request.todo == "showPageAction") {
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
			chrome.pageAction.show(tabs[0].id)
		})
	}
})

console.log('res')