# Demo interactiva con capturas autorizadas

Se reemplaza la galería de dos vistas adaptadas por un recorrido manual de cinco pantallas: oficina digital, cartera preparada, productos habituales, resumen de jornada y avance del equipo. El usuario autorizó explícitamente conservar los datos originales de sus capturas. Se mantienen esas cifras y textos sin sustituirlos por ceros, guiones o datos generados.

Se usan las capturas 1, 2, 5, 6 y 7 proporcionadas en esta conversación, convertidas a WebP con calidad 90, sin recortar o alterar contenido, a 591 × 1280. No se incorporan las capturas de fichas con teléfono/dirección ni la de desempeño individual, pues no son necesarias para este recorrido. No se presenta la actividad mostrada como incremento de ventas atribuible a Zentris ni como promesa de resultados. El ejercicio posterior sigue identificado como ficticio.

La navegación permite elegir directamente cada paso, avanzar y retroceder. Los botones muestran el estado seleccionado con aria-pressed; las flechas izquierda/derecha, Home y End funcionan en el selector de pantallas. Se anuncia el número de pantalla; los controles de extremo se deshabilitan. No hay reproducción automática ni dependencias nuevas. Sin JavaScript aparecen las cinco pantallas como recorrido estático. Las imágenes tienen alt, dimensiones explícitas, carga diferida y enlaces de ampliación.

Se retiran los dos WebP adaptados anteriores y sus estilos de galería. Los documentos anteriores describen versiones históricas; este archivo documenta la implementación actual.

Validación: navegación por clic y teclado, carga de las cinco imágenes, límites del recorrido y cinco pantallas visibles sin JavaScript. Chromium a 320, 390, 768, 1280 y 1920 px, sin desbordamiento horizontal y sin errores JavaScript. `node --check demo.js` y `git diff --check` pasan. Lighthouse móvil local: rendimiento 100, accesibilidad 100, buenas prácticas 100, SEO 100. No hay build, lint ni typecheck configurados en este repositorio estático.

Revisión: rama `codex/zentris-interactive-screen-demo`; ejecutar `python3 scripts/preview.py` y abrir http://127.0.0.1:4174/#como-funciona. No se hizo merge, push ni despliegue de esta versión.
