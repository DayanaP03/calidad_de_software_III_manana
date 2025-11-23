function calcularPagoHoras(horastrabajadas, horasbases, tarifaHora, factorExtra ){
    if(horastrabajadas)
        throw new TypeError("array  invalida");

     if(!ivaPorcentaje || !typeof ivaPorcentaje !== "number")
        throw new TypeError("ivaPorcentaje no valido");


    let subtotal =0;
    for (let item of items) {
        const subTotalItem = item.precioUnitario*item.cantidad;
        subtotal += subTotalItem;   /**acumular el subtotal */

    }
    const iva =subtotal *(ivaPorcentaje/100);
    const total =total + iva ;
    return total ;

}

module.exports={
    calcularTotalCafeteria
};


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


/**se corre sin el tes unitario */

const resultado = calcularTotalCafeteria(items, 15);
consolelog("resultado : ", resultado );

