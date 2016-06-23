angular.module('videoGames.factories', [])

// old way of firebase reference
//.value('ref', 'https://prograinteractiva.firebaseio.com/');

.factory('$games', function ($firebaseArray) {
	var games = {};
	var ref = firebase.database().ref().child('games');

	games.list = function () {
		//me conecto a firebase como cliente
		var list = firebaseArray(ref);
		return list.$loaded();
	};

	games.add = function (game) {
		var list = firebaseArray(ref);
		return list.$add(game)
	};

	return games;
})