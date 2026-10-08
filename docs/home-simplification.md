# Simplificación del Home

- Se elimina la tarjeta «Un puesto definido dentro de tu operación» y el hero queda en una columna.
- Se elimina la sección «No entregamos una herramienta…».
- El título de problemas cambia a «Problemas que resolvemos».
- Se reemplaza todo el bloque «Un puesto en acción…», sus pantallas y ejercicio hasta «Cómo trabajamos» por un único botón «Caso Real».
- La demo completa se conserva en `/caso-real`, con metadatos propios, canonical, sitemap, carrusel, cifras autorizadas, ejercicio ficticio identificado y ampliación sin franja de navegador.
- La explicación de Zentris y los cuatro puestos anteriores al bloque de demo se conservan.
- «Cómo trabajamos» conserva sus seis pasos. Demanda cambia a Diagnóstico operativo; Reclutamiento cambia a Diseño puesto digital.
- Se ajustan los textos del Home al plural Empleados Digitales, incluidos «Instalamos a los Empleados Digitales» y «Los ponemos a trabajar», con concordancia verbal.
- Se retira Puestos Digitales del header del Home, Caso Real y 404. Ver cómo funciona lleva al proceso; Caso Real abre la demo.

Validado con Chromium a 320, 390, 768, 1280 y 1920 px: estructura, enlace a Caso Real, navegación por las cinco capturas, cierre con Escape, sin desbordamiento y sin errores JavaScript. Lighthouse móvil local de Home y Caso Real: 100 en rendimiento, accesibilidad, buenas prácticas y SEO. Sintaxis JavaScript y revisión de espacios del diff pasan. El sitio estático no tiene build, lint ni typecheck configurados. No se agregaron dependencias.

Para revisar: ejecutar `python3 scripts/preview.py` desde el repositorio; abrir http://127.0.0.1:4174/ y usar Caso Real. El preview reconoce explícitamente la nueva ruta, sin reglas generales ni intercepción de APIs. Rama `codex/zentris-home-simplify`; no se hizo merge, push ni despliegue de esta versión.
