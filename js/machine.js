$(document).ready(function() {
	// hide other buttons in beginning
	$('#stop-button').hide();
	$('#reset-button').hide();

	// Top-right ribbon that links to GitHub code
	$('body').append(
	  '<a href="https://github.com/yanarchy/slothmachine"> \
	  <img style="position: fixed; top: 0; right: 0; border: 0;" \
	  src="images/sourceribbon.png" \
	  alt="See the source code" > \
	  </a>'
	);

	var slot1Obj = ['coffeemaker.png', 'teapot.png', 'espressomachine.png'];
	var slot2Obj = ['coffeefilter.png','teastrainer.png','espressotamper.png'];
	var slot3Obj = ['coffeegrounds.png', 'loosetea.png', 'espressobeans.png'];

	var slotResults = [];

	// finds you a random selection for results
	var randomizer = function(array) {
		var index = Math.round(Math.random()*2.4);
		slotResults.push(index);
		return array[index];
	};

	//determines if the user won caffeine + attaches message
	var winner = function(array) {
		if(array[0] === array[1] && array[1] === array[2]) {
			$('#results').append('<h3>YOU WIN SOME CAFFEINE!</h3><img src="images/'+ array[0] + '.png" z-index="2" /><br><img src="images/caffeine.gif" width="200"/>');
		} else {
			$('#results').append('<h3>Sorry, no caffeine for you.</h3><h3><small>You\'ll be a sloth today.</small></h3><img width="300" src="images/losesloth.gif" z-index="1"/>');
		}
	};

	// create Reel constructor
	var Reel = function(elem, maxSpeed) {
		this.speed = 0; //starting speed is of course, 0
		this.maxSpeed = maxSpeed
		this.elem = elem; //DOM element--should be an ID
		this.velocity = 5;
		this.setInt = null;

		$(elem).hide();

		// animation to go up
		$(elem).pan({
			fps: 100,
			speed: this.speed,
			dir: 'down',
			depth: 70
		});
	};

	// method to start the spinning
  Reel.prototype.start = function() {
  	$(this.elem).show();
    $(this.elem).spStart();
    // if(this.speed > this.maxSpeed) {
    // 	window.setInterval(function(){
    // 		this.speed+=this.velocity;
    // 		$(this.elem).spSpeed(this.speed);
    // 	}, 100);
    // }
    this.setInt = window.setInterval(function() {
    	console.log('hello!');
    	if(this.speed < this.maxSpeed) {
    		this.speed += this.velocity;
    		$(this.elem).spSpeed(this.speed);
    	}
    }, 100);

  };

  // method to stop the spinning
  Reel.prototype.stop = function() {
  	$(this.elem).spStop();
  	$(this.elem).hide();
  };

  // create some reels!
	var a = new Reel('#slot1', 20);
	var b = new Reel('#slot2', 50);
	var c = new Reel('#slot3', 35);

	// when start button clicked, show stop, hide start, start reels
	$('#start-button').click(function(){
		$('.defaultSlot').hide();
		$('#stop-button').show();
		$('#start-button').hide();
		
		// hides initial pictures upon start
		a.start();
		b.start();
		c.start();
	})

	// when stop button clicked, show reset, hide stop, stops reels
	$('#stop-button').click(function(){
		a.stop();
		b.stop();
		c.stop();

		// appends randomized result images
		$('.machine').append('<img class="randomSlot" src="images/'+randomizer(slot1Obj)+'"/>');
		$('.machine').append('<img class="randomSlot" src="images/'+randomizer(slot2Obj)+'"/>');
		$('.machine').append('<img class="randomSlot" src="images/'+randomizer(slot3Obj)+'"/>');

		$('#stop-button').hide();
		$('#reset-button').show();

		// finds the winners
		winner(slotResults);

	})

	// when reset button clicked, reset everything!
	$('#reset-button').click(function(){
		$('.defaultSlot').show();
		$('.randomSlot').remove();

		// reset results
		slotResults = [];

		$('#reset-button').hide();
		$('#start-button').show();
		$('#results').children().remove();
	})

})

