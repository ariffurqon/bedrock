angular.module('bedrock', [

])

.controller('MainCtrl', function($scope){
	$scope.categories = [
	          {"id": 0, "name": "Fashion"},
	          {"id": 1, "name": "Health"},
	          {"id": 2, "name": "News & Politic"},
	          {"id": 3, "name": "Pop Culture"},
	          {"id": 4, "name": "Travel"}
	      ];

	$scope.bookmarks = [
	          {"id": 0, "title": "Condé Nast Traveler", "url": "http://www.cntraveler.com/", "category": "Travel" },
	          {"id": 1, "title": "Luisaviaroma", "url": "http://www.Luisaviaroma.com", "category": "Fashion" },
	          {"id": 2, "title": "Just Jared", "url": "http://justjared.com/", "category": "Pop Culture" },
	          {"id": 3, "title": "The Huffington Post", "url": "http://www.huffingtonpost.com/", "category": "News & Politic" },
	          {"id": 4, "title": "The Cut", "url": "http://nymag.com/thecut/", "category": "Fashion" },
	          {"id": 5, "title": "Goop", "url": "http://goop.com/", "category": "Health" },
	          {"id": 6, "title": "Darkland", "url": "http://www.darklandsberlin.com/site/", "category": "Fashion" },
	          {"id": 7, "title": "Dr. Frank Lipman", "url": "http://www.drfranklipman.com", "category": "Health" },
	          {"id": 8, "title": "Livestrong", "url": "http://www.Livestrong.com", "category": "Health" }
	      ];

	$scope.currentCategory = null;

	function setCurrentCategory(category) {
		$scope.currentCategory = category;
	}
 
	function isCurrentCategory(category) {
		return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	}

	$scope.setCurrentCategory = setCurrentCategory;
	$scope.isCurrentCategory = isCurrentCategory;
});
