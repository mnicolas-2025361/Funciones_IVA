export interface Producto{
    nombre: string;
    precioUnitario: number;
    cantidad: number;
}

export interface Resultado{
    subtotal: number;
    iva: number;
    total: number;
}