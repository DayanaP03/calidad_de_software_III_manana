
const {actualizarEdad } = require('./actualizarEdad');


describe('Actulizar edad',()=>{
    test('Happy path:30->',()=>{
        const response =actualizarEdad(
            {
                nombre:'Juan',
                edad:39,
            }, 60
        )
        expect(response.edad).toBE(60);

    });

    test('Sad path: persona / edad  invalido ',
        ()=>{
            expect(()=>actualizarEdad(
                null, 10
            )).toThrow('persona invalida');
        expect(()=>actualizarEdad({},-1))        
            .toThrow('edad  invalido ');
    });
});                                                                                                                                        