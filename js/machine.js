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


	// create slot constructor
	// var Reel = function(elem, velo) {
	// 	this.speed = 0; //starting speed is of course, 0
	// 	this.velo = velo; //how fast
	// 	this.elem = elem;
	// 	this.seti = null;
	// 	this.position = null;
	
	// 	$(elem).pan({
	// 		fps: 30,
	// 		dir: 'up',
	// 		depth: 70

	// 	});

	// 	$(elem).spStop();

	// };

 //  Reel.prototype.start = function() {
 //    $(this.elem).addClass('motion');
 //    $(this.elem).spStart();
 //    this.seti = window.setInterval(function() {
 //        if(this.speed < 70) {
 //            this.speed += this.step;
 //            $(this.el).spSpeed(this.speed);
 //        }
 //    }, 100);
 //  };

	// var test = new Reel('slot1', 30);

	
	// centers button div
	$('.button').css('margin-left', w*.06);
	
	// centers slot machine
	$('.machine').css('margin-left', w*.06).css('margin-top', h*.1);

	// hide other buttons in beginning
	$('#stop-button').hide();
	$('#reset-button').hide();


	// when start button clicked, show stop, hide start
	$('#start-button').click(function(){
		
		$('#slot1').pan({fps: 30, speed: 3, dir: 'up', depth: 70});


		console.log('start button clicked!');
		console.log('spin that wheel!!');


		$('#stop-button').show();
		$('#start-button').hide();
	})

	// when stop button clicked, show reset, hide stop
	$('#stop-button').click(function(){
		console.log('stop button clicked. stop the spinnin!');

		$('#slot1').spStop();
		
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