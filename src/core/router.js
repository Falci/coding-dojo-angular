angular.module('app.core.Router', ['ui.router'])
  .config(config)
  .provider('RouterHelper', routerHelperProvider);

function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/dojo");
}

function routerHelperProvider ($locationProvider, $stateProvider) {
  // $locationProvider.html5Mode(true);
  this.$get = RouterHelper;

  function RouterHelper () {
    var service = {
      configureStates: configureStates
    };

    return service;

    function configureStates(states) {
      states.forEach(function(state) {
        $stateProvider.state(state.state, state.config);
      });
    }
  }
  
}