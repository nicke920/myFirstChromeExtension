$(function() {

	var userColor = $('#fontColor').val();

	var userFontSize = $('#fontSize').val();

	$('#fontColor').on('change paste keyup', function() {
		userColor = $(this).val();
	})

	$('#fontSize').on('change paste keyup', function() {
		userFontSize = $(this).val();
	})
	
	//on click, query the tabs to get the selected tabs in the current window, run the callback function that will send a message to Mr. Chrome giving it a todo and the specified color
	$('#btnChange').on('click', function() {
		chrome.tabs.query({
			active: true, 
			currentWindow: true
		}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				todo: 'changeStyle',
				clickedColor: userColor,
				changedFontSize: userFontSize
			})
		})
	})

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.persist == "updateStylesInPopup") {
			var color = request.color;
			var size = request.size;
			$('#fontSize').val() = size;
			$('#fontColor').val() = color;
			console.log('received')

		}
	})



})