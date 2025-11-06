
function mayoresDeEdad(edades) {
    if (!Array.isArray(edades) || edades.length === 0) {
        throw new TypeError("arreglo invalido");
    }

    return edades.filter(edad => typeof edad === 'number' && edad >= 18);
}

module.exports = { mayoresDeEdad };
