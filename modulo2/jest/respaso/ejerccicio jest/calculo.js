function calcularPropina(cuenta, porcentajePropina) {
  if (typeof cuenta !== "number" || cuenta <= 0) {
    throw new TypeError("cuenta inválida");
  }
  if (
    typeof porcentajePropina !== "number" ||
    porcentajePropina <0 ||
    porcentajePropina >100
  ) {
    throw new TypeError("Porcentaje de propina inválido");
  }
  const propina = (cuenta * porcentajePropina) / 100;
  const totalPagar = cuenta + propina;
  return {
    cuenta : cuenta,
    propina : propina,
    totalPagar: totalPagar,
  };
}
module.exports ={ calcularPropina};

console.log(calcularPropina(10,15))