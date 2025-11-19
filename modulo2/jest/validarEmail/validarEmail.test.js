const {validarEmail}=require('/validarEmail');


describe('toContar Matcher', ()=>{
    test('Happy Path: que deuvela false',()=>{
        const reponse =validarEmail('fran.n.d');
        expect (response).toBe(false);

    });
    test('Happy Path: que vuelva el true',()=>{
        const response=validarEmail('fran.n.d');
        expect(response).toBe(true);

    });
    test('Sad path: elemntos invalidos',
        ()=>{
            const response=validarEmail(3455);
            expect(response).toThrow('email debe ser string');
        });
  
});