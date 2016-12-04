angular.module('AngularTop10SongsApp', [
    'ngRoute',
    'ngModal',
    'spotify'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'MainCtrl'
      })      
}).constant('_',
    window._
);;