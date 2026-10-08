# Preguntas frecuentes del Home

Se agrega dentro de «Cómo trabajamos» un botón «FAQ’s · Preguntas frecuentes», con el estilo azul de Zentris e icono de interrogación decorativo. Lleva a la sección `#faqs` del mismo Home, antes del cierre comercial.

La sección contiene 12 preguntas desplegables sobre: definición de Empleado Digital; diferencia con Puesto Digital; cuatro puestos comerciales; diagnóstico de adecuación del proceso; información necesaria para comenzar; instalación y plazo según alcance; supervisión; errores y excepciones; disponibilidad según cobertura; información autorizada; responsabilidades del equipo humano; evaluación de resultados y costo según alcance. Se enlaza el Caso Real de Ana y Axel y el WhatsApp ya configurado. No se inventan precios, garantías, plazos fijos ni acceso universal a información.

Se usan details/summary nativos, foco visible y un destino de ancla enfocable. El contenido se puede leer y desplegar sin JavaScript; no se agregan dependencias ni scripts. Se conserva el proceso de seis pasos y el resto del Home.

Validación: Chromium a 320, 390, 768, 1280 y 1920 px; botón y ancla correctos; las 12 preguntas abren, teclado y funcionamiento sin JavaScript verificados; sin desbordamiento ni errores JavaScript. Lighthouse móvil local: 100 en rendimiento, accesibilidad, buenas prácticas y SEO. Diff revisado sin errores de espacios. El repositorio estático no tiene scripts de build, lint ni typecheck.

Revisar con `python3 scripts/preview.py`, abrir http://127.0.0.1:4174/, navegar a Cómo trabajamos y pulsar FAQ’s. Rama `codex/zentris-home-faqs`. No se hizo merge, push ni despliegue de esta versión.
