# 🪐 Ejercicio: Gestor de Planetas Galácticos (SWAPI)

**Objetivo:** Desarrollar una aplicación de gestión de colecciones utilizando la API de Star Wars (SWAPI), centrándose en la lógica de JavaScript.

**API:** `https://swapi.info/` (Puedes usar `https://swapi.info/api/planets/[ID]` para planetas).

**Estructura del DOM:**
La estructura base está definida en `index.html` con los siguientes IDs principales (en lowerCamelCase):

-   **Contenedores principales:** `#swapiApp`, `#formContainer`, `#apiContainer`, `#planetCollectionContainer`.
-   **Formulario Manual:** `#manualPlanetForm` y su botón `#createPlanetButton`.
-   **API:** Botón de búsqueda `#fetchPlanetButton` y contenedor de resultados `#apiResultContainer`.
-   **Colección:** Contenedor de lista `#planetListContainer`.

**Requisitos de Implementación (Tu Tarea - app.js):**

1.  **Persistencia:** Implementar funciones para leer, guardar, añadir y eliminar planetas en `localStorage`.
2.  **API:**
    -   Implementar la función `fetchRandomPlanet()` que obtenga un planeta de la API (usa IDs aleatorios del 1 al 60).
    -   Mostrar los datos en `#apiResultContainer` junto con un botón para **añadir** el planeta encontrado a la colección.
3.  **Formulario Manual:**
    -   Manejar el evento `submit` de `#manualPlanetForm`.
    -   Validar que **todos** los campos obligatorios estén llenos antes de guardar.
    -   Si es válido, guardar el planeta y resetear el formulario.
4.  **Renderizado (CRUD):**
    -   Crear una función `renderPlanetCollection()` que lea de `localStorage` y actualice el contenido de `#planetListContainer`.
    -   Cada planeta en la lista debe tener un botón de "Borrar" con el `data-id` del planeta para poder eliminarlo.

**¡Recuerda utilizar `lowerCamelCase` en todas tus variables y funciones JavaScript!**
