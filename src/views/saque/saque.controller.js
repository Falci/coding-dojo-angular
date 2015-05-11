angular.module('app.views.Saque', ['app.components.Saque'])
  .controller('SaqueCtrl', SaqueCtrl)
  .run(route);

function SaqueCtrl ($scope, Saque) {
  var vm = this;

  vm.valor = 100;

  $scope.$watch('vm.valor', function (novo, antigo) {
    vm.notas = Saque.calcular(novo);    
  });
}

function route (RouterHelper) {

  RouterHelper.configureStates([
    {
      state: 'saque',
      config: {
        url: "/saque",
        templateUrl: "views/saque/saque.html",
        controller: 'SaqueCtrl',
        controllerAs: 'vm'
      }
    }
  ]);
}