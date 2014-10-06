$( document ).ready(function() {
	var play = true;
	$("body").keyup(function(e){
		console.log(e.keyCode);
		if(e.keyCode == 13 && play) {
			$('.active video').get(0).play();
		} else {
			$('.active video').get(0).pause();
		}
		play = !play;
	});
});