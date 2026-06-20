# Calculadora de Factura (Subtotal, IVA y Total)

Programa en TypeScript que calcula el subtotal, el monto de IVA y el total de una lista de productos, ejecutado desde la consola con Node.js.

## Descripción

El proyecto recibe una lista de productos (nombre, precio unitario y cantidad) y una tasa de IVA, y devuelve:

- **Subtotal**: suma de todos los productos (precio unitario × cantidad)
- **IVA**: subtotal multiplicado por la tasa de impuesto
- **Total**: subtotal + IVA

El código está dividido en módulos según su responsabilidad: tipos, lógica de cálculo, datos de entrada y punto de ejecución.

## Estructura del proyecto

```
proyecto/
├── src/
│   ├── types.ts          # Interfaces que definen la forma de los datos
│   ├── calculadora.ts     # Función que realiza el cálculo de la factura
│   ├── datos.ts           # Lista de productos y tasa de IVA de ejemplo
│   └── index.ts           # Punto de entrada: ejecuta el cálculo y muestra resultados
├── package.json
├── tsconfig.json
└── README.md
```

## Requisitos

- [Node.js](https://nodejs.org/) instalado (v16 o superior recomendado)
- npm (incluido con Node.js)

## Instalación

Clona el repositorio e instala las dependencias de desarrollo:

```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
npm install
```

Si el proyecto no incluye `node_modules`, instala TypeScript y ts-node manualmente:

```bash
npm install -D typescript ts-node
```

## Ejecución

```bash
npx ts-node src/index.ts
```

### Salida esperada

```
---Factura---
Maseca: $40.10
Arina: $15.00
Subtotal: $55.10
IVA: $6.61
Total: $61.71
```

## Documentación de los módulos

### `types.ts`

Define las interfaces que describen la forma de los datos usados en todo el proyecto. No contiene lógica, solo contratos de tipos.

| Interfaz | Propiedades | Descripción |
|---|---|---|
| `Producto` | `nombre: string`, `precioUnitario: number`, `cantidad: number` | Representa un producto individual de la factura |
| `Resultado` | `subtotal: number`, `iva: number`, `total: number` | Representa el resultado final del cálculo de la factura |

### `calculadora.ts`

Contiene la lógica matemática del programa, aislada de los datos y de la presentación en pantalla.

**`calcularFactura(productos, tasaIva)`**

Calcula el subtotal, el IVA y el total a partir de una lista de productos y una tasa de impuesto.

- **Parámetros:**
  - `productos: Producto[]` — arreglo de productos a facturar
  - `tasaIva: number` — tasa de IVA en formato decimal (ej. `0.12` equivale a 12%)
- **Retorna:** `Resultado` — objeto con `subtotal`, `iva` y `total`
- **Lógica interna:**
  1. Suma `precioUnitario * cantidad` de cada producto usando `reduce` para obtener el `subtotal`
  2. Calcula `iva` multiplicando el `subtotal` por `tasaIva`
  3. Calcula `total` sumando `subtotal + iva`

Ejemplo de uso:

```typescript
import { calcularFactura } from "./calculadora";

const resultado = calcularFactura(
  [{ nombre: "Maseca", precioUnitario: 20.05, cantidad: 2 }],
  0.12
);

console.log(resultado); // { subtotal: 40.1, iva: 4.812, total: 44.912 }
```

### `datos.ts`

Contiene los datos de entrada de ejemplo, separados de la lógica para que puedan modificarse sin tocar el resto del código.

| Constante | Tipo | Descripción |
|---|---|---|
| `productos` | `Producto[]` | Lista de productos de ejemplo (Maseca y Arina) |
| `TASA_IVA` | `number` | Tasa de IVA aplicada, `0.12` (12%, tasa vigente en Guatemala) |

### `index.ts`

Punto de entrada del programa. Importa los datos y la función de cálculo, ejecuta `calcularFactura` y muestra el detalle de la factura en la consola, incluyendo el desglose por producto, el subtotal, el IVA y el total.

## Notas técnicas

- La tasa de IVA se maneja como número decimal (`0.12` en vez de `12%`) porque así se puede usar directamente en una multiplicación.
- Los montos se formatean con `.toFixed(2)` para mostrar siempre dos decimales, como corresponde a una cantidad de dinero.
- La separación en módulos (`types`, `calculadora`, `datos`, `index`) sigue el principio de una responsabilidad por archivo: los tipos no tienen lógica, la calculadora no conoce el origen de los datos, y `index.ts` es el único archivo que conecta todo y produce la salida visible.

## Autor

Pedro Armas

## Actividad académica

Proyecto desarrollado como parte de la Actividad 2 del curso, con el objetivo de implementar funciones para calcular IVA, subtotal y total, organizando el código en módulos separados y documentando el uso de cada función.
