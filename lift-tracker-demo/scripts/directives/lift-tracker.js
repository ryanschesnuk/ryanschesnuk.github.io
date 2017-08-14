angular.module("liftTrackerApp")
.directive('liftTracker', function() {
  return {
    templateUrl: 'templates/lift-tracker.html',
    controller: "mainCtrl",
    replace: true
  };
});
