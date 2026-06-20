import type {Producto, Resultado} from './types';

export function calcularFactura(productos: Producto[], tasaIva: number): Resultado{
    const subtotal = productos.reduce(
        (acumulado, producto) => acumulado +producto.precioUnitario * producto.cantidad, 0
    );

    const iva = subtotal * tasaIva;
    const total = subtotal + iva;

    return {subtotal, iva, total};
};