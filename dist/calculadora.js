export function calcularFactura(productos, tasaIva) {
    const subtotal = productos.reduce((acumulado, producto) => acumulado + producto.precioUnitario * producto.cantidad, 0);
    const iva = subtotal * tasaIva;
    const total = subtotal + iva;
    return { subtotal, iva, total };
}
;
//# sourceMappingURL=calculadora.js.map