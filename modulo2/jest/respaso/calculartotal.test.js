const {calcularTotalCafeteria} = require('./calculartotal.js')

describe ('calcularTotalCafeteria', ()=>{
    test ('Happy: calcular correctamente', () =>{
    const items=[
    {
        nombre:  "Laptop",
        precioUnitario: 500, 
        cantidad : 3 ,/*clave y valor */
    }, 
    {
        nombre:  "Monitor ",
        precioUnitario: 700, 
        cantidad : 1,/*clave y valor */
    }, 
 ]
    const resultado = calcularTotal(itemas, 15);
    expect(resultado).toBe(2415);
    });
});

test('Sad Path Valores de ingreso errados', () => {

        const items=[
    {
        nombre:  "Laptop",
        precioUnitario: 500, 
        cantidad : 3 ,/*clave y valor */
    }, 
    {
        nombre:  "Monitor ",
        precioUnitario: 700, 
        cantidad : 1,/*clave y valor */
    }, 
 ]
    expect(() => calcularTotalCafeteria(0, 12))
    .toThrow ('array invalido');
    expect (() => calcularTotalCafeteria (itemas, "ee"))
    .toThrow ('ivaPorcentaje no valido');
});