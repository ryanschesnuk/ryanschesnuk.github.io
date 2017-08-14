'use strict';

angular.module("liftTrackerApp")
.controller('exerciseCtrl', function($scope) {

  $scope.enterPress = function(keyEvent) {
    if (keyEvent.which === 13 || keyEvent.keyCode === 13){

      return false;
    } else {
      return true;
    }
  };

  $scope.addExercise = function (){
    let newExercise = {"name": "Exercise Name"};
    $scope.exercises.push(newExercise);
  };

  $scope.deleteExercise = function(exercise, $index) {
    $scope.exercises.splice($index, 1);
  };

  // Pre-populate each day with one exercise upon page load
  $scope.exercises = [
    {"name": "Exercise Name"},
  ];

});
