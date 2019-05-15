
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
			$('#piece-100').css({top: 0, left: 0});
			$('#piece-91').css({top: 0, left: 66});
			$('#piece-99').css({top: 0, left: 132});
			$('#piece-92').css({top: 0, left: 198});
			$('#piece-98').css({top:0, left: 264});
			$('#piece-93').css({top: 0, left: 330});
			$('#piece-97').css({top: 0, left: 396});
			$('#piece-94').css({top: 0, left: 462});
			$('#piece-96').css({top: 0, left: 528});
			$('#piece-95').css({top: 0, left: 594});
			$('#piece-90').css({top: 50, left: 0});
			$('#piece-81').css({top: 50, left: 66});
			$('#piece-89').css({top: 50, left: 132});
			$('#piece-82').css({top: 50, left: 198});
			$('#piece-88').css({top: 50, left: 264});
			$('#piece-83').css({top: 50, left: 330});
			$('#piece-87').css({top: 50, left: 396});
			$('#piece-84').css({top: 50, left: 462});
			$('#piece-86').css({top: 50, left: 528});
			$('#piece-85').css({top: 50, left: 594});
			$('#piece-80').css({top: 100, left: 0});
			$('#piece-71').css({top: 100, left: 66});
			$('#piece-79').css({top: 100, left: 132});
			$('#piece-72').css({top: 100, left: 198});
			$('#piece-78').css({top: 100, left: 264});
			$('#piece-73').css({top: 100, left: 330});
			$('#piece-77').css({top: 100, left: 396});
			$('#piece-74').css({top: 100, left: 462});
			$('#piece-76').css({top:100, left: 528});
			$('#piece-75').css({top: 100, left: 594});
			$('#piece-70').css({top: 150, left: 0});
			$('#piece-61').css({top: 150, left: 66});
			$('#piece-69').css({top: 150, left: 132});
			$('#piece-62').css({top: 150, left: 198});
			$('#piece-68').css({top: 150, left: 264});
			$('#piece-63').css({top: 150, left: 330});
			$('#piece-67').css({top: 150, left: 396});
			$('#piece-64').css({top: 150, left: 462});
			$('#piece-66').css({top: 150, left: 528});
			$('#piece-65').css({top: 150, left: 594});
			$('#piece-60').css({top: 200, left: 0});
			$('#piece-51').css({top: 200, left: 66});
			$('#piece-59').css({top: 200, left: 132});
			$('#piece-52').css({top: 200, left: 198});
			$('#piece-58').css({top: 200, left: 264});
			$('#piece-53').css({top: 200, left: 330});
			$('#piece-57').css({top: 200, left: 396});
			$('#piece-54').css({top: 200, left: 462});
			$('#piece-56').css({top: 200, left: 528});
			$('#piece-55').css({top: 200, left: 594});
			$('#piece-42').css({top: 250, left: 0});
			$('#piece-44').css({top: 250, left: 66});
			$('#piece-46').css({top: 250, left: 132});
			$('#piece-48').css({top: 250, left: 198});
			$('#piece-50').css({top: 250, left: 264});
			$('#piece-49').css({top: 250, left: 330});
			$('#piece-47').css({top: 250, left: 396});
			$('#piece-45').css({top: 250, left: 462});
			$('#piece-43').css({top:250, left: 528});
			$('#piece-41').css({top: 250, left: 594});
			$('#piece-32').css({top: 300, left: 0});
			$('#piece-34').css({top: 300, left: 66});
			$('#piece-36').css({top: 300, left: 132});
			$('#piece-38').css({top: 300, left: 198});
			$('#piece-40').css({top: 300, left: 264});
			$('#piece-39').css({top: 300, left: 330});
			$('#piece-37').css({top: 300, left: 396});
			$('#piece-35').css({top: 300, left: 462});
			$('#piece-33').css({top: 300, left: 528});
			$('#piece-31').css({top: 300, left: 594});
			$('#piece-22').css({top: 350, left: 0});
			$('#piece-24').css({top: 350, left: 66});
			$('#piece-26').css({top: 350, left: 132});
			$('#piece-28').css({top: 350, left: 198});
			$('#piece-30').css({top: 350, left: 264});
			$('#piece-29').css({top: 350, left: 330});
			$('#piece-27').css({top: 350, left: 396});
			$('#piece-25').css({top: 350, left: 462});
			$('#piece-23').css({top: 350, left: 528});
			$('#piece-21').css({top: 350, left: 594});
			$('#piece-12').css({top: 400, left: 0});
			$('#piece-14').css({top: 400, left: 66});
			$('#piece-16').css({top: 400, left: 132});
			$('#piece-18').css({top:400, left: 198});
			$('#piece-20').css({top: 400, left: 264});
			$('#piece-19').css({top: 400, left: 330});
			$('#piece-17').css({top: 400, left: 396});
			$('#piece-15').css({top: 400, left: 462});
			$('#piece-13').css({top: 400, left: 528});
			$('#piece-11').css({top: 400, left: 594});
			$('#piece-2').css({top: 450, left: 0});
			$('#piece-4').css({top: 450, left: 66});
			$('#piece-6').css({top: 450, left: 132});
			$('#piece-8').css({top: 450, left: 198});
			$('#piece-10').css({top: 450, left: 264});
			$('#piece-9').css({top: 450, left: 330});
			$('#piece-7').css({top: 450, left: 396});
			$('#piece-5').css({top: 450, left: 462});
			$('#piece-3').css({top: 450, left: 528});
			$('#piece-1').css({top: 450, left: 594});
		} else if(shuffle == 2){
			$('#piece-1').css({top: 0, left: 0});
			$('#piece-2').css({top: 0, left: 66});
			$('#piece-3').css({top: 0, left: 132});
			$('#piece-4').css({top: 0, left: 198});
			$('#piece-5').css({top:0, left: 264});
			$('#piece-6').css({top: 0, left: 330});
			$('#piece-7').css({top: 0, left: 396});
			$('#piece-8').css({top: 0, left: 462});
			$('#piece-9').css({top: 0, left: 528});
			$('#piece-10').css({top: 0, left: 594});
			$('#piece-11').css({top: 50, left: 0});
			$('#piece-12').css({top: 50, left: 66});
			$('#piece-13').css({top: 50, left: 132});
			$('#piece-14').css({top: 50, left: 198});
			$('#piece-15').css({top: 50, left: 264});
			$('#piece-16').css({top: 50, left: 330});
			$('#piece-17').css({top: 50, left: 396});
			$('#piece-18').css({top: 50, left: 462});
			$('#piece-19').css({top: 50, left: 528});
			$('#piece-20').css({top: 50, left: 594});
			$('#piece-21').css({top: 100, left: 0});
			$('#piece-22').css({top: 100, left: 66});
			$('#piece-23').css({top: 100, left: 132});
			$('#piece-24').css({top: 100, left: 198});
			$('#piece-25').css({top: 100, left: 264});
			$('#piece-26').css({top: 100, left: 330});
			$('#piece-27').css({top: 100, left: 396});
			$('#piece-28').css({top: 100, left: 462});
			$('#piece-29').css({top:100, left: 528});
			$('#piece-30').css({top: 100, left: 594});
			$('#piece-31').css({top: 150, left: 0});
			$('#piece-32').css({top: 150, left: 66});
			$('#piece-33').css({top: 150, left: 132});
			$('#piece-34').css({top: 150, left: 198});
			$('#piece-35').css({top: 150, left: 264});
			$('#piece-36').css({top: 150, left: 330});
			$('#piece-37').css({top: 150, left: 396});
			$('#piece-38').css({top: 150, left: 462});
			$('#piece-39').css({top: 150, left: 528});
			$('#piece-40').css({top: 150, left: 594});
			$('#piece-41').css({top: 200, left: 0});
			$('#piece-42').css({top: 200, left: 66});
			$('#piece-43').css({top: 200, left: 132});
			$('#piece-44').css({top: 200, left: 198});
			$('#piece-45').css({top: 200, left: 264});
			$('#piece-46').css({top: 200, left: 330});
			$('#piece-47').css({top: 200, left: 396});
			$('#piece-48').css({top: 200, left: 462});
			$('#piece-49').css({top: 200, left: 528});
			$('#piece-50').css({top: 200, left: 594});
			$('#piece-51').css({top: 250, left: 0});
			$('#piece-52').css({top: 250, left: 66});
			$('#piece-53').css({top: 250, left: 132});
			$('#piece-54').css({top: 250, left: 198});
			$('#piece-55').css({top: 250, left: 264});
			$('#piece-56').css({top: 250, left: 330});
			$('#piece-57').css({top: 250, left: 396});
			$('#piece-58').css({top: 250, left: 462});
			$('#piece-59').css({top:250, left: 528});
			$('#piece-60').css({top: 250, left: 594});
			$('#piece-61').css({top: 300, left: 0});
			$('#piece-62').css({top: 300, left: 66});
			$('#piece-63').css({top: 300, left: 132});
			$('#piece-64').css({top: 300, left: 198});
			$('#piece-65').css({top: 300, left: 264});
			$('#piece-66').css({top: 300, left: 330});
			$('#piece-67').css({top: 300, left: 396});
			$('#piece-68').css({top: 300, left: 462});
			$('#piece-69').css({top: 300, left: 528});
			$('#piece-70').css({top: 300, left: 594});
			$('#piece-71').css({top: 350, left: 0});
			$('#piece-72').css({top: 350, left: 66});
			$('#piece-73').css({top: 350, left: 132});
			$('#piece-74').css({top: 350, left: 198});
			$('#piece-75').css({top: 350, left: 264});
			$('#piece-76').css({top: 350, left: 330});
			$('#piece-77').css({top: 350, left: 396});
			$('#piece-78').css({top: 350, left: 462});
			$('#piece-79').css({top: 350, left: 528});
			$('#piece-80').css({top: 350, left: 594});
			$('#piece-81').css({top: 400, left: 0});
			$('#piece-82').css({top: 400, left: 66});
			$('#piece-83').css({top: 400, left: 132});
			$('#piece-84').css({top:400, left: 198});
			$('#piece-85').css({top: 400, left: 264});
			$('#piece-86').css({top: 400, left: 330});
			$('#piece-87').css({top: 400, left: 396});
			$('#piece-88').css({top: 400, left: 462});
			$('#piece-89').css({top: 400, left: 528});
			$('#piece-90').css({top: 400, left: 594});
			$('#piece-91').css({top: 450, left: 0});
			$('#piece-92').css({top: 450, left: 66});
			$('#piece-93').css({top: 450, left: 132});
			$('#piece-94').css({top: 450, left: 198});
			$('#piece-95').css({top: 450, left: 264});
			$('#piece-96').css({top: 450, left: 330});
			$('#piece-97').css({top: 450, left: 396});
			$('#piece-98').css({top: 450, left: 462});
			$('#piece-99').css({top: 450, left: 528});
			$('#piece-100').css({top: 450, left: 594});
		} else if(shuffle == 3){
			$('#piece-100').css({top: 0, left: 0});
			$('#piece-91').css({top: 0, left: 66});
			$('#piece-99').css({top: 0, left: 132});
			$('#piece-92').css({top: 0, left: 198});
			$('#piece-98').css({top:0, left: 264});
			$('#piece-93').css({top: 0, left: 330});
			$('#piece-97').css({top: 0, left: 396});
			$('#piece-94').css({top: 0, left: 462});
			$('#piece-96').css({top: 0, left: 528});
			$('#piece-95').css({top: 0, left: 594});
			$('#piece-90').css({top: 50, left: 0});
			$('#piece-81').css({top: 50, left: 66});
			$('#piece-89').css({top: 50, left: 132});
			$('#piece-82').css({top: 50, left: 198});
			$('#piece-88').css({top: 50, left: 264});
			$('#piece-83').css({top: 50, left: 330});
			$('#piece-87').css({top: 50, left: 396});
			$('#piece-84').css({top: 50, left: 462});
			$('#piece-86').css({top: 50, left: 528});
			$('#piece-85').css({top: 50, left: 594});
			$('#piece-80').css({top: 100, left: 0});
			$('#piece-71').css({top: 100, left: 66});
			$('#piece-79').css({top: 100, left: 132});
			$('#piece-72').css({top: 100, left: 198});
			$('#piece-78').css({top: 100, left: 264});
			$('#piece-73').css({top: 100, left: 330});
			$('#piece-77').css({top: 100, left: 396});
			$('#piece-74').css({top: 100, left: 462});
			$('#piece-76').css({top:100, left: 528});
			$('#piece-75').css({top: 100, left: 594});
			$('#piece-70').css({top: 150, left: 0});
			$('#piece-61').css({top: 150, left: 66});
			$('#piece-69').css({top: 150, left: 132});
			$('#piece-62').css({top: 150, left: 198});
			$('#piece-68').css({top: 150, left: 264});
			$('#piece-63').css({top: 150, left: 330});
			$('#piece-67').css({top: 150, left: 396});
			$('#piece-64').css({top: 150, left: 462});
			$('#piece-66').css({top: 150, left: 528});
			$('#piece-65').css({top: 150, left: 594});
			$('#piece-60').css({top: 200, left: 0});
			$('#piece-51').css({top: 200, left: 66});
			$('#piece-59').css({top: 200, left: 132});
			$('#piece-52').css({top: 200, left: 198});
			$('#piece-58').css({top: 200, left: 264});
			$('#piece-53').css({top: 200, left: 330});
			$('#piece-57').css({top: 200, left: 396});
			$('#piece-54').css({top: 200, left: 462});
			$('#piece-56').css({top: 200, left: 528});
			$('#piece-55').css({top: 200, left: 594});
			$('#piece-42').css({top: 250, left: 0});
			$('#piece-44').css({top: 250, left: 66});
			$('#piece-46').css({top: 250, left: 132});
			$('#piece-48').css({top: 250, left: 198});
			$('#piece-50').css({top: 250, left: 264});
			$('#piece-49').css({top: 250, left: 330});
			$('#piece-47').css({top: 250, left: 396});
			$('#piece-45').css({top: 250, left: 462});
			$('#piece-43').css({top:250, left: 528});
			$('#piece-41').css({top: 250, left: 594});
			$('#piece-32').css({top: 300, left: 0});
			$('#piece-34').css({top: 300, left: 66});
			$('#piece-36').css({top: 300, left: 132});
			$('#piece-38').css({top: 300, left: 198});
			$('#piece-40').css({top: 300, left: 264});
			$('#piece-39').css({top: 300, left: 330});
			$('#piece-37').css({top: 300, left: 396});
			$('#piece-35').css({top: 300, left: 462});
			$('#piece-33').css({top: 300, left: 528});
			$('#piece-31').css({top: 300, left: 594});
			$('#piece-22').css({top: 350, left: 0});
			$('#piece-24').css({top: 350, left: 66});
			$('#piece-26').css({top: 350, left: 132});
			$('#piece-28').css({top: 350, left: 198});
			$('#piece-30').css({top: 350, left: 264});
			$('#piece-29').css({top: 350, left: 330});
			$('#piece-27').css({top: 350, left: 396});
			$('#piece-25').css({top: 350, left: 462});
			$('#piece-23').css({top: 350, left: 528});
			$('#piece-21').css({top: 350, left: 594});
			$('#piece-12').css({top: 400, left: 0});
			$('#piece-14').css({top: 400, left: 66});
			$('#piece-16').css({top: 400, left: 132});
			$('#piece-18').css({top:400, left: 198});
			$('#piece-20').css({top: 400, left: 264});
			$('#piece-19').css({top: 400, left: 330});
			$('#piece-17').css({top: 400, left: 396});
			$('#piece-15').css({top: 400, left: 462});
			$('#piece-13').css({top: 400, left: 528});
			$('#piece-11').css({top: 400, left: 594});
			$('#piece-2').css({top: 450, left: 0});
			$('#piece-4').css({top: 450, left: 66});
			$('#piece-6').css({top: 450, left: 132});
			$('#piece-8').css({top: 450, left: 198});
			$('#piece-10').css({top: 450, left: 264});
			$('#piece-9').css({top: 450, left: 330});
			$('#piece-7').css({top: 450, left: 396});
			$('#piece-5').css({top: 450, left: 462});
			$('#piece-3').css({top: 450, left: 528});
			$('#piece-1').css({top: 450, left: 594});
		} else if(shuffle == 4){
			$('#piece-100').css({top: 0, left: 0});
			$('#piece-91').css({top: 0, left: 66});
			$('#piece-99').css({top: 0, left: 132});
			$('#piece-92').css({top: 0, left: 198});
			$('#piece-98').css({top:0, left: 264});
			$('#piece-93').css({top: 0, left: 330});
			$('#piece-97').css({top: 0, left: 396});
			$('#piece-94').css({top: 0, left: 462});
			$('#piece-96').css({top: 0, left: 528});
			$('#piece-95').css({top: 0, left: 594});
			$('#piece-90').css({top: 50, left: 0});
			$('#piece-81').css({top: 50, left: 66});
			$('#piece-89').css({top: 50, left: 132});
			$('#piece-82').css({top: 50, left: 198});
			$('#piece-88').css({top: 50, left: 264});
			$('#piece-83').css({top: 50, left: 330});
			$('#piece-87').css({top: 50, left: 396});
			$('#piece-84').css({top: 50, left: 462});
			$('#piece-86').css({top: 50, left: 528});
			$('#piece-85').css({top: 50, left: 594});
			$('#piece-80').css({top: 100, left: 0});
			$('#piece-71').css({top: 100, left: 66});
			$('#piece-79').css({top: 100, left: 132});
			$('#piece-72').css({top: 100, left: 198});
			$('#piece-78').css({top: 100, left: 264});
			$('#piece-73').css({top: 100, left: 330});
			$('#piece-77').css({top: 100, left: 396});
			$('#piece-74').css({top: 100, left: 462});
			$('#piece-76').css({top:100, left: 528});
			$('#piece-75').css({top: 100, left: 594});
			$('#piece-70').css({top: 150, left: 0});
			$('#piece-61').css({top: 150, left: 66});
			$('#piece-69').css({top: 150, left: 132});
			$('#piece-62').css({top: 150, left: 198});
			$('#piece-68').css({top: 150, left: 264});
			$('#piece-63').css({top: 150, left: 330});
			$('#piece-67').css({top: 150, left: 396});
			$('#piece-64').css({top: 150, left: 462});
			$('#piece-66').css({top: 150, left: 528});
			$('#piece-65').css({top: 150, left: 594});
			$('#piece-60').css({top: 200, left: 0});
			$('#piece-51').css({top: 200, left: 66});
			$('#piece-59').css({top: 200, left: 132});
			$('#piece-52').css({top: 200, left: 198});
			$('#piece-58').css({top: 200, left: 264});
			$('#piece-53').css({top: 200, left: 330});
			$('#piece-57').css({top: 200, left: 396});
			$('#piece-54').css({top: 200, left: 462});
			$('#piece-56').css({top: 200, left: 528});
			$('#piece-55').css({top: 200, left: 594});
			$('#piece-42').css({top: 250, left: 0});
			$('#piece-44').css({top: 250, left: 66});
			$('#piece-46').css({top: 250, left: 132});
			$('#piece-48').css({top: 250, left: 198});
			$('#piece-50').css({top: 250, left: 264});
			$('#piece-49').css({top: 250, left: 330});
			$('#piece-47').css({top: 250, left: 396});
			$('#piece-45').css({top: 250, left: 462});
			$('#piece-43').css({top:250, left: 528});
			$('#piece-41').css({top: 250, left: 594});
			$('#piece-32').css({top: 300, left: 0});
			$('#piece-34').css({top: 300, left: 66});
			$('#piece-36').css({top: 300, left: 132});
			$('#piece-38').css({top: 300, left: 198});
			$('#piece-40').css({top: 300, left: 264});
			$('#piece-39').css({top: 300, left: 330});
			$('#piece-37').css({top: 300, left: 396});
			$('#piece-35').css({top: 300, left: 462});
			$('#piece-33').css({top: 300, left: 528});
			$('#piece-31').css({top: 300, left: 594});
			$('#piece-22').css({top: 350, left: 0});
			$('#piece-24').css({top: 350, left: 66});
			$('#piece-26').css({top: 350, left: 132});
			$('#piece-28').css({top: 350, left: 198});
			$('#piece-30').css({top: 350, left: 264});
			$('#piece-29').css({top: 350, left: 330});
			$('#piece-27').css({top: 350, left: 396});
			$('#piece-25').css({top: 350, left: 462});
			$('#piece-23').css({top: 350, left: 528});
			$('#piece-21').css({top: 350, left: 594});
			$('#piece-12').css({top: 400, left: 0});
			$('#piece-14').css({top: 400, left: 66});
			$('#piece-16').css({top: 400, left: 132});
			$('#piece-18').css({top:400, left: 198});
			$('#piece-20').css({top: 400, left: 264});
			$('#piece-19').css({top: 400, left: 330});
			$('#piece-17').css({top: 400, left: 396});
			$('#piece-15').css({top: 400, left: 462});
			$('#piece-13').css({top: 400, left: 528});
			$('#piece-11').css({top: 400, left: 594});
			$('#piece-2').css({top: 450, left: 0});
			$('#piece-4').css({top: 450, left: 66});
			$('#piece-6').css({top: 450, left: 132});
			$('#piece-8').css({top: 450, left: 198});
			$('#piece-10').css({top: 450, left: 264});
			$('#piece-9').css({top: 450, left: 330});
			$('#piece-7').css({top: 450, left: 396});
			$('#piece-5').css({top: 450, left: 462});
			$('#piece-3').css({top: 450, left: 528});
			$('#piece-1').css({top: 450, left: 594});
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
					$('#piece-2').css('left') == '66px' && $('#piece-2').css('top') == '0px' &&
					$('#piece-3').css('left') == '132px' && $('#piece-3').css('top') == '0px' &&
					$('#piece-4').css('left') == '198px' && $('#piece-4').css('top') == '0px' &&
					$('#piece-5').css('left') == '264px' && $('#piece-5').css('top') == '0px' &&
					$('#piece-6').css('left') == '330px' && $('#piece-6').css('top') == '0px' &&
					$('#piece-7').css('left') == '396px' && $('#piece-7').css('top') == '0px' && 
					$('#piece-8').css('left') == '462px' && $('#piece-8').css('top') == '0px' &&
					$('#piece-9').css('left') == '528px' && $('#piece-9').css('top') == '0px' &&
					$('#piece-10').css('left') == '594px' && $('#piece-10').css('top') == '0px' &&
					$('#piece-11').css('left') == '0px' && $('#piece-11').css('top') == '50px' &&
					$('#piece-12').css('left') == '66px' && $('#piece-12').css('top') == '50px' &&
					$('#piece-13').css('left') == '132px' && $('#piece-13').css('top') == '50px' &&
					$('#piece-14').css('left') == '198px' && $('#piece-14').css('top') == '50px' &&
					$('#piece-15').css('left') == '264px' && $('#piece-15').css('top') == '50px' &&
					$('#piece-16').css('left') == '330px' && $('#piece-16').css('top') == '50px' && 
					$('#piece-17').css('left') == '396px' && $('#piece-17').css('top') == '50px' &&
					$('#piece-18').css('left') == '462px' && $('#piece-18').css('top') == '50px' &&
					$('#piece-19').css('left') == '528px' && $('#piece-19').css('top') == '50px' &&
					$('#piece-20').css('left') == '594px' && $('#piece-20').css('top') == '50px' &&
					$('#piece-21').css('left') == '0px' && $('#piece-21').css('top') == '100px' &&
					$('#piece-22').css('left') == '66px' && $('#piece-22').css('top') == '100px' &&
					$('#piece-23').css('left') == '132px' && $('#piece-23').css('top') == '100px' &&
					$('#piece-24').css('left') == '198px' && $('#piece-24').css('top') == '100px' &&
					$('#piece-25').css('left') == '264px' && $('#piece-25').css('top') == '100px' &&
					$('#piece-26').css('left') == '330px' && $('#piece-26').css('top') == '100px' && 
					$('#piece-27').css('left') == '396px' && $('#piece-27').css('top') == '100px' &&
					$('#piece-28').css('left') == '462px' && $('#piece-28').css('top') == '100px' &&
					$('#piece-29').css('left') == '528px' && $('#piece-29').css('top') == '100px' &&
					$('#piece-30').css('left') == '594px' && $('#piece-30').css('top') == '100px' &&
					$('#piece-31').css('left') == '0px' && $('#piece-31').css('top') == '150px' &&
					$('#piece-32').css('left') == '66px' && $('#piece-32').css('top') == '150px' && 
					$('#piece-33').css('left') == '132px' && $('#piece-33').css('top') == '150px' &&
					$('#piece-34').css('left') == '198px' && $('#piece-34').css('top') == '150px' &&
					$('#piece-35').css('left') == '264px' && $('#piece-35').css('top') == '150px' &&
					$('#piece-36').css('left') == '330px' && $('#piece-36').css('top') == '150px' &&
					$('#piece-37').css('left') == '396px' && $('#piece-37').css('top') == '150px' &&
					$('#piece-38').css('left') == '462px' && $('#piece-38').css('top') == '150px' &&
					$('#piece-39').css('left') == '528px' && $('#piece-39').css('top') == '150px' &&
					$('#piece-40').css('left') == '594px' && $('#piece-40').css('top') == '150px' &&
					$('#piece-41').css('left') == '0px' && $('#piece-41').css('top') == '200px' && 
					$('#piece-42').css('left') == '66px' && $('#piece-42').css('top') == '200px' &&
					$('#piece-43').css('left') == '132px' && $('#piece-43').css('top') == '200px' &&
					$('#piece-44').css('left') == '198px' && $('#piece-44').css('top') == '200px' &&
					$('#piece-45').css('left') == '264px' && $('#piece-45').css('top') == '200px' &&
					$('#piece-46').css('left') == '330px' && $('#piece-46').css('top') == '200px' &&
					$('#piece-47').css('left') == '396px' && $('#piece-47').css('top') == '200px' &&
					$('#piece-48').css('left') == '462px' && $('#piece-48').css('top') == '200px' &&
					$('#piece-49').css('left') == '528px' && $('#piece-49').css('top') == '200px' &&
					$('#piece-50').css('left') == '594px' && $('#piece-50').css('top') == '200px' &&
					$('#piece-51').css('left') == '0px' && $('#piece-51').css('top') == '250px' &&
					$('#piece-52').css('left') == '66px' && $('#piece-52').css('top') == '250px' &&
					$('#piece-53').css('left') == '132px' && $('#piece-53').css('top') == '250px' &&
					$('#piece-54').css('left') == '198px' && $('#piece-54').css('top') == '250px' &&
					$('#piece-55').css('left') == '264px' && $('#piece-55').css('top') == '250px' && 
					$('#piece-56').css('left') == '330px' && $('#piece-56').css('top') == '250px' &&
					$('#piece-57').css('left') == '396px' && $('#piece-57').css('top') == '250px' &&
					$('#piece-58').css('left') == '462px' && $('#piece-58').css('top') == '250px' &&
					$('#piece-59').css('left') == '528px' && $('#piece-59').css('top') == '250px' &&
					$('#piece-60').css('left') == '594px' && $('#piece-60').css('top') == '250px' &&
					$('#piece-61').css('left') == '0px' && $('#piece-61').css('top') == '300px' && 
					$('#piece-62').css('left') == '66px' && $('#piece-62').css('top') == '300px' &&
					$('#piece-63').css('left') == '132px' && $('#piece-63').css('top') == '300px' &&
					$('#piece-64').css('left') == '198px' && $('#piece-64').css('top') == '300px' &&
					$('#piece-65').css('left') == '264px' && $('#piece-65').css('top') == '300px' &&
					$('#piece-66').css('left') == '330px' && $('#piece-66').css('top') == '300px' &&
					$('#piece-67').css('left') == '396px' && $('#piece-67').css('top') == '300px' &&
					$('#piece-68').css('left') == '462px' && $('#piece-68').css('top') == '300px' &&
					$('#piece-69').css('left') == '528px' && $('#piece-69').css('top') == '300px' &&
					$('#piece-70').css('left') == '594px' && $('#piece-70').css('top') == '300px' && 
					$('#piece-71').css('left') == '0px' && $('#piece-71').css('top') == '350px' &&
					$('#piece-72').css('left') == '66px' && $('#piece-72').css('top') == '350px' &&
					$('#piece-73').css('left') == '132px' && $('#piece-73').css('top') == '350px' &&
					$('#piece-74').css('left') == '198px' && $('#piece-74').css('top') == '350px' &&
					$('#piece-75').css('left') == '264px' && $('#piece-75').css('top') == '350px' &&
					$('#piece-76').css('left') == '330px' && $('#piece-76').css('top') == '350px' &&
					$('#piece-77').css('left') == '396px' && $('#piece-77').css('top') == '350px' &&
					$('#piece-78').css('left') == '462px' && $('#piece-78').css('top') == '350px' &&
					$('#piece-79').css('left') == '528px' && $('#piece-79').css('top') == '350px' &&
					$('#piece-80').css('left') == '594px' && $('#piece-80').css('top') == '350px' && 
					$('#piece-81').css('left') == '0px' && $('#piece-81').css('top') == '400px' &&
					$('#piece-82').css('left') == '66px' && $('#piece-82').css('top') == '400px' &&
					$('#piece-83').css('left') == '132px' && $('#piece-83').css('top') == '400px' &&
					$('#piece-84').css('left') == '198px' && $('#piece-84').css('top') == '400px' &&
					$('#piece-85').css('left') == '264px' && $('#piece-85').css('top') == '400px' &&
					$('#piece-86').css('left') == '330px' && $('#piece-86').css('top') == '400px' && 
					$('#piece-87').css('left') == '394px' && $('#piece-87').css('top') == '400px' &&
					$('#piece-88').css('left') == '462px' && $('#piece-88').css('top') == '400px' &&
					$('#piece-89').css('left') == '528px' && $('#piece-89').css('top') == '400px' &&
					$('#piece-90').css('left') == '594px' && $('#piece-90').css('top') == '400px' &&
					$('#piece-91').css('left') == '0px' && $('#piece-91').css('top') == '450px' &&
					$('#piece-92').css('left') == '66px' && $('#piece-92').css('top') == '450px' &&
					$('#piece-93').css('left') == '132px' && $('#piece-93').css('top') == '450px' &&
					$('#piece-94').css('left') == '198px' && $('#piece-94').css('top') == '450px' &&
					$('#piece-95').css('left') == '264px' && $('#piece-95').css('top') == '450px' && 
					$('#piece-96').css('left') == '330px' && $('#piece-96').css('top') == '450px' &&
					$('#piece-97').css('left') == '396px' && $('#piece-97').css('top') == '450px' &&
					$('#piece-98').css('left') == '462px' && $('#piece-98').css('top') == '450px' &&
					$('#piece-99').css('left') == '528px' && $('#piece-99').css('top') == '450px' &&
					$('#piece-100').css('left') == '594px' && $('#piece-100').css('top') == '450px' 
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