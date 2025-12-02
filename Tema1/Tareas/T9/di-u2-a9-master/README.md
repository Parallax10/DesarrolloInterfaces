# DI UNIDAD 2, ACTIVIDAD 9
## Ejercicio 1: Fijar un contador de peticiones
Estás trabajando en una aplicación de comercialización de arte que permite al usuario enviar varios pedidos de un artículo de arte al mismo tiempo. Cada vez que el usuario pulsa el botón Comprar, el contador de «Pendiente» debería aumentar en uno. Después de tres segundos, el contador de Pendiente debería disminuir y el de Completado debería aumentar.

Sin embargo, el contador de Pendiente no se comporta como está previsto. Al pulsar «Comprar», disminuye a -1 (¡lo que no debería ser posible!). Y si pulsas rápido dos veces, ambos contadores parecen comportarse de forma imprevisible.

¿Por qué ocurre esto? Arregla ambos contadores.

## Ejercicio 2: implementa la cola de estado tú mismo
¡En este reto, reimplementarás una pequeña parte de React desde cero! No es tan difícil como parece.

Desplázate por la vista previa al ejecutar la app. Observa que muestra cuatro casos de prueba. Se corresponden con los ejemplos que has visto antes en esta página. Tu tarea es implementar la función getFinalState para que devuelva el resultado correcto para cada uno de esos casos. Si la implementas correctamente, las cuatro pruebas deberían pasar.

Recibirás dos argumentos: baseState es el estado inicial (como 0), y la queue es un array que contiene una mezcla de números (como 5) y funciones de actualización (como n => n + 1) en el orden en que fueron añadidas.

Tu tarea es devolver el estado final, ¡tal y como muestran las tablas de esta página!