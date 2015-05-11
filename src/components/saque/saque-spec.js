describe("Saque ::", function() {

  var Saque;

  beforeEach(module('app.components.Saque'));
  beforeEach(inject(function (_Saque_) {
    Saque = _Saque_;
  }));

  it('deveria..', function() {

    var notas = Saque.calcular(1);
    expect(notas.length).to.be.equals(2);

  });
});