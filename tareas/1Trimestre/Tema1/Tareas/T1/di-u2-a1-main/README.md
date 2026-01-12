# DI UNIDAD 2, ACTIVIDAD 1
## Ejercicio 1: separando componentes aún más
Actualmente, Gallery.js exporta tanto Profile como Gallery, lo cual es un poco confuso.

Mueve el componente Profile a su propio Profile.js, y luego cambia el componente Home (page.js) para que renderice tanto Profile como Gallery uno detrás del otro.

Puedes usar o bien un export por defecto o bien un export con nombre para Profile, ¡pero asegúrate de usar la sintaxis de import correspondiente tanto en App.js como en Gallery.js! 

## Ejercicio 2: convierte algo de HTML a JSX
El archivo HTML biografia.html se pegó en un componente, pero no es JSX válido. Arréglalo creando el archivo Bio.js. Importa el componente a page.js para mostrar los resultados.

## Ejercicio 3: arregla el error
El código de TodoList.js se bloquea con un error que dice Objects are not valid as a React child. Soluciónalo. Impórtalo a page.jsx para ver los resultados.

## Ejercicio 4: extraer información hacia un objeto
Extrae la URL de la imagen hacia el objeto person del archivo anterior TodoList.js

## Ejercicio 5: escribe una expresión dentro de llaves JSX
En el objeto de TodoList2.js, la URL de la imagen completa está dividida en 4 partes: la URL de base, imageId, imageSize y la extensión del archivo.

Queremos que la URL de la imagen combine estos atributos juntos: la URL de base (siempre 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'), y la extensión del archivo (siempre '.jpg'). Sin embargo, algo está mal con la forma en que la etiqueta <img> especifica su src.

¿Puedes arreglarlo?

Para verificar que tu solución funcionó, intenta cambiar el valor de imageSize a 'b'. La imagen debería cambiar de tamaño después de tu edición.