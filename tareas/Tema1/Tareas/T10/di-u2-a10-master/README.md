# DI UNIDAD 2, ACTIVIDAD 10
## Ejercicio 1: Corregir las actualizaciones de estado incorrectas
Este formulario tiene algunos errores. Haz clic en el botón que aumenta la puntuación unas cuantas veces. Observa que no aumenta. A continuación, edita el nombre, y observa que la puntuación se ha «puesto al día» con sus cambios. Por último, edita el apellido y observa que la puntuación ha desaparecido por completo.

Tu tarea es arreglar todos estos errores. A medida que los vayas arreglando, explica por qué ocurre cada uno de ellos.

## Ejercicio 2: Encontrar y arreglar la mutación
Hay una caja que se puede arrastrar sobre un fondo estático. Puedes cambiar el color de la caja usando la entrada de selección.

Pero hay un error. Si mueves la caja primero, y luego cambias su color, el fondo (¡que se supone que no se mueve!) «saltará» a la posición de la caja. Pero esto no debería ocurrir: la prop position del Background se establece en initialPosition, que es { x: 0, y: 0 }. ¿Por qué se mueve el fondo después del cambio de color?

Encuentra el error y arréglalo.

## Ejercicio 3: Actualizar un objeto con Immer
Este es el mismo ejemplo con errores que en el desafío anterior. Esta vez, arregla la mutación usando Immer. Investiga como instalar e importar immer a tu proyecto.
