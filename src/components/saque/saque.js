angular.module('app.components.Saque', [])
  .provider('Saque', SaqueProvider);

function SaqueProvider () {
  this.$get = Saque;

  function Saque (){    

    return {
      calcular: calcular
    };

    function calcular (valor) {
      var notas = [{valor: 100,quantidade: 2}, {valor: 50,quantidade: 2},
                   {valor: 20,quantidade: 2}, {valor: 10,quantidade: 2}];

      console.log(typeof valor, valor)

      var retorno = [];

      if (isNaN(valor)) {return false;}

      notas.forEach(function (nota){
        while(nota.valor <= valor && nota.quantidade){
          retorno.push(nota.valor);
          valor -= nota.valor;
          nota.quantidade--;
        }
      })

      if(valor > 0){return false;}

      return retorno;
    }
  }
};