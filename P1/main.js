/******************* Part I *********************/

/********** 1. Create a button  *************/
var $button = $('.button')
	
$button.html('<button type="button"> Click Me!</button>')
// $button.css({
// 	'height' : '200px',
// 	'width' : '200px',
// 	'background-color': 'blue',
// });

/********** 2. Click event handler *************/
$button.on('click', function(){
	console.log('This is printed');
});


/********** 3. Append *****************/
$button.on('click', function(){
	$('body').append('Hello');
});


/********** 4. Button, append ***********/
$('body').append('<button type="button"> Click me </button>')
	$(this).on('click', function(){
		$('body').append('<h1>Hello Again</h1>')
})

/********** 5. Button, append ul *********/
$('body').append('<button type="button"> Click me </button>')
	$(this).on('click', function(){
		$('body').append('<ul> <li>One</li> <li>Two</li> <li>Three</li> </ul>')
	})

