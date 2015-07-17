'use strict';

angular.module('a24HourDoorAmericaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reports', {
        url: '/reports',
        templateUrl: 'app/reports/reports.html'
      });
  });