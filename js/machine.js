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

	// randomizer

	var slot1Obj = {
		0: 'coffeemaker.png',
		1: 'espressomachine.png',
		2: 'teapot.png',
		3: 'coffeemaker.png',
		4: 'espressomachine.png',
		5: 'teapot.png'
	}

	var slot2Obj = {

	}

	var slot3Obj = {


	}

	// finds you a random selection 
	var randomizer = function(obj) {
		var index = Math.round(Math.random()*5);
		console.log(obj[index]);
		return obj[index];
	};

	var 

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
	$('#slot1').hide();


	// when start button clicked, show stop, hide start
	$('#start-button').click(function(){
		$('#start').hide();
		$('#slot1').show();
		$('#slot1').pan({fps: 100, speed: 40, dir: 'down', depth: 70});


		console.log('start button clicked!');
		console.log('spin that wheel!!');


		$('#stop-button').show();
		$('#start-button').hide();
	})

	// when stop button clicked, show reset, hide stop
	$('#stop-button').click(function(){
		console.log('stop button clicked. stop the spinnin!');

		$('#slot1').spStop();
		$('#slot1').hide();
		$('.machine').append('<img src="images/'+randomizer(slot1Obj)+'"/>');
		
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

