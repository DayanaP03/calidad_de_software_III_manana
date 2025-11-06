const{maximo}=require('./maximo');

describe('Maximo',()=>{
    test('Happy Path: [4,5,6,7,8]  mayor a 8',()=>{
        expect(maximo([4,5,6,7,8])).toBe(8);

    });

    test('Happy Path: [-5,-1]  mayor a -1',()=>{
        expect(maximo([-5,-1])).toBe(-1);
    });

    test('Sad Path: arreglo invalido',()=>{
        expect(()=>maximo([])).toThrow('arreglo invalido');
        expect(()=>maximo('edificio')).toThrow('arreglo invalido');
    });

});

