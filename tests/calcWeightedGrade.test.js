const NotasPonderadas = require('./../src/utils/calcWeightedGrade');

const op = new NotasPonderadas();

test('Medranda Calcular calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]) → 86.00', () =>{
    let items = [{score:80,weight:0.4},{score:90,weight:0.6}];
    expect(op.calcWeightedGrade(items)).toBe("86.00");
});

