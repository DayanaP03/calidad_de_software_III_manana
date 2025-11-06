const { crearEstudiante } = require('./crearEstudiante');

describe('Crear estudiante', () => {
    test('Happy Path: crear estudiante válido', () => {
        expect(crearEstudiante('maria', 17)).toEqual({
            nombre: 'maria',
            edad: 17
        });
    });

    test('Sad Path: nombre / edad inválidos', () => {
        expect(() => crearEstudiante('', 20)).toThrow('nombre invalido');
        expect(() => crearEstudiante('Ana', -1)).toThrow('edad invalido');
    });
});
