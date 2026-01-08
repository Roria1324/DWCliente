# 🧪 Práctica – Gestor de animes (API Jikan)

## Objetivo

Desarrollar una aplicación web en JavaScript que permita gestionar una colección personal de **animes**, practicando:

-   Uso de **localStorage**
-   Llamadas a **APIs externas** mediante `fetch`
-   **Componentización** del código JavaScript usando módulos ES6
-   Validación de formularios y manipulación del DOM

La información de los animes se obtendrá desde la API pública **Jikan**:
https://jikan.moe/

---

## 📌 Funcionalidades a implementar

### Parte I – Formulario de animes

Crear un formulario que permita añadir animes a una colección con los siguientes campos:

-   **Título del anime**

    -   Obligatorio
    -   Mínimo 3 caracteres

-   **Año de estreno**

    -   Se obtendrá desde la API
    -   Debe contener 4 dígitos

-   **Género**

    -   Se obtendrá desde la API
    -   Mostrar al menos uno

-   **ID externo**

    -   ID del anime en MyAnimeList (`mal_id`)
    -   Obligatorio

-   **Visto**

    -   Valor booleano
    -   Por defecto `false`

-   **Imagen**
    -   URL del póster obtenida desde la API

Botones disponibles:

-   **Buscar anime en API**
-   **Guardar anime**
-   **Mostrar colección**

---

### Parte II – Llamadas a la API Jikan

Al pulsar el botón **Buscar anime en API**:

-   Se realizará una llamada a la API de Jikan utilizando un texto de búsqueda.
    -   Ejemplo de endpoint:
        ```
        https://api.jikan.moe/v4/anime?q=naruto
        ```
-   Del resultado se deberán obtener y mostrar:
    -   Título
    -   Año de emisión
    -   Imagen
    -   ID (`mal_id`)
    -   Géneros
-   Si no se encuentra ningún anime, se mostrará un mensaje de error informativo.

---

### Parte III – Validación de datos

Antes de guardar un anime en la colección, se deben validar los siguientes puntos:

-   El título es obligatorio y tiene al menos 3 caracteres.
-   El ID externo (`mal_id`) existe.
-   El año de estreno es válido (4 dígitos).
-   Existe al menos un género asociado.

Si un campo es incorrecto:

-   Se marcará visualmente con una clase CSS de error.
-   Se mostrará un mensaje indicando qué campo es incorrecto y cómo solucionarlo.
-   Cuando el campo sea válido, volverá a su estilo original.

---

### Parte IV – Listado de animes

Los animes se mostrarán en un listado con formato de tarjetas.  
Cada tarjeta deberá incluir:

-   Imagen del anime
-   Título
-   Año de estreno
-   Géneros
-   Checkbox para marcar si el anime está visto
-   Botón para eliminar el anime de la colección

Antes de eliminar un anime, se deberá confirmar la acción.

---

### Parte V – Persistencia de datos

La colección de animes deberá persistir utilizando **localStorage**:

-   Los datos se cargarán al iniciar la aplicación.
-   Cada vez que se añada, modifique o elimine un anime, se actualizará el localStorage.

---

### Parte VI – Componentización del código

El código JavaScript debe estar organizado en módulos ES6, separando responsabilidades como:

-   Acceso y consumo de la API Jikan
-   Lógica de negocio de los animes
-   Gestión del DOM
-   Gestión de localStorage

No debe existir lógica compleja directamente en el archivo principal.

---

## ⚙️ Requisitos técnicos

-   JavaScript ES6
-   Uso de `addEventListener`
-   Código ejecutado tras `DOMContentLoaded`
-   Uso de `import` y `export`
-   No se permite el uso de librerías externas (jQuery, frameworks, etc.)

---

## 📦 Entrega

-   El proyecto se entregará en una carpeta con la estructura necesaria.
-   El código deberá estar comentado y ser legible.
-   Se valorará especialmente:
    -   El uso correcto de `fetch`
    -   La modularización del código
    -   La gestión adecuada del localStorage
