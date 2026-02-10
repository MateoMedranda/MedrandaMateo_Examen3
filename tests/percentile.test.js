const Calculadora = require('./../src/utils/percentile');

const op = new Calculadora();

test('Medranda Calcular percentile(0,[1,2,3]) → 1.00', () =>{
    let items = [1,2,3];
    expect(op.percentile(0, items)).toBe(1);
});

test('Medranda Calcular percentile(100,[1,2,3]) → 3.00', () =>{
    let items = [1,2,3];
    expect(op.percentile(100, items)).toBe(3);
}); 

test('Medranda Calcular percentile(50,[1,2,3,4]) → 2.00', () =>{
    let items = [1,2,3,4];
    expect(op.percentile(50, items)).toBe(2);
});

// test de error en el rango de p
test('Medranda Calcular percentile(120,[1,2,3]) → Error', () =>{
    let items = [1,2,3];
    expect(() => op.percentile(120, items)).toThrow(RangeError);
});

// test de error en el tipo de dato de p
test('Medranda Calcular percentile("fifty",[1,2,3]) → Error', () =>{
    let items = [1,2,3];
    expect(() => op.percentile("fifty", items)).toThrow(TypeError);
});
