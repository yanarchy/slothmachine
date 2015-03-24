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

	var slot1Obj = {
		0: 'coffeemaker.png',
		1: 'teapot.png',
		2: 'espressomachine.png'
	}
	var slot2Obj = {
		0: 'coffeefilter.png',
		1: 'teastrainer.png',
		2: 'espressotamper.png'
	}

	var slot3Obj = {
		0: 'coffeegrounds.png',
		1: 'loosetea.png',
		2: 'espressobeans.png'
	}

	var slotResults = [];

	// finds you a random selection 
	var randomizer = function(obj) {
		var index = Math.round(Math.random()*2.4);
		console.log(obj[index]);
		slotResults.push(index);
		console.log(slotResults);
		return obj[index];
	};
	var winner = function(array) {
		if(array[0] === array[1] && array[1] === array[2]) {
			console.log('YOU WIN!');
		} else {
			console.log('LOSE');
		}
	};

	// create Reel constructor
	var Reel = function(elem, speed) {
		this.speed = speed; //starting speed is of course, 0
		this.elem = elem; //DOM element--should be an ID
		this.position = null;

		$(elem).hide();
		// Spritely's .pan() to control animation
		$(elem).pan({
			fps: 100,
			speed: speed,
			dir: 'down',
			depth: 70

		});
    
    $(elem).stop();

	};

	// method to stop the spinning
  Reel.prototype.start = function() {
  	$(this.elem).show();
    $(this.elem).spStart();
  };

  Reel.prototype.stop = function() {
  	$(this.elem).spStop();
  	$(this.elem).hide();
		// $('.machine').append('<img class="start" src="images/'+randomizer(slot2Obj)+'"/>');
  }

	// hide other buttons in beginning
	$('#stop-button').hide();
	$('#reset-button').hide();
	// $('#slot1').hide();
	// $('#slot2').hide();

	var a = new Reel('#slot1', 30);
	var b = new Reel('#slot2', 35);
	var c = new Reel('#slot3', 40);

	// when start button clicked, show stop, hide start
	$('#start-button').click(function(){
		$('.defaultSlot').hide(); // hides initial pictures
		a.start();
		b.start();
		c.start();

		$('#stop-button').show();
		$('#start-button').hide();
	})

	// when stop button clicked, show reset, hide stop
	$('#stop-button').click(function(){
		a.stop();
		b.stop();
		c.stop();

		$('.machine').append('<img class="randomSlot" src="images/'+randomizer(slot1Obj)+'"/>');
		$('.machine').append('<img class="randomSlot" src="images/'+randomizer(slot2Obj)+'"/>');
		$('.machine').append('<img class="randomSlot" src="images/'+randomizer(slot3Obj)+'"/>');

		$('#stop-button').hide();
		$('#reset-button').show();
		console.log('slot!', slotResults);
		

		winner(slotResults);
	})

	// when reset button clicked, show start, hide reset
	$('#reset-button').click(function(){
		$('.defaultSlot').show();
		$('.randomSlot').remove();
		slotResults = [];

		$('#reset-button').hide();
		$('#start-button').show();
	})

})

