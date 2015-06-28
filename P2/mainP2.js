/******************* Part II *********************/

$(document).on('ready', function(){
/************** 2. Mouse over ***************/
$('p').mouseenter(function(){
	$(this).css('color', '#FF69B4')

/*********** 3. Add exclamiation **********/
	$('h2').append('!') 
});

/*************** 4. Confirm **************/

// $('a').on('click', function(){
// 	return confirm('Are you sure?');
// 		if(confirm === true) {
// 			return true
// 		} else {
// 			return false
// 		} 
// })

/*************** 4. Confirm **************/
/* if user does not go to link, remove link from 
the DOM
You either return confirmLink here, which will 
end the funciton, and the user will not
be brought ot the page, or use event.preventDefault
in the condiiton, to stop them from going to the page.

 */

 $('a').on('click', function(event){

 	var confirmLink = confirm("Are you sure?")
 	if(!confirmLink) {
 		$(this).remove();
 		event.preventDefault();

 		}

 		// return confirmLink
	});

 });

