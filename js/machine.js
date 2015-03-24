$(document).ready(function() {
	// Top-right ribbon that links to GitHub code
	$('body').append(
	  '<a href="https://github.com/yanarchy/slothmachine"> \
	  <img style="position: fixed; top: 0; right: 0; border: 0;" \
	  src="images/sourceribbon.png" \
	  alt="See the source code" > \
	  </a>'
	);

	var h = $(window).height();
	var w = $(window).width();

	// centers button div
	$('.button').css('margin-left', w*.06);
	
	// centers slot machine
	$('.machine').css('margin-left', w*.06).css('margin-top', h*.1);

	// hide other buttons in beginning
	$('#stop-button').hide();
	$('#reset-button').hide();

	// when start button clicked, show stop, hide start
	$('#start-button').click(function(){
		console.log('start button clicked!');
		console.log('spin that wheel!!');
		$('#stop-button').show();
		$('#start-button').hide();
	})

	// when stop button clicked, show reset, hide stop
	$('#stop-button').click(function(){
		console.log('stop button clicked. stop the spinnin!');
		$('#stop-button').hide();
		$('#reset-button').show();
	})

	// when reset button clicked, show start, hide reset
	$('#reset-button').click(function(){
		console.log('resets to beginning state');
		$('#reset-button').hide();
		$('#start-button').show();
	})




})

/* Functions Needed:
- start
- shuffle
- stop
- something that determines if you win
- reset

Extras:
- spinning animation
- "win" picture
- "lose" picture

Components:
- title
- button
	-extra: animate it going up and down

*/