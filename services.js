angular.module('videoGames.services', [])

.service('fbRef', function (fbURL) {
	return new Firebase(fbURL);
})

.service('Games', function ($firebase, fbRef, gameListValue) {
	var games = this;

	this.fetch = function (){
		
	}
})