import {productos, TASA_IVA} from "./datos.js";
import {calcularFactura} from "./calculadora.js";

const resultado = calcularFactura(productos, TASA_IVA);
console.log("---Factura---");
productos.forEach((p)=>{
    console.log(`${p.nombre}: $${(p.precioUnitario * p.cantidad).toFixed(2)}`);
});

console.log(`Subtotal: $${resultado.subtotal.toFixed(2)}`);
console.log(`IVA: $${resultado.iva.toFixed(2)}`);
console.log(`Total: $${resultado.total.toFixed(2)}`);