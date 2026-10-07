# Demostración: Organizador de cartera

El botón «Ver cómo funciona» del header y del hero lleva a una demostración dentro del Home del Asistente de Recompra / Resurtido. Explica cómo un organizador de cartera convierte historial autorizado y reglas del negocio en oportunidades y clientes que requieren seguimiento.

## Experiencia

1. Recibir el historial de compras.
2. Aplicar reglas autorizadas. El ejemplo usa intervalos de compra, sin presentarlos como criterio universal.
3. Abrir fichas de dos clientes ficticios para comprender señales de recompra y de pérdida de continuidad.
4. Distinguir el trabajo del asistente del contacto y las decisiones del vendedor.
5. Elegir un resultado ficticio y ver el seguimiento o la revisión humana correspondiente.

Los nombres, productos y cifras son inventados para la demostración y se identifican visiblemente como tales. No se incorporaron datos, nombres, ventas, teléfonos, dominios privados ni resultados reales de Productos Camacho. Las vistas ilustrativas adaptadas agregadas posteriormente se documentan en `demo-screenshots.md`. No se presenta como caso de éxito ni se promete una compra.

La demostración usa details/summary y select nativos. El contenido y las fichas se pueden leer sin JavaScript. Un script pequeño actualiza mensajes de simulación anunciados con role=status; no hay llamadas a servicios, almacenamiento ni acciones comerciales reales. La sección del proceso oficial conserva las seis fases y permanece accesible desde el cierre de la demostración.

## Verificación

- Chromium: 320, 390, 768, 1280 y 1920 px; sin scroll horizontal; un h1.
- En cada tamaño se abrieron las dos fichas y se verificaron los resultados de interés de recompra y revisión humana.
- Enter alterna la apertura de las fichas; controles nativos con foco visible.
- Sin errores JavaScript; `node --check demo.js` y `git diff --check` pasan.
- Lighthouse móvil local: rendimiento 100, accesibilidad 100, buenas prácticas 100, SEO 100.
- No hay build, lint, typecheck ni suite previa en este repositorio estático. No se agregaron dependencias.

## Revisar localmente

```sh
cd /workspace/Pagina-Web
git switch codex/zentris-how-it-works-demo
python3 scripts/preview.py
```

Abrir http://127.0.0.1:4174/#como-funciona. Probar «Ver cómo funciona» desde el hero, abrir ambas fichas y elegir distintos resultados. Los mensajes describen pasos ilustrativos y no registran datos.

Estos cambios quedan en una rama nueva para revisión; no se hizo merge, push ni despliegue de esta demostración.
