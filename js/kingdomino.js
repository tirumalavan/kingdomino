var app = angular.module('kingdomino',[]);
app.controller ('scoreCalculator',function ($scope){
	$scope.wheatTiles = [0,0,0,0];
	$scope.wheatCrowns = [0,0,0,0];
	$scope.wheatScore = [0,0,0,0];
	$scope.grassTiles = [0,0,0,0];
	$scope.grassCrowns = [0,0,0,0];
	$scope.grassScore = [0,0,0,0];
	$scope.forestTiles = [0,0,0,0];
	$scope.forestCrowns = [0,0,0,0];
	$scope.forestScore = [0,0,0,0];
	$scope.waterTiles = [0,0,0,0];
	$scope.waterCrowns = [0,0,0,0];
	$scope.waterScore = [0,0,0,0];
	$scope.desertTiles = [0,0,0,0];
	$scope.desertCrowns = [0,0,0,0];
	$scope.desertScore = [0,0,0,0];
	$scope.mineTiles = [0,0,0,0];
	$scope.mineCrowns = [0,0,0,0];
	$scope.mineScore = [0,0,0,0];
	$scope.totalScore = [0,0,0,0];
    }
);
