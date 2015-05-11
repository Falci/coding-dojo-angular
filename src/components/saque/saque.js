angular.module('app.components.Saque', [])
  .provider('Saque', SaqueProvider);

function SaqueProvider () {
  this.$get = Saque;

  function Saque (){
    return {
      calcular: calcular
    };

    function calcular (valor) {
      return [valor];
    }
  }
};