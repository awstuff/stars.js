# stars.js

Provides a star-rating utility for jQuery and AngularJS. 

Depending on which version you plan to use, include the corresponding `stars.js` and `stars.css`. The jQuery version requires jQuery, the AngularJS one requires AngularJS.

## Usage
### jQuery version
Add the following HTML:
```
<div class="starsContainer">
	<div class="star" id="star1">&#9733;</div>
	<div class="star" id="star2">&#9733;</div>
	<div class="star" id="star3">&#9733;</div>
	<div class="star" id="star4">&#9733;</div>
	<div class="star" id="star5">&#9733;</div>
</div>
```
The value is being written into an `input` element that is dynamically added to `starsContainer`.

### AngularJS version
The following code uses stars.js in order to store the selected value in the surrounding controller's `$scope` variable `test`:
```
<script type="text/javascript">
	var app = angular.module("app", ["awStars"]);

	app.controller("demoController", ["$scope", function ($scope) {
		$scope.test;
	}]);
</script>

<form ng-app="app">
	<div ng-controller="demoController">
		<awstars data-input-model="test"></awstars>
		{{test}}
	</div>
</form>
```
