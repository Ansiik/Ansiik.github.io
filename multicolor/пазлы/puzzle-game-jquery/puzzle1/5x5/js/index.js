
$(document).ready(function(){ 

	//  globals

	var tileClicked = false;
	var firstTileClicked; 
	var secondTileClicked; 
	var topPosFir = 0;
	var leftPosFir = 0;
	var topPosSec = 0;
	var leftPosSec = 0;
	var shuffle = Math.floor((Math.random() * 4) + 1);
	var moves = 0;
	var secs = 0;

	//  shuffle the tiles

	function shuffleTiles(){
		if(shuffle == 1){
			$('#piece-1').css({top: 400, left: 396});
			$('#piece-2').css({top: 0, left: 264});
			$('#piece-3').css({top: 0, left: 132});
			$('#piece-4').css({top: 0, left: 528});
			$('#piece-5').css({top:0, left: 396});
			$('#piece-6').css({top: 100, left: 132});
			$('#piece-7').css({top: 100, left: 0});
			$('#piece-8').css({top: 100, left: 396});
			$('#piece-9').css({top: 100, left: 264});
			$('#piece-10').css({top: 200, left: 0});
			$('#piece-11').css({top: 100, left: 528});
			$('#piece-12').css({top: 200, left: 264});
			$('#piece-13').css({top: 200, left: 132});
			$('#piece-14').css({top: 200, left: 528});
			$('#piece-15').css({top: 200, left: 396});
			$('#piece-16').css({top: 300, left: 132});
			$('#piece-17').css({top: 300, left: 0});
			$('#piece-18').css({top: 300, left: 396});
			$('#piece-19').css({top: 300, left: 264});
			$('#piece-20').css({top: 400, left: 0});
			$('#piece-21').css({top: 300, left: 528});
			$('#piece-22').css({top: 400, left: 264});
			$('#piece-23').css({top: 400, left: 132});
			$('#piece-24').css({top: 400, left: 528});
			$('#piece-25').css({top: 0, left: 0});
		} else if(shuffle == 2){
			$('#piece-1').css({top: 400, left: 396});
			$('#piece-25').css({top: 0, left: 264});
			$('#piece-23').css({top: 0, left: 132});
			$('#piece-22').css({top: 0, left: 528});
			$('#piece-17').css({top:0, left: 396});
			$('#piece-13').css({top: 100, left: 132});
			$('#piece-10').css({top: 100, left: 0});
			$('#piece-11').css({top: 100, left: 396});
			$('#piece-9').css({top: 100, left: 264});
			$('#piece-7').css({top: 200, left: 0});
			$('#piece-8').css({top: 100, left: 528});
			$('#piece-12').css({top: 200, left: 264});
			$('#piece-6').css({top: 200, left: 132});
			$('#piece-14').css({top: 200, left: 528});
			$('#piece-15').css({top: 200, left: 396});
			$('#piece-16').css({top: 300, left: 132});
			$('#piece-5').css({top: 300, left: 0});
			$('#piece-18').css({top: 300, left: 396});
			$('#piece-19').css({top: 300, left: 264});
			$('#piece-20').css({top: 400, left: 0});
			$('#piece-21').css({top: 300, left: 528});
			$('#piece-4').css({top: 400, left: 264});
			$('#piece-3').css({top: 400, left: 132});
			$('#piece-24').css({top: 400, left: 528});
			$('#piece-2').css({top: 0, left: 0});
		} else if(shuffle == 3){
			$('#piece-24').css({top: 400, left: 396});
			$('#piece-25').css({top: 0, left: 264});
			$('#piece-23').css({top: 0, left: 132});
			$('#piece-22').css({top: 0, left: 528});
			$('#piece-21').css({top:0, left: 396});
			$('#piece-20').css({top: 100, left: 132});
			$('#piece-19').css({top: 100, left: 0});
			$('#piece-18').css({top: 100, left: 396});
			$('#piece-17').css({top: 100, left: 264});
			$('#piece-16').css({top: 200, left: 0});
			$('#piece-15').css({top: 100, left: 528});
			$('#piece-14').css({top: 200, left: 264});
			$('#piece-13').css({top: 200, left: 132});
			$('#piece-12').css({top: 200, left: 528});
			$('#piece-11').css({top: 200, left: 396});
			$('#piece-10').css({top: 300, left: 132});
			$('#piece-9').css({top: 300, left: 0});
			$('#piece-8').css({top: 300, left: 396});
			$('#piece-7').css({top: 300, left: 264});
			$('#piece-6').css({top: 400, left: 0});
			$('#piece-5').css({top: 300, left: 528});
			$('#piece-4').css({top: 400, left: 264});
			$('#piece-3').css({top: 400, left: 132});
			$('#piece-2').css({top: 400, left: 528});
			$('#piece-1').css({top: 0, left: 0});
		} else if(shuffle == 4){
			$('#piece-1').css({top: 400, left: 396});
			$('#piece-2').css({top: 0, left: 264});
			$('#piece-3').css({top: 0, left: 132});
			$('#piece-4').css({top: 0, left: 528});
			$('#piece-5').css({top:0, left: 396});
			$('#piece-6').css({top: 100, left: 132});
			$('#piece-7').css({top: 100, left: 0});
			$('#piece-8').css({top: 100, left: 396});
			$('#piece-9').css({top: 100, left: 264});
			$('#piece-10').css({top: 200, left: 0});
			$('#piece-11').css({top: 100, left: 528});
			$('#piece-12').css({top: 200, left: 264});
			$('#piece-13').css({top: 200, left: 132});
			$('#piece-14').css({top: 200, left: 528});
			$('#piece-15').css({top: 200, left: 396});
			$('#piece-16').css({top: 300, left: 132});
			$('#piece-17').css({top: 300, left: 0});
			$('#piece-18').css({top: 300, left: 396});
			$('#piece-19').css({top: 300, left: 264});
			$('#piece-20').css({top: 400, left: 0});
			$('#piece-21').css({top: 300, left: 528});
			$('#piece-22').css({top: 400, left: 264});
			$('#piece-23').css({top: 400, left: 132});
			$('#piece-24').css({top: 400, left: 528});
			$('#piece-25').css({top: 0, left: 0});
		}
	}

	$(window).load(function(){
		setTimeout(function(){
			shuffleTiles();
			setInterval(function(){ 
				secs++ 
			}, 1000);
		}, 1000);
	});

	//  play the game

	$('.pieces').click(function(){

		if(tileClicked == false){  //  if no tile is clicked

			//  set variables
			firstTileClicked = $(this).attr('id');
			topPosFir = parseInt($(this).css('top')); 
			leftPosFir = parseInt($(this).css('left')); 

			//  highlight tile
			$(this).addClass('glow');
			tileClicked = true;

		} else{  //  if you've clicked a tile

			//  set variables
			secondTileClicked = $(this).attr('id');
			topPosSec = parseInt($(this).css('top')); 
			leftPosSec = parseInt($(this).css('left'));

			//  animations
			$('#' + firstTileClicked).css({'top' : topPosSec , 'left' : leftPosSec});
			$('#' + secondTileClicked).css({'top' : topPosFir , 'left' : leftPosFir});

			//  remove the glow and reset the first tile
			$('.pieces').removeClass('glow');
			tileClicked = false;

			//  test for the win

			setTimeout(function(){
				if(
					$('#piece-1').css('left') == '0px' && $('#piece-1').css('top') == '0px' && 
					$('#piece-2').css('left') == '132px' && $('#piece-2').css('top') == '0px' &&
					$('#piece-3').css('left') == '264px' && $('#piece-3').css('top') == '0px' &&
					$('#piece-4').css('left') == '396px' && $('#piece-4').css('top') == '0px' &&
					$('#piece-5').css('left') == '528px' && $('#piece-5').css('top') == '0px' &&
					$('#piece-6').css('left') == '0px' && $('#piece-6').css('top') == '100px' &&
					$('#piece-7').css('left') == '132px' && $('#piece-7').css('top') == '100px' && 
					$('#piece-8').css('left') == '264px' && $('#piece-8').css('top') == '100px' &&
					$('#piece-9').css('left') == '396px' && $('#piece-9').css('top') == '100px' &&
					$('#piece-10').css('left') == '528px' && $('#piece-10').css('top') == '100px' &&
					$('#piece-11').css('left') == '0px' && $('#piece-11').css('top') == '200px' &&
					$('#piece-12').css('left') == '132px' && $('#piece-12').css('top') == '200px' &&
					$('#piece-13').css('left') == '264px' && $('#piece-13').css('top') == '200px' &&
					$('#piece-14').css('left') == '396px' && $('#piece-14').css('top') == '200px' &&
					$('#piece-15').css('left') == '528px' && $('#piece-15').css('top') == '200px' &&
					$('#piece-16').css('left') == '0px' && $('#piece-16').css('top') == '300px' && 
					$('#piece-17').css('left') == '132px' && $('#piece-17').css('top') == '300px' &&
					$('#piece-18').css('left') == '264px' && $('#piece-18').css('top') == '300px' &&
					$('#piece-19').css('left') == '396px' && $('#piece-19').css('top') == '300px' &&
					$('#piece-20').css('left') == '528px' && $('#piece-20').css('top') == '300px' &&
					$('#piece-21').css('left') == '0px' && $('#piece-21').css('top') == '400px' &&
					$('#piece-22').css('left') == '132px' && $('#piece-22').css('top') == '400px' &&
					$('#piece-23').css('left') == '264px' && $('#piece-23').css('top') == '400px' &&
					$('#piece-24').css('left') == '396px' && $('#piece-24').css('top') == '400px' &&
					$('#piece-25').css('left') == '528px' && $('#piece-25').css('top') == '400px' 
				){
					$('p').text('Отличный результат! Пазл собран за ' + secs + ' секунд и ' + moves + ' ходов!!');
					$('article').addClass('glow-2');
					moves = 0;
				}
			}, 1000);

			//  increment the move counter
			moves++

		}

	});  //  end the click function

});