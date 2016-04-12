/**
*	provides a rate-via-stars component which writes the selected score into an input element.
*/

(function ($) {
	$(function () {
		$(".star").click(function () {
			var starIndex = parseInt($(this).attr("id").substr(4));
			selectStars(starIndex);
		});

		var _i = $("<input>").attr({
			type : "text",
			name : "stars"
		}).hide().appendTo(".starsContainer");

		function selectStars (untilIndex) {
			$(".star").removeClass("starActiveSelected");
			for (var i = 0; i <= untilIndex; i++) {
				$("#star" + i).addClass("starActiveSelected");
			}
			_i.val(untilIndex);
		}
	});
}(jQuery));
