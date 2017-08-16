'use strict';

angular.module("liftTrackerApp")
.controller('mainCtrl', function($scope) {

  const currentDate = new Date();
  const today = new Date();

  // Print day name
  function printDateName(day, month, date, year) {
    let dayLabels = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
    let monthLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];


    return {
        "dayName": dayLabels[day],
        "monthName": monthLabels[month],
        "date": date,
        "year": year,
        "isToday": month === today.getMonth() && date === today.getDate() && year === today.getFullYear()
      };
  }

  function createCurrentWeek(date) {
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Account for Leap year
    if ((date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0) || date.getFullYear() % 400 == 0){
      daysInMonths[1] = 29;
    }

    let dayPosition = date.getDay();
    let monthNumber = date.getMonth();
    let dayNumber = date.getDate();
    let year = date.getFullYear();



    let weekArray = [];

    // Generate First Part of Week
    for (var i=dayPosition; i>=0; i--){

      if (dayNumber < 1) {
        monthNumber--;

        if (monthNumber < 0) {
          monthNumber = 11;
          year--;
        }

        dayNumber = daysInMonths[monthNumber];
      }

      weekArray.unshift(printDateName(i, monthNumber, dayNumber, year));
      // if (monthNumber === today.getMonth() && dayNumber === today.getDate() && year === today.getFullYear()){
      //   $scope.isToday = true;
      // } else {
      //   $scope.isToday = false;
      // }
      dayNumber--;
    }

    // Generate Second Part of Week
    if ( dayPosition < 6) {
      monthNumber = date.getMonth();
      dayNumber = date.getDate() + 1;
      year = date.getFullYear();

      for (var j=dayPosition+1; j<=6; j++) {
        if (dayNumber > daysInMonths[monthNumber]) {
          monthNumber++;
          dayNumber = 1;

          if (monthNumber > 11) {
            monthNumber = 0;
            year++;
          }
        }
        weekArray.push(printDateName(j, monthNumber, dayNumber, year));
        dayNumber++;
      }
    }
    return weekArray;
}

$scope.days = createCurrentWeek(currentDate);


});
