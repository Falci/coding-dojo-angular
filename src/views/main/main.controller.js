angular.module('app.views.Main', [])
  .controller('MainCtrl', MainCtrl)
  .run(route);

function MainCtrl () {
}

function route (RouterHelper){

  RouterHelper.configureStates([
    {
      state: 'app',
      config: {
        url: "/dojo",
        templateUrl: "views/main/main.html",
        controller: 'MainCtrl',
        controllerAs: 'vm'
      }
    }
  ]);
}