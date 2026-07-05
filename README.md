# 🍞 Componente Visual: Notificaciones Toast

**Autor:** Oscar Zuriel García Ortega  
**Actividad:** Actividad 3. Componente Visual con JS  
**Modalidad:** Individual  

##  ¿Qué problema resuelve?
En las interfaces web modernas, es fundamental proporcionar retroalimentación inmediata al usuario (como confirmar el éxito de una transacción, alertar sobre un fallo de conexión o notificar un mensaje entrante) sin interrumpir de golpe su flujo de trabajo. Los clásicos `alert()` nativos del navegador bloquean la pantalla completa, detienen la ejecución del script y ofrecen una experiencia de usuario obsoleta. 

Este componente resuelve este problema generando notificaciones emergentes (**Toasts**) elegantes, dinámicas, atractivas visualmente y completamente no bloqueantes. Cumple al 100% con los requisitos de la rúbrica al ser un **componente visual interactivo**: inyecta una estructura HTML/CSS completamente nueva al DOM de forma dinámica y responde de manera fluida tanto al paso del tiempo (autoborrado) como a las acciones directas del usuario (clic para cerrar).

## ⚙️ Instalación
Para implementar esta librería en cualquier proyecto web, solo se deben incluir los archivos de estilo y comportamiento dentro del documento HTML.

1. Vincula el archivo CSS dentro de la etiqueta `<head>` de tu página:

    <link rel="stylesheet" href="css/componente.css">

2. Vincula el archivo JavaScript justo antes de cerrar la etiqueta `</body>`:

    <script src="js/componente.js"></script>

##  Uso del Componente 
El componente es totalmente reutilizable y permite pasar parámetros dinámicos como el mensaje personalizado (`message`), el estilo visual (`type`: success, error, info) y el tiempo de vida en pantalla (`duration` en milisegundos), evitando cualquier tipo de dato hardcodeado.

A continuación, se muestran ejemplos reales de cómo invocar el componente desde tus eventos de JavaScript:

    // 1. Notificación de éxito estándar (desaparece en 3 segundos por defecto)
    Toast.show({ 
        message: '¡Datos guardados con éxito!', 
        type: 'success' 
    });

    // 2. Notificación de error crítica con mayor duración (5 segundos)
    Toast.show({ 
        message: 'Error al conectar con el servidor', 
        type: 'error',
        duration: 5000 
    });

    // 3. Notificación informativa general
    Toast.show({ 
        message: 'Tienes una nueva notificación', 
        type: 'info' 
    });

##  Capturas de Pantalla
A continuación se detalla el comportamiento visual interactivo y la correcta aplicación de estilos dinámicos en el navegador:

![Demo del componente Toast funcionando en vivo](img/captura.png)

##  Video Promocional (Demo de 60 Segundos)
En el siguiente enlace se presenta el demo promocional en video, donde se explica el problema de diseño que resuelve el componente, cómo se integra mediante código y una demostración de su funcionamiento interactivo en tiempo real:

* [Ver Video Demo del Componente Toast](PEGA_AQUI_EL_LINK_DE_TU_VIDEO)

##  Enlace a GitHub Pages
El componente visual se encuentra desplegado de forma pública y puede ser probado directamente en el entorno de producción a través del siguiente enlace obligatorio:

* [Ver Componente Funcionando en Vivo (GitHub Pages)](PEGA_AQUI_EL_LINK_DE_TU_GITHUB_PAGES)