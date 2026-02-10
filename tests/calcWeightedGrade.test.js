const NotasPonderadas = require('./../src/utils/calcWeightedGrade');

const op = new NotasPonderadas();

test('Medranda Calcular calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]) → 86.00', () =>{
    let items = [{score:80,weight:0.4},{score:90,weight:0.6}];
    expect(op.calcWeightedGrade(items)).toBe("86.00");
});

test('Medranda Calcular calcWeightedGrade([{score:70,weight:0.5},{score:85,weight:0.5}]) → 77.50', () =>{
    let items = [{score:70,weight:0.5},{score:85,weight:0.5}];
    expect(op.calcWeightedGrade(items)).toBe("77.50");
});

// Test de error en el rango de los pesos
test('Medranda Calcular calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:1.2}]) → Error', () =>{
    let items = [{score:80,weight:0.4},{score:90,weight:1.2}];
    expect(() => op.calcWeightedGrade(items)).toThrow(RangeError);
});

// Test de error en el rango de las notas
test('Medranda Calcular calcWeightedGrade([{score:120,weight:0.4},{score:90,weight:0.6}]) → Error', () =>{
    let items = [{score:120,weight:0.4},{score:90,weight:0.6}];
    expect(() => op.calcWeightedGrade(items)).toThrow(RangeError);
});

// Test de error en el tipo de dato de las notas
test('Medranda Calcular calcWeightedGrade([{score:"eighty",weight:0.4},{score:90,weight:0.6}]) → Error', () =>{
    let items = [{score:"eighty",weight:0.4},{score:90,weight:0.6}];
    expect(() => op.calcWeightedGrade(items)).toThrow(TypeError);
});
