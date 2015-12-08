(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.moviePopular', {
        url: '/topmovies',
        views: {
          '@': {
            template: '<movie-popular></movie-popular>',
          }
        }
      });
  }

  angular.module('movie-popular', ['moviePopularDirective'])
    .config(config)
})();
