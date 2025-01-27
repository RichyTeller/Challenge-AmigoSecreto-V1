
# Proyecto de Sorteo de Amigos

Este proyecto es una aplicación web que permite a los usuarios agregar amigos a una lista y realizar un sorteo para seleccionar aleatoriamente a un amigo. Está desarrollado utilizando **HTML**, **CSS** y **JavaScript**.

## Características

- **Agregar amigos**: Permite agregar amigos a la lista ingresando sus nombres en un campo de texto.
- **Sorteo aleatorio**: Selecciona aleatoriamente un amigo de la lista.
- **Validaciones**: 
  - Verifica que el campo no esté vacío antes de agregar un amigo.
  - Muestra un mensaje si no hay amigos para realizar el sorteo.
- **Interacción por Enter y clic**: El usuario puede agregar un amigo presionando Enter o haciendo clic en el botón "Añadir".

## Requisitos

Este proyecto no requiere ningún entorno de desarrollo adicional. Solo necesitas:

- Un navegador web moderno (Chrome, Firefox, Safari, etc.).
- Un editor de texto o IDE para modificar el código (opcional).

## Estructura del Proyecto

```
/sorteo-de-amigos
├── index.html      # Estructura HTML de la página
├── style.css       # Estilos CSS de la interfaz
├── app.js          # Lógica de la aplicación en JavaScript
└── README.md       # Este archivo
```

## Instalación

1. Clona el repositorio o descarga los archivos del proyecto.
   
   ```bash
   git clone https://github.com/tu-usuario/sorteo-de-amigos.git
   ```

2. Abre el archivo `index.html` en tu navegador web.

## Uso

1. Escribe el nombre de un amigo en el campo de texto.
2. Haz clic en el botón **"Añadir"** o presiona **Enter** para agregar el nombre a la lista de amigos.
3. Para realizar el sorteo, haz clic en el botón **"Sorteo"**. El nombre del ganador aparecerá en la interfaz.
4. Si no hay amigos para sortear, la aplicación te lo notificará.

## Funciones Principales

### `agregarAmigo()`

Esta función agrega un nuevo amigo a la lista. Si el campo de texto está vacío, muestra una alerta solicitando un nombre. Luego, limpia el campo de texto y actualiza la lista de amigos mostrada en la página.

### `limpiarCaja()`

Limpia el campo de entrada de texto para que el usuario pueda agregar un nuevo amigo sin tener que borrar manualmente el contenido.

### `mostrarAmigos()`

Recorre el array de amigos y muestra cada nombre en una lista HTML (`<ul>`). Si se agrega o elimina un amigo, esta función actualiza la lista mostrada en la página.

### `sortearAmigo()`

Selecciona aleatoriamente un amigo de la lista y muestra su nombre como el ganador. Si no hay amigos en la lista, muestra una alerta notificando que se necesita agregar al menos un amigo.

## Contacto

Si tienes alguna pregunta o sugerencia, puedes contactarme en [richygonzalez8@gmail.com].
