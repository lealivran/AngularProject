(function() {
  'use strict';

  function MoviePopular(MovieService) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: './src/app/movie/template.html',
      scope: {},
      controllerAs: 'vm',
      bindToController: true,
      /*jshint unused:false*/
      controller: function($log) {
        var vm = this;
        console.log('toto');

        MovieService.getMovie().then(function(data){
          console.log(data.data.results);
          vm.topmovies = data.data.results;
        });
      },
      link: function(scope, elm, attrs) {
      }
    };
  }

  angular.module('moviePopularDirective', ['services.movie'])
    .directive('moviePopular', MoviePopular);
})();
