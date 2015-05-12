describe("Saque ::", function() {

  var Saque;

  beforeEach(module('app.components.Saque'));
  beforeEach(inject(function (_Saque_) {
    Saque = _Saque_;
  }));


  it('deveria retornar duas notas se o valor for 30', function() {

    var notas = Saque.calcular(30);	
    expect(notas.length).to.be.equals(2);
    expect(notas[0]).to.be.equals(20);
    expect(notas[1]).to.be.equals(10);
  });

  it('deveria retornar 50, 20 e 10 para 80', function() {

    var notas = Saque.calcular(80);	
    expect(notas.length).to.be.equals(3);
  });

  it('Deveria retornar falso caso o valor seja invalido', function() {

    var notas = Saque.calcular(85);	
    expect(notas).to.be.false;
  });

  it('deveria retornar 100 e 100 para 200', function() {

    var notas = Saque.calcular(200);	
    expect(notas.length).to.be.equals(2);
    expect(notas[0]).to.be.equals(100);
    expect(notas[1]).to.be.equals(100);
  });

  it('deveria retornar false caso informado alfanuméricos', function() {

    var notas = Saque.calcular("A");	
    expect(notas).to.be.false;
  });

  it('deveria retornar no máximo duas notas de 100 para 300', function() {

    var notas = Saque.calcular(300);	
    expect(notas.length).to.be.equals(4);
    expect(notas[0]).to.be.equals(100);
    expect(notas[1]).to.be.equals(100);
    expect(notas[2]).to.be.equals(50);
    expect(notas[3]).to.be.equals(50);
  });
});