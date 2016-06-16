angular.module('videoGames.controllers', ['videoGames.factories'])

.controller('listController', function ($location, $games) {
	var list = this;

	$games.list().then(function(snapshot){
		list.games = snapshot.val();
	}, function(error){
		console.log(error);
		alert(error.message);
	});
});