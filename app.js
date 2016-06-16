angular.module('videoGames', ['videoGames.controllers', 'videoGames.factories', 'ngRoute','firebase'])

.config(function($routeProvider) {
	var resolveGames = {
		games: function (Games) {
			return Games.fetch();
		}
	};

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
		.when('/games', {
			controller: 'listController as list',
			templateUrl: 'views/games.html'
		})
		.when('/game: gameId', {
			templateUrl: 'views/game.html'
		})
		.otherwise({
			redirecTo: '/'
		});
		 // Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyCYf24HUySojyf2ZBQ_BQlJuJ_P8VfxSHk",
		    authDomain: "prograinteractiva.firebaseapp.com",
		    databaseURL: "https://prograinteractiva.firebaseio.com",
		    storageBucket: "prograinteractiva.appspot.com",
		  };
		  firebase.initializeApp(config);
});