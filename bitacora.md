## Diccionario de datos

| Campo | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| ID | Entero | Identificador único de la venta |
| Fecha | Fecha | Fecha de realización del pedido (AAAA-MM-DD) |
| Cliente | Texto | Identificador único del cliente |
| Producto | Texto | Nombre del producto comprado |
| Ciudad | Texto | Ciudad desde la que se realiza el pedido |
| Cantidad | Entero | Número de unidades solicitadas |
| Precio | Numérico | Valor monetario por unidad del producto |

## Casos borde detectados

### 1. Nombres de las ciudades
- **Problema:** En la venta con el "id: 5", la ciudad está escrita como "medellín", en lugar de "Medellín" como en las otras ventas.
- **Riesgo:** JavaScript diferencia mayúsculas y minúsculas por lo que puede haber algún error al utilizar algún método de arreglo y aparecer como ciudades diferentes.
- **Decisión:** Normalizar las ciudades con primera mayúscula y el resto en minúscula, o pasarlas completamente a minúsculas.

### 2. Cantidad igual a cero
- **Problema:** En la venta con el "id: 8", la cantidad de producto aparece en 0, por lo que no tiene sentido.
- **Riesgo:** No es una venta efectiva y no hay clave que nos especifique el estado de la venta(si fue cancelada, pendiente o completada), por lo que o nos falta información o es un error.
- **Decisión:** Marcar como pendiente a revisar por si fue un error de digitación, venta cancelada o pedido erroneo.

### 3. Sin información de IDClientes
- **Problema:** Los clientes están representados mediante códigos como "C01", "C02" y "C08", pero no existe un catálogo de clientes que permita verificar si todos los códigos corresponden a clientes registrados.
- **Riesgo:** No es posible confirmar si los identificadores son válidos o si algún código fue ingresado incorrectamente.
- **Decisión:** Mantener los identificadores actuales y solicitar o construir un catálogo de clientes para validar su existencia y unicidad.

## Plan de indicadores en pseudocódigo

### ¿Cuánto se vendió?

    Definir total Como Real

    total <- 0

    Para Cada precio De ventas
        Si precio > 0 Entonces
            total += precio
        FinSi
    FinPara

    Imprimir "El total de ventas es: $" + total

### ¿Cuántas unidades salieron?

    Definir totalUni Como Entero

    totalUni <- 0

    Para Cada cantidad De ventas
        Si cantidad > 0 Entonces
            totalUni += cantidad
        FinSi
    FinPara

    Imprimir "Las cantidades vendidas fueron: " + totalUni

### ¿Venta más grande?

    Definir valorVenta, ventaMax Como Real

    ventaMax <- 0
    
    Para i <- 0 Hasta (longitud de ventas - 1) Con Paso 1 Hacer
        valorVenta <- (precio de venta en posición i) ** (cantidad de venta en posición i)

        Si valorVenta > ventaMax Entonces 
            ventaMax <- valorVenta
        FinSi
    FinPara

    Imprimir "La venta más grande fue de: $" + ventaMax

### ¿Promedio por venta?

Definir promedioVentas Como Real

promedioVentas <- total / (longitud de ventas)

Imprimir "El promedio de venta es de: " + promedioVentas

Nota: total es una variable tomada del primer plan.

# Pruebas

## Pruebas con diferentes entradas

Se realizaron pruebas utilizando tres escenarios:

1. El arreglo completo con los 12 registros.
2. Un arreglo con un único registro, correspondiente a la
   primera venta de la muestra.
3. Un arreglo vacío, sin registros.

Los resultados esperados son:

| Función | Arreglo completo | Un registro | Arreglo vacío |
| :--- | ---: | ---: | ---: |
| totalVendido() | 985000 | 84000 | 0 |
| unidadesVendidas() | 21 | 2 | 0 |
| ventaMayor() | Registro ID 10 | Registro ID 1 | null |
| ticketPromedio() | 89545.45 | 84000 | 0 |
| ventasPorCiudad("Medellín") | 356000 | 84000 | 0 |

## Casos especiales

- valorVenta(ventas[0]): devuelve 84000.
- valorVenta(null): devuelve 0, con la protección implementada.
- ventaMayor([ventas[7]]): devuelve null porque la cantidad es cero.

## Comportamiento con arreglos vacíos

| Función | Resultado esperado | Justificación |
| :--- | :--- | :--- |
| totalVendido() | 0 | No hay valores que acumular. |
| unidadesVendidas() | 0 | No existen unidades vendidas. |
| ventaMayor() | null | No existe un registro que pueda seleccionarse. |
| ticketPromedio() | 0 | No hay ventas válidas para calcular un promedio. |
| ventasPorCiudad() | 0 | No existen ventas para la ciudad indicada. |

## Tabla de trazas

### 1. Traza del total vendido

Se recorre el arreglo completo y se calcula el valor de cada venta
multiplicando su precio por su cantidad.

Solo se acumulan los registros cuya cantidad sea mayor que cero.

| ID | Precio | Cantidad | Valor de venta | Total acumulado |
| ---: | ---: | ---: | ---: | ---: |
| 1 | 42000 | 2 | 84000 | 84000 |
| 2 | 26000 | 1 | 26000 | 110000 |
| 3 | 95000 | 1 | 95000 | 205000 |
| 4 | 42000 | 1 | 42000 | 247000 |
| 5 | 45000 | 3 | 135000 | 382000 |
| 6 | 26000 | 2 | 52000 | 434000 |
| 7 | 120000 | 1 | 120000 | 554000 |
| 8 | 42000 | 0 | 0 | 554000 |
| 9 | 45000 | 2 | 90000 | 644000 |
| 10 | 42000 | 4 | 168000 | 812000 |
| 11 | 95000 | 1 | 95000 | 907000 |
| 12 | 26000 | 3 | 78000 | 985000 |

**Resultado:** El total vendido es de $985000.

### 2. Traza de ventas por ciudad

Se consulta la ciudad Medellín. Para realizar la comparación
se normalizan las cadenas mediante la eliminación de espacios
sobrantes y la conversión a minúsculas.

Se acumula el valor de las ventas que coinciden con la ciudad
buscada y tienen una cantidad mayor que cero.

| ID | Ciudad original | ¿Coincide? | Valor agregado | Total acumulado |
| ---: | :--- | :---: | ---: | ---: |
| 1 | Medellín | Sí | 84000 | 84000 |
| 2 | Bogotá | No | 0 | 84000 |
| 3 | Cali | No | 0 | 84000 |
| 4 | Medellín | Sí | 42000 | 126000 |
| 5 | medellín | Sí | 135000 | 261000 |
| 6 | Bogotá | No | 0 | 261000 |
| 7 | Bogotá | No | 0 | 261000 |
| 8 | Cali | No | 0 | 261000 |
| 9 | Cali | No | 0 | 261000 |
| 10 | Pereira | No | 0 | 261000 |
| 11 | Medellín | Sí | 95000 | 356000 |
| 12 | Bogotá | No | 0 | 356000 |

**Resultado:** El total vendido en Medellín es de $356000.

## Comparación de resultados

Las trazas manuales permiten comprobar que los cálculos realizados
durante el recorrido del arreglo coinciden con los resultados
obtenidos mediante las funciones implementadas en JavaScript.

| Indicador | Resultado manual | Resultado del programa |
| :--- | ---: | ---: |
| Total vendido | 985000 | 985000 |
| Ventas en Medellín | 356000 | 356000 |

# Del Ciclo al Método

## 1. Versiones con métodos de arreglos

### totalVendidoM(ventas)

- **¿Qué recorro?** El arreglo completo de ventas.
- **¿Qué filtro?** Las ventas cuya cantidad sea mayor que cero, utilizando **filter()**.
- **¿Qué transformo?** Cada registro se transforma en su valor monetario mediante **map()** y la función **valorVenta()**.
- **¿Qué acumulo?** El dinero generado por cada venta, utilizando **reduce()** con un valor inicial de 0.
- **¿Cómo agrupo?** No se realizan agrupaciones; se obtiene un único valor numérico correspondiente al total vendido.

### unidadesVendidasM(ventas)

- **¿Qué recorro?** El arreglo de ventas.
- **¿Qué filtro?** Las ventas que tienen una cantidad mayor que cero.
- **¿Qué transformo?** Cada objeto se transforma en su cantidad de unidades.
- **¿Qué acumulo?** La suma de todas las unidades vendidas mediante **reduce()**.
- **¿Cómo agrupo?** No se realizan agrupaciones; se obtiene un único total de unidades.

### ventasPorCiudadM(ventas, ciudad)

- **¿Qué recorro?** El arreglo completo de ventas.
- **¿Qué filtro?** Las ventas cuya ciudad coincida con la ciudad solicitada y cuya cantidad sea mayor que cero.
- **¿Qué transformo?** Los registros seleccionados se transforman en sus respectivos valores monetarios.
- **¿Qué acumulo?** El dinero generado por las ventas que coinciden con la ciudad buscada.
- **¿Cómo agrupo?** No se crean grupos; se obtiene el total vendido de una ciudad específica.

La comparación de ciudades se realiza normalizando las cadenas mediante
**trim()** y **toLowerCase()**, evitando diferencias por espacios y mayúsculas.

## 2. Funciones de agrupación

### totalPorCiudad(ventas)

- **¿Qué recorro?** Todos los registros del arreglo de ventas.
- **¿Qué filtro?** Las ventas cuya cantidad sea mayor que cero.
- **¿Qué transformo?** El nombre de cada ciudad se normaliza para evitar duplicados por diferencias de escritura.
- **¿Qué acumulo?** El valor monetario de cada venta.
- **¿Cómo agrupo?** Mediante un objeto que utiliza el nombre de la ciudad como clave y el total vendido como valor.

### unidadesPorProducto(ventas)

- **¿Qué recorro?** Todos los registros del arreglo de ventas.
- **¿Qué filtro?** Las ventas cuya cantidad sea mayor que cero.
- **¿Qué transformo?** Cada registro se relaciona con su producto y su cantidad.
- **¿Qué acumulo?** Las unidades vendidas de cada producto.
- **¿Cómo agrupo?** Mediante un objeto que utiliza el nombre del producto como clave y la cantidad acumulada como valor.

## 3. Funciones de ranking

### topProductosPorValor(ventas, k)

- **¿Qué recorro?** Todos los registros de ventas.
- **¿Qué filtro?** Las ventas cuya cantidad sea mayor que cero.
- **¿Qué transformo?** Los registros se convierten en valores monetarios mediante **valorVenta()**.
- **¿Qué acumulo?** El dinero generado por cada producto.
- **¿Cómo agrupo?** Mediante un objeto que utiliza cada producto como clave y el dinero acumulado como valor.

Posteriormente, se utiliza **Object.entries()** para convertir el objeto
en un arreglo de pares producto-valor.

Se crea una copia del arreglo mediante el operador de propagación (**...**),
se ordena con **sort()** de mayor a menor y se utiliza **slice()** para
obtener los primeros k productos.

## 4. Resultados obtenidos

### Total vendido por ciudad

| Ciudad | Total vendido |
| :--- | ---: |
| Medellín | $356000 |
| Bogotá | $276000 |
| Cali | $185000 |
| Pereira | $168000 |

Se obtuvieron cuatro ciudades diferentes gracias a la normalización
de sus nombres, evitando grupos duplicados.

### Unidades vendidas por producto

| Producto | Unidades |
| :--- | ---: |
| Origen Huila 500 g | 7 |
| Origen Nariño 250 g | 6 |
| Prensa francesa | 2 |
| Origen Sierra 500 g | 5 |
| Molino manual | 1 |

### Top 3 productos por valor generado

| Posición | Producto | Valor generado |
| ---: | :--- | ---: |
| 1 | Origen Huila 500 g | $294000 |
| 2 | Origen Sierra 500 g | $225000 |
| 3 | Prensa francesa | $190000 |

## 5. Verificación de resultados

Se compararon las versiones tradicionales y las versiones con métodos
de arreglos utilizando los mismos datos y parámetros.

Los resultados deben coincidir en los tres escenarios de prueba:
arreglo completo, arreglo con un registro y arreglo vacío.

También se verificó que el arreglo original de ventas conserve
el orden de sus registros después de ejecutar las funciones
de agrupación y ordenamiento.

El resultado esperado de las verificaciones es "OK" para todos
los pares de funciones y para la conservación del orden original.

# El Primer Reporte

## 1. Error: ciudades duplicadas

### Síntoma

Al generar el reporte de ventas por ciudad, Bogotá aparece
en dos grupos diferentes, aunque ambas entradas representan
la misma ciudad.

### Entrada que produce el error

Se utilizan dos registros de prueba con diferencias
en los espacios de la cadena:

    [
        {
            ciudad: "Bogotá",
            cantidad: 1,
            precio: 26000
        },
        {
            ciudad: "Bogotá ",
            cantidad: 2,
            precio: 26000
        }
    ]

### Hipótesis

El problema puede deberse a que JavaScript diferencia las cadenas
de texto cuando tienen espacios adicionales o diferencias
entre mayúsculas y minúsculas.

Al utilizar directamente el nombre de la ciudad como clave
de un objeto, cada variante puede generar un grupo diferente.

### Prueba realizada

Se implementó una versión de prueba que utiliza directamente
el valor de `venta.ciudad` como clave del objeto, sin normalizarlo.

El resultado obtenido fue:

    {
        "Bogotá": 26000,
        "Bogotá ": 52000
    }

Posteriormente se ejecutó la función `totalPorCiudad()`
con la normalización de cadenas.

Se utilizó `trim()` para eliminar espacios sobrantes
y `toLowerCase()` para unificar las diferencias
entre mayúsculas y minúsculas.

El resultado esperado fue:

    {
        "bogotá": 78000
    }

### Causa

El error se producía porque se utilizaban los nombres originales
de las ciudades como claves del objeto, sin considerar
las variaciones en los espacios y las mayúsculas.

### Corrección

Se normalizaron los nombres de las ciudades antes de utilizarlos
como claves del objeto:

    const ciudad = venta.ciudad.trim().toLowerCase();

De esta manera, las diferentes variantes de una misma ciudad
se almacenan en un único grupo y se evita duplicar los resultados.

---

## 2. Error: ticket promedio igual a NaN

### Síntoma

Al consultar el ticket promedio de una fecha sin ventas,
el programa devuelve `NaN` en lugar de un valor numérico
o un mensaje que indique que no existen registros.

### Entrada que produce el error

Se consulta la fecha:

    "2026-09-08"

Al filtrar el arreglo de ventas por esta fecha,
se obtiene un arreglo vacío:

    []

### Hipótesis

El problema puede estar relacionado con la división entre cero,
ya que no existen ventas válidas para calcular el promedio.

### Prueba realizada

Se reprodujo el comportamiento incorrecto mediante
una implementación preliminar que divide directamente
el total vendido entre la longitud del arreglo:

    return total / ventas.length;

Cuando el arreglo está vacío, la operación realizada es:

    0 / 0

El resultado obtenido en JavaScript es `NaN`.

Posteriormente se probó la función `ticketPromedio()`
implementada en el proyecto:

    const ventasFecha = ventas.filter(
        venta => venta.fecha === "2026-09-08"
    );

    console.log(ticketPromedio(ventasFecha));

El resultado obtenido fue:

    0

También se comprobó el funcionamiento con el 2 de septiembre
de 2026, fecha en la que existen dos registros de venta.

El resultado esperado fue:

    68500

### Causa

El error se producía porque la versión preliminar no comprobaba
si existían ventas válidas antes de realizar la división.

Al no existir registros, el denominador era cero.

### Corrección

Se incorporó un contador llamado `ventasValidas` para contar
únicamente los registros cuya cantidad sea mayor que cero.

Antes de calcular el promedio, se verifica si el contador
es igual a cero.

    Si ventasValidas = 0 Entonces
        Retornar 0
    FinSi

De esta manera se evita la división entre cero y se garantiza
que la función devuelva un resultado numérico.

---

## 3. Verificación final del motor

Se ejecutó el reporte completo mediante:

    node src/reporte.js

Se revisaron los siguientes aspectos:

- El resumen general muestra el total vendido,
  las unidades, la venta más grande y el ticket promedio.
- Las ciudades están agrupadas sin duplicados.
- Los productos muestran sus unidades acumuladas.
- El ranking presenta los tres productos con mayor
  valor generado, en orden descendente.
- El día con ventas presenta sus indicadores correctamente.
- El día sin ventas devuelve valores en cero.
- No se presentan valores `NaN` ni `undefined`.

El resultado esperado es un reporte legible por consola
que permite consultar los indicadores del negocio
sin necesidad de modificar el código fuente.

## Predicción de crecimiento de operaciones

**Objetivo:** Antes de realizar las mediciones, predecir cómo cambiará el número de operaciones de cada función cuando el tamaño del conjunto de datos (`n`) se multiplique por 10.

### 1. Predicción inicial

- **Tamaño inicial del array (n):** 
- **Tamaño del array después del incremento (10n):** 

### 2. Predicción por función

| Función | Predicción de visitas | Predicción de comparaciones | Justificación |
|---|---|---|---|
| `totalVendido` | | | |
| `ventaMayor` | | | |
| `totalPorCiudad` | | | |

### 3. Análisis individual

**A. `totalVendido`**

- ¿Cuánto creo que se multiplicará el número de operaciones al multiplicar `n` por 10?
- ¿Por qué considero que tendrá ese crecimiento?

**Mi predicción:**

[Escribe aquí tu respuesta]

**B. `ventaMayor`**

- ¿Cuánto creo que se multiplicará el número de operaciones al multiplicar `n` por 10?
- ¿Cómo influye el hecho de que tenga condiciones y comparaciones dentro del ciclo?

**Mi predicción:**

[Escribe aquí tu respuesta]

**C. `totalPorCiudad`**

- ¿Cuánto creo que se multiplicará el número de operaciones al multiplicar `n` por 10?
- ¿Considero que la búsqueda de ciudades y la acumulación de ventas modificarán el crecimiento?

**Mi predicción:**

[Escribe aquí tu respuesta]

### 4. Conclusión de mi predicción

Antes de ejecutar las pruebas, considero que la función con mayor crecimiento de operaciones será:

[Escribe aquí tu respuesta y explica por qué]

**¿Las tres funciones tendrán el mismo comportamiento al aumentar el tamaño del array?**

[Escribe aquí tu reflexión]

---

### 5. Comparación posterior con los resultados

*Completar después de realizar las mediciones.*

| Función | Predicción | Resultado obtenido | ¿Mi predicción fue acertada? |
|---|---|---|---|
| `totalVendido` | | | |
| `ventaMayor` | | | |
| `totalPorCiudad` | | | |


