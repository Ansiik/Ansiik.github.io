
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
			$('#piece-7').css({top: 0, left: 110});
			$('#piece-8').css({top: 0, left: 0});
			$('#piece-9').css({top: 0, left: 330});
			$('#piece-10').css({top: 0, left: 220});
			$('#piece-11').css({top:0, left: 550});
			$('#piece-12').css({top: 0, left: 440});
			$('#piece-1').css({top: 56, left: 110});
			$('#piece-2').css({top: 56, left: 0});
			$('#piece-3').css({top: 56, left: 330});
			$('#piece-4').css({top: 56, left: 220});
			$('#piece-5').css({top: 56, left: 550});
			$('#piece-6').css({top: 56, left: 440});
			$('#piece-19').css({top: 112, left: 110});
			$('#piece-20').css({top: 112, left: 0});
			$('#piece-21').css({top: 112, left: 330});
			$('#piece-22').css({top: 112, left: 220});
			$('#piece-23').css({top: 112, left: 550});
			$('#piece-24').css({top: 112, left: 440});
			$('#piece-13').css({top: 168, left: 110});
			$('#piece-14').css({top: 168, left: 0});
			$('#piece-15').css({top: 168, left: 330});
			$('#piece-16').css({top: 168, left: 220});
			$('#piece-17').css({top: 168, left: 550});
			$('#piece-18').css({top: 168, left: 440});
			$('#piece-31').css({top: 224, left: 110});
			$('#piece-32').css({top: 224, left: 0});
			$('#piece-33').css({top: 224, left: 330});
			$('#piece-34').css({top: 224, left: 220});
			$('#piece-35').css({top: 224, left: 550});
			$('#piece-36').css({top:224, left: 440});
			$('#piece-25').css({top: 280, left: 110});
			$('#piece-26').css({top: 280, left: 0});
			$('#piece-27').css({top: 280, left: 330});
			$('#piece-28').css({top: 280, left: 220});
			$('#piece-29').css({top: 280, left: 550});
			$('#piece-30').css({top: 280, left: 440});
			$('#piece-43').css({top: 336, left: 110});
			$('#piece-44').css({top: 336, left: 0});
			$('#piece-45').css({top: 336, left: 330});
			$('#piece-46').css({top: 336, left: 220});
			$('#piece-47').css({top: 336, left: 550});
			$('#piece-48').css({top: 336, left: 440});
			$('#piece-37').css({top: 392, left: 110});
			$('#piece-38').css({top: 392, left: 0});
			$('#piece-39').css({top: 392, left: 330});
			$('#piece-40').css({top: 392, left: 220});
			$('#piece-41').css({top: 392, left: 550});
			$('#piece-42').css({top: 392, left: 440});
			$('#piece-54').css({top: 448, left: 110});
			$('#piece-50').css({top: 448, left: 0});
			$('#piece-53').css({top: 448, left: 330});
			$('#piece-52').css({top: 448, left: 220});
			$('#piece-51').css({top: 448, left: 550});
			$('#piece-49').css({top: 448, left: 440});
		} else if(shuffle == 2){
			$('#piece-7').css({top: 0, left: 110});
			$('#piece-8').css({top: 0, left: 0});
			$('#piece-9').css({top: 0, left: 330});
			$('#piece-10').css({top: 0, left: 220});
			$('#piece-11').css({top:0, left: 550});
			$('#piece-12').css({top: 0, left: 440});
			$('#piece-1').css({top: 56, left: 110});
			$('#piece-2').css({top: 56, left: 0});
			$('#piece-3').css({top: 56, left: 330});
			$('#piece-4').css({top: 56, left: 220});
			$('#piece-5').css({top: 56, left: 550});
			$('#piece-6').css({top: 56, left: 440});
			$('#piece-19').css({top: 112, left: 110});
			$('#piece-20').css({top: 112, left: 0});
			$('#piece-21').css({top: 112, left: 330});
			$('#piece-22').css({top: 112, left: 220});
			$('#piece-23').css({top: 112, left: 550});
			$('#piece-24').css({top: 112, left: 440});
			$('#piece-13').css({top: 168, left: 110});
			$('#piece-14').css({top: 168, left: 0});
			$('#piece-15').css({top: 168, left: 330});
			$('#piece-16').css({top: 168, left: 220});
			$('#piece-17').css({top: 168, left: 550});
			$('#piece-18').css({top: 168, left: 440});
			$('#piece-31').css({top: 224, left: 110});
			$('#piece-32').css({top: 224, left: 0});
			$('#piece-33').css({top: 224, left: 330});
			$('#piece-34').css({top: 224, left: 220});
			$('#piece-35').css({top: 224, left: 550});
			$('#piece-36').css({top:224, left: 440});
			$('#piece-25').css({top: 280, left: 110});
			$('#piece-26').css({top: 280, left: 0});
			$('#piece-27').css({top: 280, left: 330});
			$('#piece-28').css({top: 280, left: 220});
			$('#piece-29').css({top: 280, left: 550});
			$('#piece-30').css({top: 280, left: 440});
			$('#piece-43').css({top: 336, left: 110});
			$('#piece-44').css({top: 336, left: 0});
			$('#piece-45').css({top: 336, left: 330});
			$('#piece-46').css({top: 336, left: 220});
			$('#piece-47').css({top: 336, left: 550});
			$('#piece-48').css({top: 336, left: 440});
			$('#piece-37').css({top: 392, left: 110});
			$('#piece-38').css({top: 392, left: 0});
			$('#piece-39').css({top: 392, left: 330});
			$('#piece-40').css({top: 392, left: 220});
			$('#piece-41').css({top: 392, left: 550});
			$('#piece-42').css({top: 392, left: 440});
			$('#piece-54').css({top: 448, left: 110});
			$('#piece-50').css({top: 448, left: 0});
			$('#piece-53').css({top: 448, left: 330});
			$('#piece-52').css({top: 448, left: 220});
			$('#piece-51').css({top: 448, left: 550});
			$('#piece-49').css({top: 448, left: 440});
		} else if(shuffle == 3){
			$('#piece-7').css({top: 0, left: 110});
			$('#piece-8').css({top: 0, left: 0});
			$('#piece-9').css({top: 0, left: 330});
			$('#piece-10').css({top: 0, left: 220});
			$('#piece-11').css({top:0, left: 550});
			$('#piece-12').css({top: 0, left: 440});
			$('#piece-1').css({top: 56, left: 110});
			$('#piece-2').css({top: 56, left: 0});
			$('#piece-3').css({top: 56, left: 330});
			$('#piece-4').css({top: 56, left: 220});
			$('#piece-5').css({top: 56, left: 550});
			$('#piece-6').css({top: 56, left: 440});
			$('#piece-19').css({top: 112, left: 110});
			$('#piece-20').css({top: 112, left: 0});
			$('#piece-21').css({top: 112, left: 330});
			$('#piece-22').css({top: 112, left: 220});
			$('#piece-23').css({top: 112, left: 550});
			$('#piece-24').css({top: 112, left: 440});
			$('#piece-13').css({top: 168, left: 110});
			$('#piece-14').css({top: 168, left: 0});
			$('#piece-15').css({top: 168, left: 330});
			$('#piece-16').css({top: 168, left: 220});
			$('#piece-17').css({top: 168, left: 550});
			$('#piece-18').css({top: 168, left: 440});
			$('#piece-31').css({top: 224, left: 110});
			$('#piece-32').css({top: 224, left: 0});
			$('#piece-33').css({top: 224, left: 330});
			$('#piece-34').css({top: 224, left: 220});
			$('#piece-35').css({top: 224, left: 550});
			$('#piece-36').css({top:224, left: 440});
			$('#piece-25').css({top: 280, left: 110});
			$('#piece-26').css({top: 280, left: 0});
			$('#piece-27').css({top: 280, left: 330});
			$('#piece-28').css({top: 280, left: 220});
			$('#piece-29').css({top: 280, left: 550});
			$('#piece-30').css({top: 280, left: 440});
			$('#piece-43').css({top: 336, left: 110});
			$('#piece-44').css({top: 336, left: 0});
			$('#piece-45').css({top: 336, left: 330});
			$('#piece-46').css({top: 336, left: 220});
			$('#piece-47').css({top: 336, left: 550});
			$('#piece-48').css({top: 336, left: 440});
			$('#piece-37').css({top: 392, left: 110});
			$('#piece-38').css({top: 392, left: 0});
			$('#piece-39').css({top: 392, left: 330});
			$('#piece-40').css({top: 392, left: 220});
			$('#piece-41').css({top: 392, left: 550});
			$('#piece-42').css({top: 392, left: 440});
			$('#piece-54').css({top: 448, left: 110});
			$('#piece-50').css({top: 448, left: 0});
			$('#piece-53').css({top: 448, left: 330});
			$('#piece-52').css({top: 448, left: 220});
			$('#piece-51').css({top: 448, left: 550});
			$('#piece-49').css({top: 448, left: 440});
		} else if(shuffle == 4){
			$('#piece-31').css({top: 0, left: 110});
			$('#piece-32').css({top: 0, left: 0});
			$('#piece-49').css({top: 0, left: 330});
			$('#piece-54').css({top: 0, left: 220});
			$('#piece-35').css({top:0, left: 550});
			$('#piece-36').css({top: 0, left: 440});
			$('#piece-25').css({top: 56, left: 110});
			$('#piece-51').css({top: 56, left: 0});
			$('#piece-27').css({top: 56, left: 330});
			$('#piece-28').css({top: 56, left: 220});
			$('#piece-53').css({top: 56, left: 550});
			$('#piece-6').css({top: 56, left: 440});
			$('#piece-19').css({top: 112, left: 110});
			$('#piece-20').css({top: 112, left: 0});
			$('#piece-21').css({top: 112, left: 330});
			$('#piece-22').css({top: 112, left: 220});
			$('#piece-23').css({top: 112, left: 550});
			$('#piece-24').css({top: 112, left: 440});
			$('#piece-13').css({top: 168, left: 110});
			$('#piece-14').css({top: 168, left: 0});
			$('#piece-15').css({top: 168, left: 330});
			$('#piece-16').css({top: 168, left: 220});
			$('#piece-17').css({top: 168, left: 550});
			$('#piece-18').css({top: 168, left: 440});
			$('#piece-7').css({top: 224, left: 110});
			$('#piece-8').css({top: 224, left: 0});
			$('#piece-9').css({top: 224, left: 330});
			$('#piece-10').css({top: 224, left: 220});
			$('#piece-11').css({top: 224, left: 550});
			$('#piece-12').css({top:224, left: 440});
			$('#piece-1').css({top: 280, left: 110});
			$('#piece-2').css({top: 280, left: 0});
			$('#piece-3').css({top: 280, left: 330});
			$('#piece-4').css({top: 280, left: 220});
			$('#piece-5').css({top: 280, left: 550});
			$('#piece-30').css({top: 280, left: 440});
			$('#piece-43').css({top: 336, left: 110});
			$('#piece-50').css({top: 336, left: 0});
			$('#piece-45').css({top: 336, left: 330});
			$('#piece-46').css({top: 336, left: 220});
			$('#piece-47').css({top: 336, left: 550});
			$('#piece-48').css({top: 336, left: 440});
			$('#piece-37').css({top: 392, left: 110});
			$('#piece-52').css({top: 392, left: 0});
			$('#piece-39').css({top: 392, left: 330});
			$('#piece-40').css({top: 392, left: 220});
			$('#piece-41').css({top: 392, left: 550});
			$('#piece-42').css({top: 392, left: 440});
			$('#piece-34').css({top: 448, left: 110});
			$('#piece-44').css({top: 448, left: 0});
			$('#piece-29').css({top: 448, left: 330});
			$('#piece-38').css({top: 448, left: 220});
			$('#piece-26').css({top: 448, left: 550});
			$('#piece-33').css({top: 448, left: 440});
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
					$('#piece-2').css('left') == '110px' && $('#piece-2').css('top') == '0px' &&
					$('#piece-3').css('left') == '220px' && $('#piece-3').css('top') == '0px' &&
					$('#piece-4').css('left') == '330px' && $('#piece-4').css('top') == '0px' &&
					$('#piece-5').css('left') == '440px' && $('#piece-5').css('top') == '0px' &&
					$('#piece-6').css('left') == '550px' && $('#piece-6').css('top') == '0px' &&
					$('#piece-7').css('left') == '0px' && $('#piece-7').css('top') == '56px' && 
					$('#piece-8').css('left') == '110px' && $('#piece-8').css('top') == '56px' &&
					$('#piece-9').css('left') == '220px' && $('#piece-9').css('top') == '56px' &&
					$('#piece-10').css('left') == '330px' && $('#piece-10').css('top') == '56px' &&
					$('#piece-11').css('left') == '440px' && $('#piece-11').css('top') == '56px' &&
					$('#piece-12').css('left') == '550px' && $('#piece-12').css('top') == '56px' &&
					$('#piece-13').css('left') == '0px' && $('#piece-13').css('top') == '112px' &&
					$('#piece-14').css('left') == '110px' && $('#piece-14').css('top') == '112px' &&
					$('#piece-15').css('left') == '220px' && $('#piece-15').css('top') == '112px' &&
					$('#piece-16').css('left') == '330px' && $('#piece-16').css('top') == '112px' && 
					$('#piece-17').css('left') == '440px' && $('#piece-17').css('top') == '112px' &&
					$('#piece-18').css('left') == '550px' && $('#piece-18').css('top') == '112px' &&
					$('#piece-19').css('left') == '0px' && $('#piece-19').css('top') == '168px' &&
					$('#piece-20').css('left') == '110px' && $('#piece-20').css('top') == '168px' &&
					$('#piece-21').css('left') == '220px' && $('#piece-21').css('top') == '168px' &&
					$('#piece-22').css('left') == '330px' && $('#piece-22').css('top') == '168px' &&
					$('#piece-23').css('left') == '440px' && $('#piece-23').css('top') == '168px' &&
					$('#piece-24').css('left') == '550px' && $('#piece-24').css('top') == '168px' &&
					$('#piece-25').css('left') == '0px' && $('#piece-25').css('top') == '224px' &&
					$('#piece-26').css('left') == '110px' && $('#piece-26').css('top') == '224px' && 
					$('#piece-27').css('left') == '220px' && $('#piece-27').css('top') == '224px' &&
					$('#piece-28').css('left') == '330px' && $('#piece-28').css('top') == '224px' &&
					$('#piece-29').css('left') == '440px' && $('#piece-29').css('top') == '224px' &&
					$('#piece-30').css('left') == '550px' && $('#piece-30').css('top') == '224px' &&
					$('#piece-31').css('left') == '0px' && $('#piece-31').css('top') == '280px' &&
					$('#piece-32').css('left') == '110px' && $('#piece-32').css('top') == '280px' && 
					$('#piece-33').css('left') == '220px' && $('#piece-33').css('top') == '280px' &&
					$('#piece-34').css('left') == '330px' && $('#piece-34').css('top') == '280px' &&
					$('#piece-35').css('left') == '440px' && $('#piece-35').css('top') == '280px' &&
					$('#piece-36').css('left') == '550px' && $('#piece-36').css('top') == '280px' &&
					$('#piece-37').css('left') == '0px' && $('#piece-37').css('top') == '336px' &&
					$('#piece-38').css('left') == '110px' && $('#piece-38').css('top') == '336px' &&
					$('#piece-39').css('left') == '220px' && $('#piece-39').css('top') == '336px' &&
					$('#piece-40').css('left') == '330px' && $('#piece-40').css('top') == '336px' &&
					$('#piece-41').css('left') == '440px' && $('#piece-41').css('top') == '336px' && 
					$('#piece-42').css('left') == '550px' && $('#piece-42').css('top') == '336px' &&
					$('#piece-43').css('left') == '0px' && $('#piece-43').css('top') == '392px' &&
					$('#piece-44').css('left') == '110px' && $('#piece-44').css('top') == '392px' &&
					$('#piece-45').css('left') == '220px' && $('#piece-45').css('top') == '392px' &&
					$('#piece-46').css('left') == '330px' && $('#piece-46').css('top') == '392px' &&
					$('#piece-47').css('left') == '440px' && $('#piece-47').css('top') == '392px' &&
					$('#piece-48').css('left') == '550px' && $('#piece-48').css('top') == '392px' &&
					$('#piece-49').css('left') == '0px' && $('#piece-49').css('top') == '448px' &&
					$('#piece-50').css('left') == '110px' && $('#piece-50').css('top') == '448px' &&
					$('#piece-51').css('left') == '220px' && $('#piece-51').css('top') == '448px' &&
					$('#piece-52').css('left') == '330px' && $('#piece-52').css('top') == '448px' &&
					$('#piece-53').css('left') == '440px' && $('#piece-53').css('top') == '448px' &&
					$('#piece-54').css('left') == '550px' && $('#piece-54').css('top') == '448px' 
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