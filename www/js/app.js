
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'webcam'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.castme', {
    url: '/castme',
    views: {
      'menuContent': {
        templateUrl: 'templates/castme.html',
        controller: 'CastMeCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
    })
    .state('app.trailerslist', {
      url: '/trailerslist',
      views: {
        'menuContent': {
          templateUrl: 'templates/trailerslist.html',
          controller: 'TrailersListCtrl'
        }
      }
    })

  .state('app.trailer', {
    url: '/trailerslist/:trailerId',
    views: {
      'menuContent': {
        templateUrl: 'templates/trailer.html',
        controller: 'TrailerCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/app/trailerslist');
  $urlRouterProvider.otherwise('/app/castme');
});
