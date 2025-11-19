const {sumObjects}=require('/sumObjects');

describe('Suma de Objetos', ()=>{
    test('Happy path: Suma De objetos correctamente', ()=>{
        const objetos1= {x:2, y:3};
        const objetos2= {x:1, y:4};
        const response = sumObjects(objetos1, objetos2);
        expect (response).toStrictEqual({x:3, y:7} );
         
    });
    test ('Sad patj: Falla si falta una propiedad o cambia el tipo',
        ()=>{
            const objetos1={x:2, y:3};
            
            const objetos2 ={x:2, y:4 , z:0};
            const response = sumObjects(objetos1, objetos2);
            expect(response).not.toStrictEqual({x:3, y:7, z:0});
        });

});