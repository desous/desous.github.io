$(document).ready(function () {
	$(".bannerbutton").mouseover(function () {
		$(this).fadeTo(175, 0.5);
		});
	$(".bannerbutton").mouseleave(function () {
		$(this).fadeTo("fast", 1);
		});
	$(".box").mouseover(function () {
		$(this).fadeTo("fast", 0.7);
	});
	$(".box").mouseleave (function () {
		$(this).fadeTo("fast", 1);
	});
});