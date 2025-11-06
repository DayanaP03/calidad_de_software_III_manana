function estadoNota(nota){
    if(typeof nota !=='number' /* typeof una validacion que no sea vacio que tenga menos de 10 y mayopr a 0 */
        || Number.isNaN (nota)
        || nota >10
        || nota < 0
        ) {
        throw new TypeError ("nota invalida");
        }
    if (nota >=7) return 'Aprobado';
    if (nota <=4) return 'Supletorio';
    return ' Reprobado'

}
module.exports={estadoNota} 