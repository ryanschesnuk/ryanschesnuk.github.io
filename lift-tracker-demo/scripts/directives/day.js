angular.module("liftTrackerApp")
.directive('day', function() {
  return {
    templateUrl: 'templates/day.html',
    replace: true
  };
});
