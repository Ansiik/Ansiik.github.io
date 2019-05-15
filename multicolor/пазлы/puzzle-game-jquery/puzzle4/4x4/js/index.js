
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
			$('#piece-1').css({top: 375, left: 495});
			$('#piece-14').css({top: 250, left: 330});
			$('#piece-3').css({top: 375, left: 165});
			$('#piece-4').css({top: 250, left: 0});
			$('#piece-5').css({top:375, left: 0});
			$('#piece-6').css({top: 375, left: 330});
			$('#piece-7').css({top: 125, left: 0});
			$('#piece-8').css({top: 0, left: 0});
			$('#piece-9').css({top: 0, left: 330});
			$('#piece-10').css({top: 0, left: 165});
			$('#piece-11').css({top: 125, left: 330});
			$('#piece-12').css({top: 125, left: 495});
			$('#piece-13').css({top: 125, left: 165});
			$('#piece-2').css({top: 250, left: 495});
			$('#piece-15').css({top: 250, left: 165});
			$('#piece-16').css({top: 0, left: 495});
		} else if(shuffle == 2){
			$('#piece-1').css({top: 375, left: 495});
			$('#piece-9').css({top: 250, left: 330});
			$('#piece-3').css({top: 375, left: 165});
			$('#piece-11').css({top: 250, left: 0});
			$('#piece-15').css({top:375, left: 0});
			$('#piece-6').css({top: 375, left: 330});
			$('#piece-8').css({top: 125, left: 0});
			$('#piece-16').css({top: 0, left: 0});
			$('#piece-2').css({top: 0, left: 330});
			$('#piece-10').css({top: 0, left: 165});
			$('#piece-14').css({top: 125, left: 330});
			$('#piece-12').css({top: 125, left: 495});
			$('#piece-13').css({top: 125, left: 165});
			$('#piece-4').css({top: 250, left: 495});
			$('#piece-5').css({top: 250, left: 165});
			$('#piece-7').css({top: 0, left: 495});
		} else if(shuffle == 3){
			$('#piece-2').css({top: 375, left: 495});
			$('#piece-13').css({top: 250, left: 330});
			$('#piece-7').css({top: 375, left: 165});
			$('#piece-3').css({top: 250, left: 0});
			$('#piece-6').css({top:375, left: 0});
			$('#piece-5').css({top: 375, left: 330});
			$('#piece-4').css({top: 125, left: 0});
			$('#piece-8').css({top: 0, left: 0});
			$('#piece-9').css({top: 0, left: 330});
			$('#piece-1').css({top: 0, left: 165});
			$('#piece-12').css({top: 125, left: 330});
			$('#piece-11').css({top: 125, left: 495});
			$('#piece-10').css({top: 125, left: 165});
			$('#piece-14').css({top: 250, left: 495});
			$('#piece-15').css({top: 250, left: 165});
			$('#piece-16').css({top: 0, left: 495});
		} else if(shuffle == 4){
			$('#piece-1').css({top: 375, left: 495});
			$('#piece-8').css({top: 250, left: 330});
			$('#piece-7').css({top: 375, left: 165});
			$('#piece-4').css({top: 250, left: 0});
			$('#piece-5').css({top:375, left: 0});
			$('#piece-3').css({top: 375, left: 330});
			$('#piece-6').css({top: 125, left: 0});
			$('#piece-2').css({top: 0, left: 0});
			$('#piece-9').css({top: 0, left: 330});
			$('#piece-10').css({top: 0, left: 165});
			$('#piece-11').css({top: 125, left: 330});
			$('#piece-12').css({top: 125, left: 495});
			$('#piece-13').css({top: 125, left: 165});
			$('#piece-14').css({top: 250, left: 495});
			$('#piece-15').css({top: 250, left: 165});
			$('#piece-16').css({top: 0, left: 495});
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
					$('#piece-2').css('left') == '165px' && $('#piece-2').css('top') == '0px' &&
					$('#piece-3').css('left') == '330px' && $('#piece-3').css('top') == '0px' &&
					$('#piece-4').css('left') == '495px' && $('#piece-4').css('top') == '0px' &&
					$('#piece-5').css('left') == '0px' && $('#piece-5').css('top') == '125px' &&
					$('#piece-6').css('left') == '165px' && $('#piece-6').css('top') == '125px' &&
					$('#piece-7').css('left') == '330px' && $('#piece-7').css('top') == '125px' && 
					$('#piece-8').css('left') == '495px' && $('#piece-8').css('top') == '125px' &&
					$('#piece-9').css('left') == '0px' && $('#piece-9').css('top') == '250px' &&
					$('#piece-10').css('left') == '165px' && $('#piece-10').css('top') == '250px' &&
					$('#piece-11').css('left') == '330px' && $('#piece-11').css('top') == '250px' &&
					$('#piece-12').css('left') == '495px' && $('#piece-12').css('top') == '250px' &&
					$('#piece-13').css('left') == '0px' && $('#piece-13').css('top') == '375px' &&
					$('#piece-14').css('left') == '165px' && $('#piece-14').css('top') == '375px' &&
					$('#piece-15').css('left') == '330px' && $('#piece-15').css('top') == '375px' &&
					$('#piece-16').css('left') == '495px' && $('#piece-16').css('top') == '375px' 
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