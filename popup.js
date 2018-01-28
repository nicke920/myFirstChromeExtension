$(function() {

	var userColor = $('#fontColor').val();

	$('#fontColor').on('change paste keyup', function() {
		userColor = $(this).val();
	})
	
	//on click, query the tabs to get the selected tabs in the current window, run the callback function that will send a message to Mr. Chrome giving it a todo and the specified color
	$('#btnChange').on('click', function() {
		chrome.tabs.query({
			active: true, 
			currentWindow: true
		}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				todo: 'changeColor',
				clickedColor: userColor
			})
		})
	})



})