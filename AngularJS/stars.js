/**
*	provides a rate-via-stars component which writes the selected score into an input element and allows binding to a scope variable
*/

(function () {
	angular.module("awStars", []).directive("awstars", ["$timeout", function ($timeout) {
		return {
			replace : true,

			restrict : "E",

			template : '<div class="starsContainer"><div class="star" id="star1">&#9733;</div><div class="star" id="star2">&#9733;</div><div class="star" id="star3">&#9733;</div><div class="star" id="star4">&#9733;</div><div class="star" id="star5">&#9733;</div></div>',

			link : function ($scope, elem, attrs) {
				var output = angular.element("<input>").attr({
					type : "text",
					name : "stars"
				}).css("display", "none");

				elem.append(output);

				var theModel = elem.attr("data-input-model");

				var stars = elem.children("div");
				stars.on("click", function () {
					var untilIndex = parseInt(angular.element(this).attr("id").substr(4));
					stars.removeClass("starActiveSelected");
					for (var i = 0; i < untilIndex; i++) {
						stars.eq(i).addClass("starActiveSelected");
					}
					$timeout(function () {
						output.val(untilIndex);
						if (theModel) $scope[theModel] = untilIndex;
					});
				});
			}
		};
	}]);

})();
