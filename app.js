angular.module('videoGames', ['videoGames.controllers', 'videoGames.services', 'ngRoute','firebase'])

.value('fbRef', 'https://prograinteractiva.firebaseio.com/');

.config(function($routeProvider) {
	var resolveGames = {
		games: function (Games) {
			return Games.fetch();
		}
	};

	$routeProvider
		.when('/', {
			controller: 'GameListController as gameList',
			templateUrl: 'views/list.html',
			resolve: resolveGames
		})
		.when('/games', {
			controller: 'EditGameController as editGame',
			templateUrl: 'views/details.html',
			resolve: resolveGames
		})
		.when('/details', {
			controller: 'NewGameController as editGame',
			templateUrl: 'views/details.html',
			resolve: resolveGames
		})
		.otherwise({
			redirecTo: '/'
		});
});