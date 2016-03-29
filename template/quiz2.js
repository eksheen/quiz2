(function($){

$.ajaxSetup({
    async: false
});
	var data = $.getJSON("http://www.mattbowytz.com/simple_api.json?data=all", function (json) {
	console.log(json);
	});
$.ajaxSetup({
    async: true
});

	var keys = JSON.parse(data.responseText);
	var quizData = keys.data.interests;
	var addData = keys.data.programming;

	for(var i = 0 ; i < addData.length ; i++) {
		quizData.push(addData[i]);
	}
	$getTitle = $('.getTitle');
	$keepIt = $('.keepIt');
	var quizDataLength = quizData.length
	var cookieStr;

	$getTitle.click('getTitle', function() {
		var butt = $('#button').val();
		var rand = Math.floor(Math.random() * quizDataLength) + 0; 
		var printStr = quizData[rand];
		cookieStr = printStr;
		var keepItButton = $('#button1').val();
		if(butt === 'Get Title'){
			$(".getTitle").append('<br>'+'<div class=text>'+printStr).css({"font-size": "200%"})+'</div>';
			$(".getTitle").append('<div class ="keepIt" id=title1><input type="submit" id="button1" class="color2" value ="Keep It"/></div>');
			$(".keepIt").appendTo($(".content"));
			$("#button").val("Change It");
		}
		else if(butt === "Change It") {
			$(".text").replaceWith('<div class=text>'+printStr).css({"font-size": "200%"})+'</div>'+'<br>';
		}
	});	

		$keepIt.click('keepIt', function() {
			document.cookie=cookieStr;
		});

	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouseover');
	$click     = $('.click');
	$submit    = $('.submit');
	$timeout   = $('.timeout');

	$timeout.hide();

	$mouseover.on('mouseover', function() {
		var $this = $(this);
		$this.html('Scrooge McDuck!');
		$this.height($(this).height());
	});

	$click.click('click', function() {
		var $this = $(this);
		$this.html('Peace Out!');
		$this.fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		//console.log("made it here");
		if ($(this).find('input[type="text"]').val() !== '') {
				$submit.find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$submit.append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});
		$(document).on('ready', function() {
		setTimeout(function() {
			$timeout.fadeIn('slow');
		}, 1000);
	});


})(jQuery);