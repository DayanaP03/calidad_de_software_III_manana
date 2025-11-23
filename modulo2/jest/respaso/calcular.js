function calcularPropina (cuenta, porcentajePropina  ){
    if (typeof cuenta !== 'number ' || cuenta <0


    ){
        throw new TypeError ("cuenta invalida  ")
    }

    {
        throw new TypeError ("porcentaje invalido ")
    }
    let resultado= cuenta * porcentajePropina;
 
}

module.exports={calcularPropina}



