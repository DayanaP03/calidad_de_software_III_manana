const {calcularPropina, 
    cuenta, 
    porcentajePropina }= require('/calcularPropina');


describe('toContain Matcher', ()=>{
    test('Happy path: Elementos adentro del array', ()=>{
        const calcularPropina= obtenerPropina();
        expect(calcularPropina).toContain('resultado');
        });




describe('toContain Matcher', ()=>{
    test('Happy path: Elementos adentro del array', ()=>{
        const frutas= obtenerFrutas();
        expect(frutas).toContain('pera');
        });