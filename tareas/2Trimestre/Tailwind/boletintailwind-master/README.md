# Boletín de Ejercicios para Practicar Tailwind CSS I

## Ejercicio 1: Creación de una Tarjeta Simple (Nivel Básico)
**Objetivo:** Familiarizarse con clases básicas de Tailwind CSS para diseño de contenedores, texto y colores.

### Instrucciones:
Crea un componente que muestre una tarjeta (Card) con:
*   Un título en negrita y tamaño grande.
*   Una descripción corta en texto gris.
*   Un botón azul con bordes redondeados y un efecto *hover* que cambie el color del fondo.

**Clases Sugeridas:** `bg-gray-100`, `p-4`, `rounded-lg`, `shadow-md`, `hover:bg-blue-600`, `text-white`.

---

## Ejercicio 2: Grid de Elementos (Nivel Intermedio)
**Objetivo:** Aprender a crear una cuadrícula con Tailwind CSS usando clases `grid`, `grid-cols-*`, y `gap-*`.

### Instrucciones:
1. Crea una página que muestre 9 elementos distribuidos en 3 columnas.
2. Cada elemento debe ser un `div` con un número en su interior.
3. Usa clases para ajustar el espacio entre elementos (`gap-*`) y centrar el contenido en cada celda.

**Clases Sugeridas:** `grid`, `grid-cols-3`, `gap-4`, `bg-gray-200`, `text-center`, `p-4`, `rounded-lg`.

**Punto de partida:**
```jsx
export default function Grid() {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="bg-blue-200 p-4 rounded-lg text-center">
          {i + 1}
        </div>
      ))}
    </div>
  );
}
```

---

## Ejercicio 3: Navbar Responsivo (Nivel Intermedio)
**Objetivo:** Practicar el diseño responsivo y navegación con Tailwind.

### Instrucciones:
Crea un Navbar que contenga:
*   Un logotipo a la izquierda.
*   Tres enlaces de navegación centrados en pantallas grandes.
*   Un botón tipo hamburguesa (hamburger menu) que se muestre en pantallas pequeñas.

**Clases Sugeridas:** `flex`, `justify-between`, `items-center`, `hidden`, `block`, `md:flex`, `p-4`, `bg-gray-800`, `text-white`, `hover:text-blue-400`.

---

## Ejercicio 4: Diseño de Blog con Flexbox (Nivel Avanzado)
**Objetivo:** Practicar el uso de `flex`, `justify-*`, y `items-*` para estructuras complejas.

### Instrucciones:
Crea una página con un diseño de blog:
1.  Una sección de encabezado con título y subtítulo centrados.
2.  Una sección principal dividida en dos columnas:
    *   La columna izquierda mostrará 3 tarjetas de artículos del blog.
    *   La columna derecha mostrará una lista de enlaces relacionados.

**Clases Sugeridas:** `flex`, `justify-center`, `items-start`, `flex-col`, `w-1/3`, `p-6`.

---

## Ejercicio 5: Dashboard Completo (Nivel Avanzado)
**Objetivo:** Crear una interfaz más compleja combinando `grid`, `flex`, colores personalizados y componentes reutilizables.

### Instrucciones:
Diseña un Dashboard que tenga:
*   Un Navbar fijo en la parte superior.
*   Una barra lateral (Sidebar) de navegación a la izquierda.
*   Tres tarjetas principales en la parte superior del contenido principal (métricas).
*   Una tabla que muestre datos ficticios en la parte inferior.

**Pistas:**
*   Usa `grid-cols-layout`, `col-span-*`, `row-span-*`, `overflow-scroll` y `shadow-lg`.
*   Personaliza colores con `extend` en `tailwind.config.js`.
