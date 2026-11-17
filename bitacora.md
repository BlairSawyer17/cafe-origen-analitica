## Diccionario de datos

    | Campo | Tipo de Dato | Descripción |
    | :--- | :--- | :--- |
    | ID | Identificador | Identificador único de la venta |
    | Fecha | Fecha | Fecha de la realización del pedido con AAAA/MM/DD |
    | Cliente | Identificador | Identificación única del cliente que realizó el pedido|
    | Producto | Texto | Producto que compró el cliente |
    | Ciudad | Texto | Ciudad desde la que el pedido se realiza |
    | Cantidad | Numérico | Cantidad pedida del producto comprado |
    | Precio | Numérico | Valor a pagar por unidad del producto |

## Casos borde detectados

### 1. Nombres de las ciudades
    - *Problema:* En la venta con el "id: 5", la ciudad está escrita como "medellín", en lugar de "Medellín" como en las otras ventas.
    - *Riesgo:* JavaScript diferencia mayúsculas y minúsculas por el código ASCII por lo que puede haber algún error al utilizar algún método de arreglo y aparecer como ciudades diferentes.
    - *Decisión:* Normalizar las ciudades con primera mayúscula y el resto en minúscula, o pasarlas completamente a minúsculas.

### 2. Cantidad igual a cero
    - *Problema:* En la venta con el "id: 8", la cantidad de producto aparece en 0, por lo que no tiene sentido.
    - *Riesgo:* No es una venta efectiva y no hay clave que nos especifique el estado de la venta(si fue cancelada, pendiente o completada), por lo que o nos falta información o es un error.
    - *Decisión:* Marcar como pendiente a revisar por si fue un error de digitación, venta cancelada o pedido erroneo.

### 3. Sin información de IDClientes
    - *Problema:* Los clientes están representados mediante códigos como "C01", "C02" y "C08", pero no existe un catálogo de clientes que permita verificar si todos los códigos corresponden a clientes registrados.
    - *Riesgo:* No es posible confirmar si los identificadores son válidos o si algún código fue ingresado incorrectamente.
    - *Decisión:* Mantener los identificadores actuales y solicitar o construir un catálogo de clientes para validar su existencia y unicidad.