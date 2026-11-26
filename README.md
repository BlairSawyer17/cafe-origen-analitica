# Café Origen

## Descripción

Café Origen es un proyecto de análisis de datos desarrollado
en JavaScript con Node.js.

Su objetivo es procesar un historial de ventas representado
mediante un arreglo de objetos y generar indicadores básicos
del negocio para facilitar la consulta y el análisis de su
actividad comercial.

El proyecto permite identificar el comportamiento de las ventas,
los productos más vendidos y las ciudades que generan mayores
ingresos.

## Tecnologías utilizadas

- JavaScript
- Node.js
- Git
- GitHub
- Visual Studio Code

## Estructura del proyecto

    cafe-origen-analitica/
    │
    ├── src/
    │   ├── datos.js
    │   ├── analitica.js
    │   ├── explorar.js
    │   ├── verificar.js
    │   └── reporte.js
    │
    ├── bitacora.md
    └── README.md

## Requisitos

- Node.js en una versión LTS.
- Git.
- Terminal integrada o consola.

## ¿Cómo ejecutar el proyecto?

1. Clonar el repositorio:

       git clone [https://github.com/BlairSawyer17/cafe-origen-analitica.git](https://github.com/BlairSawyer17/cafe-origen-analitica.git)

2. Ingresar a la carpeta:

       cd cafe-origen-analitica

3. Explorar los datos:

       node src/explorar.js

4. Verificar los indicadores:

       node src/verificar.js

5. Ejecutar el reporte de negocio:

       node src/reporte.js

No es necesario instalar dependencias externas para ejecutar
la versión actual del proyecto.

## Indicadores y preguntas que responde

### Resumen general

- ¿Cuánto dinero se vendió en total?
- ¿Cuántas unidades se vendieron?
- ¿Cuál fue la venta de mayor valor?
- ¿Cuál es el ticket promedio por compra?

### Ventas por ciudad

- ¿Cuánto dinero generó cada ciudad?
- ¿Cuál es el comportamiento de las ventas según su ubicación?
- ¿Existen nombres de ciudades duplicados por diferencias
  de escritura?

### Análisis de productos

- ¿Cuántas unidades se vendieron de cada producto?
- ¿Cuál fue el producto más vendido?
- ¿Cuáles son los tres productos que más dinero generaron?

### Análisis por fecha

- ¿Cuánto se vendió durante una fecha específica?
- ¿Qué ocurre cuando una fecha no tiene registros de ventas?
- ¿Cuál fue el ticket promedio de un día determinado?

## Tratamiento de datos

El proyecto contempla algunos problemas de calidad de los datos:

- Diferencias entre mayúsculas y minúsculas en los nombres
  de las ciudades.
- Espacios adicionales en las cadenas de texto.
- Registros con cantidad igual a cero.
- Ausencia de un catálogo de clientes para validar
  los identificadores.

Para evitar duplicaciones, las ciudades se normalizan
durante el procesamiento mediante `trim()` y `toLowerCase()`.

Las ventas con cantidades no positivas no se consideran
para los indicadores de ventas efectivas.

## Documentación

En el archivo `bitacora.md` se encuentra la documentación
del proceso de desarrollo, incluyendo:

- Diccionario de datos.
- Casos borde identificados.
- Pseudocódigo de los indicadores.
- Tablas de trazas.
- Pruebas realizadas.
- Registro de depuración.

## Versión

**Café Origen Analítica v0.1**

Primera versión del motor de análisis de ventas,
con indicadores generales, agrupaciones, rankings
y reporte de negocio por consola.