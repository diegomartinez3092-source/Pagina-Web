# Vistas ilustrativas para la demostración de cartera

Se incorporan dos versiones adaptadas de las imágenes facilitadas por el usuario: oficina digital y jornada comercial. Aparecen antes de las fichas interactivas, con texto explicativo y enlaces de ampliación.

Las imágenes se adaptaron con la herramienta de edición de imágenes a partir de las capturas proporcionadas; son ilustraciones derivadas, no capturas literales ni evidencia de resultados. Se omitieron barras del navegador, dominio interno, fechas, nombre y todas las cifras de la jornada. La oficina mantiene las áreas visibles; la jornada muestra guiones en lugar de métricas. La nota pública identifica ambas como vistas ilustrativas adaptadas con datos omitidos. No se agregaron los originales al repositorio ni otras capturas que contienen clientes, teléfonos, ventas o desempeño individual.

Archivos locales WebP: `assets/demo-office.webp` (800 × 875, aproximadamente 134 KiB) y `assets/demo-portfolio.webp` (800 × 1200, aproximadamente 29 KiB). Dimensiones explícitas, object-fit contain, alt descriptivo, lazy loading y decoding async. No se agregaron dependencias.

Validación: Chromium a 320, 390, 768, 1280 y 1920 px, imágenes cargadas y sin scroll horizontal; enlace de ampliación funcional y sin errores JavaScript. Lighthouse móvil local: rendimiento 100, accesibilidad 100, buenas prácticas 100 y SEO 100. Diff revisado y sin errores de espacios. No hay paso de compilación en este sitio estático.

Revisión: `python3 scripts/preview.py` desde el repositorio, abrir http://127.0.0.1:4174/#como-funciona. Rama `codex/zentris-demo-screenshots`. Esta incorporación queda lista para revisión; no se hizo merge, push ni despliegue de las imágenes.
