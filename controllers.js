angular.module('videoGames.controllers', ['videoGames.factories'])

.controller('listController', function ($location, $games) {
	var list = this;

	$games.list().then(function(games){
		list.games = games;
	}, function(error){
		console.log(error);
		alert(error.message);
	});
	list.add = function () {
		$games.add(list.game).then(function() {
			alert('success!');
		}, function(error){
			alert('error');
			console.log(error);
		});
	};
});