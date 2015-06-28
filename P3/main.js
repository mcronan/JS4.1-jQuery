$(document).on('ready', function(){

//make variable for the button
var theButton = $('.theButton')

//declare popUp in the global scope & style
var popUp = $('<div></div>')

$(popUp).css({
    // 'position' : 'fixed',
	'height' : '500px',
	'width' : '500px',
	'background-color' : 'red',
	'overflow' : 'hidden',
	'position' : 'fixed',
	'top' : '40px',
	'padding-top' :'40px',
	
})

// make close button its own div
var closer = $('<div>Close</div>')

// style close button
$(closer).text("close").css({
	'height' : '30px',
	'width' : '50px',
	'background-color' : 'grey',
	'color' : 'white',
	'margin-left' : 'auto',
	'margin-right' : 'auto',
	'padding' : '10% 10% 10% 10%',
	'z-index' : '10'
})


// click on the main button, a popup appears
$(theButton).on('click', function(){
	$(this).before(popUp)
})

// add close button to popup
$(theButton).on('click', function(){
	$(popUp).append(closer)
})

// click close, popup disappers
$(closer).on('click', function(){
	$(popUp).remove()
	})


});