'use strict';

angular
  .module('testApp', [
    'ui.chart'
  ])
  .controller('PortfoliolistCtrl', function ($scope) {
    $scope.x = [[3,7,9,1,5,3,8,2,5]];
  })
;

