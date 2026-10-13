# Workshop Vite: Mini Catálogo de Productos

Mini catálogo web de la tienda **Brisa Moda**, construido con **Vite** y JavaScript puro.

SENA · Centro de Comercio y Servicios · Regional Bolívar
Tecnología en Análisis y Desarrollo de Software (ADSO) · Ficha 3230489

---

## Descripción del proyecto

Este proyecto es un mini catálogo web de productos desarrollado con Vite y JavaScript. Su propósito es poner en práctica la creación de proyectos web, la organización de archivos y el uso de herramientas modernas de desarrollo.

El catálogo muestra los productos de forma organizada y permite:

- Ver los productos con su categoría, nombre y precio en pesos colombianos.
- Filtrar los productos por categoría: todas, hombre, mujer y accesorios.
- Agregar productos al carrito y ver la cantidad de productos y el total.

Los datos de los productos están en un arreglo de JavaScript (`src/datos.js`) y la página se genera recorriendo ese arreglo, sin escribir los productos uno a uno en el HTML.

## Tecnologías utilizadas

| Tecnología | Uso en el proyecto |
| --- | --- |
| Vite | Herramienta de construcción y servidor de desarrollo |
| JavaScript | Lógica del catálogo (datos, eventos y estado) |
| HTML5 | Estructura de la página |
| CSS | Estilos y diseño visual |
| Node.js | Entorno para ejecutar las herramientas de desarrollo |
| npm | Gestor de paquetes para instalar las dependencias |
| Git | Control de versiones |
| GitHub | Alojamiento del repositorio y trabajo en equipo |

## Requisitos previos

Antes de ejecutar el proyecto necesita tener instalado:

- **Node.js** en una versión compatible con Vite 8: 20.19 o superior, o 22.12 o superior. Se recomienda la versión 24 LTS.
- **npm**, que normalmente viene incluido con Node.js.
- **Git**.
- **Visual Studio Code** (recomendado).

Para comprobar que están instalados, abra una terminal y ejecute:

```bash
node -v
npm -v
git --version
```

Cada comando debe mostrar la versión instalada de la herramienta correspondiente.

## Instalación

**1. Clonar el repositorio**

```bash
git clone https://github.com/guerrerobossa/workshop-vite.git
```

**2. Entrar a la carpeta del proyecto**

```bash
cd workshop-vite
```

**3. Instalar las dependencias**

```bash
npm install
```

Este comando instala las dependencias declaradas en el archivo `package.json`.

## Ejecución del proyecto

Con las dependencias instaladas, inicie el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal una dirección local como esta:

```
http://localhost:5173/
```

El puerto puede cambiar si el 5173 ya está en uso. Para abrir el proyecto, mantenga presionada la tecla `Ctrl` y haga clic en el enlace, o copie la dirección en el navegador.

Mientras el servidor esté activo, cada cambio que guarde en el código se refleja en el navegador sin recargar la página.

Para detener el servidor, vuelva a la terminal y presione `Ctrl + C`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga instantánea |
| `npm run build` | Compila el proyecto para producción en la carpeta `dist/` |
| `npm run preview` | Sirve el resultado de `build` para probarlo antes de publicar |

## Estructura del proyecto

```
workshop-vite/
├── index.html        Punto de entrada de la aplicación
├── package.json      Nombre del proyecto, dependencias y scripts
├── public/           Archivos estáticos (íconos)
└── src/
    ├── main.js       Lógica principal: render, filtros y carrito
    ├── datos.js      Arreglo de productos y formato de pesos
    └── style.css     Estilos del catálogo
```

| N.º | Integrante |
| --- | --- |
| 1 | Aris Giguel Gonzalez Guerrero |
| 2 | Stiven Conrado Romero |
| 3 | Erick Junior Cantillo Hernandez |
| 4 | Michael David Morales Berdugo |

**Instructor:** Juan Carlos Ceballos Mendoza

## Repositorio

[github.com/cynical-maker/workshop-vite](https://github.com/cynical-maker/workshop-vite)
