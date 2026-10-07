# Zentris Global — Home estática

Sitio público de Zentris Global, sin framework, gestor de paquetes ni paso de compilación.

## Revisión local

```sh
cd /workspace/Pagina-Web
git switch codex/zentris-home-audit-fixes
python3 scripts/preview.py
```

Abre http://127.0.0.1:4174/. Detén el servidor con Ctrl+C. Revisa también una ruta inexistente, las seis rutas antiguas indicadas en el informe, `/robots.txt` y `/sitemap.xml`.

El servidor local reproduce la respuesta 404 de marca, pero no emula toda la plataforma Vercel ni implementa APIs. Vercel sirve `404.html` automáticamente para recursos no encontrados; no hay reglas generales de redirección o reescritura.

## Validación

- Responsive: 320, 390, 768, 1280 y 1920 px.
- Un solo h1 por página; encabezados h2 y h3; navegación por teclado y foco visible.
- Botones y enlaces con alto mínimo de 44 px.
- Texto principal #333333 y secundario #4B5563 sobre blanco y #F4F4F4.
- Botón #004AAD con texto blanco; verde #A3E635 como acento decorativo.
- `node --check year.js` para sintaxis JavaScript.
- No existen scripts de build, lint, typecheck ni pruebas previas. No se necesitan dependencias para servir el sitio.

Consulta [el informe de implementación](docs/home-audit.md) para resultados, fuentes, decisiones de rutas y pendientes. No se debe publicar automáticamente al revisar estos cambios.
