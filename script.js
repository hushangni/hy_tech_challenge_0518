$(document).ready( function() {
	// Hamburger open close toggle top nav
	$('.hamburger-toggle').on('click', function() {
	    $(this).toggleClass('x-toggle');
	    $('nav').toggleClass('res-menu');
	});

	// Happy subscribe sumit message
	$('.submit').on('click touchstart', function() {
		alert(`Thank you for subscribing to our newsletter!
		\n (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
		\n Fun things await your inbox!`);
	});
});

