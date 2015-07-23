'use strict';

angular.module('a24HourDoorAmericaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_invoice', {
        url: '/new_invoice',
        templateUrl: 'app/new_invoice/new_invoice.html'
      });
  });