angular.module('videoGames.factories', [])

// old way of firebase reference
//.value('ref', 'https://prograinteractiva.firebaseio.com/');

.factory('$games', function ($firebaseArray) {
	var games = {};

	games.list = function () {
		//me conecto a firebase como cliente
		var ref = firebase.database().ref().child('games');

		var list = firebaseArray(ref);
		return list.$loaded();
	};

	games.add = function () {
		
	};

	return games;
})