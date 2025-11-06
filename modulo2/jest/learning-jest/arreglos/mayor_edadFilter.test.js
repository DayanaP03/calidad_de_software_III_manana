const { mayor_edadFilter } = require('./mayor_edadFilter');

describe('Mayor de Edad con Filter', () => {
    test('Happy Path: [15,18,26,28] mayores de edad [18,26,28]', () => {
        expect(mayor_edadFilter([15,18,26,28])).toEqual([18,26,28]);
    });

    test('Happy Path: [10,12,17] mayores []', () => {
        expect(mayor_edadFilter([10,12,17])).toEqual([]);
    });

    test('Sad Path: edades invalidas (no arreglo)', () => {
        expect(() => mayor_edadFilter('arreglo')).toThrow('arreglo invalido');
    });

    test('Sad Path: arreglo vacío', () => {
        expect(() => mayor_edadFilter([])).toThrow('arreglo invalido');
    });
});
