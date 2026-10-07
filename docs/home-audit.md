# Implementación de la auditoría del Home de Zentris Global

Fecha de revisión: 6 de octubre de 2026 (America/Mexico_City).

## Repositorio, aislamiento y base

- Repositorio: https://github.com/diegomartinez3092-source/Pagina-Web.git, en `/workspace/Pagina-Web`.
- Confirmación: README, HTML, marca Zentris Global y enlace de WhatsApp del sitio. Es un Home estático, sin framework ni paquete de dependencias.
- Árbol inicial limpio; no fue necesario un worktree. No se encontraron instrucciones AGENTS.md en el workspace.
- Rama: `codex/zentris-home-audit-fixes`, creada desde `origin/main`.
- Base: `89bf4498ca5feaeeb444de975b3fe085b94aad36`. La actualización remota posterior confirmó la misma referencia.
- No se modificó ningún proyecto de Productos Camacho ni se utilizó información de sus operaciones.

## Fuentes y activos

Se buscaron documentos y activos en el repositorio y en Google Drive conectado, incluyendo las carpetas localizadas de Zentris. No se localizaron las fuentes solicitadas:

1. Identidad Estratégica de Zentris Global.
2. Marca y comunicación de Zentris Global.
3. Audiencia de Zentris Global.
4. Arquitectura de la Fábrica Zentris.
5. Catálogo Comercial de Puestos Digitales.
6. Catálogo Interno de Empleados Digitales.
7. Canales y Puntos de Contacto.
8. Modelo mental y principios operativos.

Tampoco se localizaron `Logo letras blanco.webp` ni `Logo letras obscuro.webp`. No se consultaron contenidos de archivos ajenos o sensibles devueltos incidentalmente por la búsqueda. Los textos, cuatro puestos, fases, colores y canales suministrados por el usuario son la fuente de esta implementación.

Se recuperó con Chromium el mismo PNG de Squarespace referenciado en el HTML original (1024 × 1024, 152580 bytes). No se creó ni recoloreó un logotipo. Se retiró su margen transparente y se preparó `assets/logo.webp` (320 × 381, 63764 bytes), con codificación WebP sin pérdida tras reducir dimensiones. Se usa con proporción conservada en header y 404. Se generó un favicon PNG de 64 × 64 (5562 bytes) a partir del mismo activo y una composición social PNG de 1200 × 630 (68608 bytes) con el logotipo existente, textos y colores de marca. Los recursos del Home ahora se sirven localmente.

El WhatsApp `https://wa.me/525645741746` se conserva del repositorio. Instagram, Facebook y sitio oficial provienen de la instrucción del usuario. No se agregaron LinkedIn, TikTok, dirección, email, teléfonos adicionales ni documentos legales inventados.

## Hallazgos verificados y cambios

El código base tenía descripción y title básicos y un foco para botones; se actualizaron esas piezas. Carecía de canonical, Open Graph, Twitter/X, favicon, robots, sitemap, 404 propia y configuración de rutas. Presentaba cinco fases, año 2024, logotipo remoto y promesas universales 24/7, resultados desde la primera semana e implementación desde el primer día.

- Se conserva el h1 solicitado y se incorpora el apoyo comercial aprobado.
- Todos los CTAs usan “Hablar sobre mi operación” y el contacto existente.
- Se explican responsabilidad, límites, información autorizada y supervisión humana.
- Se sustituyen las promesas absolutas por problemas operativos concretos.
- Se presentan exclusivamente los cuatro puestos comerciales aprobados, sin precios y con nota visible sobre límites.
- Se muestran las seis fases oficiales con nombres y explicaciones comprensibles.
- Se reemplaza la comparación agresiva por una explicación del modelo operativo.
- Se actualiza el cierre y se mantiene el lenguaje visual de tarjetas, bordes, sombras y colores.
- Se agrega navegación a puestos y proceso, footer con canales confirmados y año dinámico mediante un script diferido de 68 bytes.

## SEO

Title y descripción aprobados; canonical absoluto al Home público; Open Graph con locale es_MX, sitio, URL, título, descripción e imagen social; Twitter/X con tarjeta grande; favicon local; robots.txt y sitemap.xml con únicamente el Home; Organization JSON-LD con nombre, URL, logo y dos perfiles confirmados. La 404 lleva `noindex` y título propio. No hay cifras, reseñas, clientes ni datos no verificados en los datos estructurados.

## Rutas antiguas

No se encontraron estas rutas, páginas antiguas, APIs ni configuración de hosting en el repositorio base. Tampoco se dispone de evidencia del contenido histórico suficiente para afirmar un equivalente directo. No se añadieron 301 al Home ni a secciones basándose únicamente en el nombre de la URL.

| Ruta | Tratamiento | Justificación |
| --- | --- | --- |
| `/quienes-somos` | 404 de marca | No hay una página equivalente comprobada; las secciones del Home no acreditan la misma intención histórica. |
| `/zl-002` | 404 de marca | Código sin contenido histórico verificable ni equivalente directo. |
| `/zl-003` | 404 de marca | Código sin contenido histórico verificable ni equivalente directo. |
| `/diagnostico-gratuito` | 404 de marca | La conversación operativa actual no acredita equivalencia con el diagnóstico antiguo. |
| `/servicios/p/automatizacin-de-reportes-y-dashboards` | 404 de marca | Servicio aislado ausente de las ofertas comerciales aprobadas. |
| `/servicios/p/creacin-de-negocio-digital-desde-cero` | 404 de marca | Servicio ausente de la oferta actual. |

404 es una respuesta válida para contenido inexistente o retirado y es la capacidad nativa del hosting estático Vercel. No se agregó un runtime o función únicamente para convertirla en 410. No se declaró retiro definitivo de contenido histórico no comprobado. `404.html` se sirve conservando el estado 404; no hay catch-all ni reglas que intercepten APIs. `cleanUrls` habilita URLs sin extensión para recursos estáticos existentes. El servidor de revisión local deja `/api` y `/api/*` fuera de la 404 de marca.

Las seis URLs necesitan inspección/validación manual en Google Search Console por un responsable autorizado: confirmar propiedad y respuesta final después de una publicación aprobada, solicitar recrawl, revisar los mensajes ecommerce/Zenti/Vende Bonito y, si procede, solicitar retiro temporal de resultados. El retiro temporal no sustituye el estado HTTP. Registrar nuevas URLs antiguas descubiertas y revisar sus equivalentes individualmente. No se operó Search Console ni se leyó configuración remota de Vercel; revisar posibles reglas del dashboard antes de una publicación futura.

## Accesibilidad y responsive

HTML semántico, un h1, jerarquía h2/h3, listas nativas, alt del logo con propósito de inicio; se eliminó `aria-hidden` del contenido informativo del hero y aria redundante del enlace con imagen. Salto al main con destino enfocable; foco azul visible en todos los enlaces; sin nuevas pestañas inesperadas en CTAs; reduced-motion desactiva transiciones y animación. El verde se usa como decoración, no como texto o único indicador de estado. No hay imágenes decorativas adicionales ni contenido informativo oculto.

Chromium verificó 320, 390, 768, 1280 y 1920 px: sin scroll horizontal, exactamente cuatro puestos y seis fases, anclas válidas, todos los enlaces con altura de al menos 44 px y sin errores JavaScript. Se revisaron visualmente capturas completas móvil y escritorio. Header móvil fluye con el documento; desktop permanece sticky, con margen de ancla. El logo conserva la proporción. El salto de teclado enfoca `inicio`; los enlaces recorridos tienen outline sólido. Reduced-motion devuelve transición 0s. Lighthouse no detectó fallas automáticas de accesibilidad/contraste. Esto no equivale a una prueba exhaustiva con lectores de pantalla o todos los navegadores.

## Rendimiento

Logo local reducido de 152580 a 63764 bytes; dimensiones explícitas reservan espacio y object-fit conserva proporción. No hay imágenes fuera de la primera vista en el Home que requieran carga diferida. Imagen social se consulta por crawlers, no se descarga como contenido de la página. Tipografía de sistema, sin librerías del lado del cliente; el único JavaScript actualiza el año. No se agregó Vercel Analytics ni dependencias al proyecto.

Lighthouse señala oportunidades menores de entrega de imágenes, caché, compresión y CSS bloqueante en el servidor Python de revisión. No se añadió caché inmutable a archivos sin versión. Las mediciones locales no permiten afirmar el rendimiento de producción ni comparar con su SHA desplegado.

## Validación técnica

- Build: no existe ni se requiere compilación en este repositorio estático. Se sirvieron y renderizaron los archivos finales con éxito; no se afirma haber ejecutado un build inexistente.
- Lint: no existe configuración/script de lint. `git diff --check`, parseo HTML, IDs únicos, atributos de imágenes, JSON de hosting, JSON-LD y XML del sitemap verificados.
- Typecheck: no existe TypeScript ni script de typecheck. `node --check year.js` pasó.
- Pruebas existentes: no hay suite previa. Se ejecutaron comprobaciones directas con Chromium y estados HTTP locales.
- HTTP local: Home, robots y sitemap = 200; cada una de las seis rutas antiguas y una inexistente = 404 con página Zentris; `/api/prueba` = 404 ordinaria fuera del manejo de marca.
- Lighthouse 13.5.0, móvil: rendimiento 100, accesibilidad 100, buenas prácticas 100, SEO 100. FCP 0.8 s, LCP 1.4 s, CLS 0, TBT 0 ms.
- Lighthouse 13.5.0, escritorio: rendimiento 100, accesibilidad 100, buenas prácticas 100, SEO 100. FCP 0.2 s, LCP 0.4 s, CLS 0, TBT 0 ms.
- Herramienta Lighthouse obtenida temporalmente fuera del proyecto. No hay package.json, lockfile ni node_modules añadidos.
- Diff completo revisado y búsqueda de patrones comunes de secretos sin coincidencias. No se cambiaron variables de entorno.

## Archivos

Modificados: `index.html`, `styles.css`, `README.md`.

Nuevos: `404.html`, `year.js`, `robots.txt`, `sitemap.xml`, `vercel.json`, `assets/logo.webp`, `assets/favicon.png`, `assets/social.png`, `scripts/preview.py`, `docs/home-audit.md`, `docs/validation-results.json`.

## Pendientes y decisiones del Founder

1. Proporcionar las ocho fuentes oficiales y las dos variantes oficiales de logotipo para cotejo documental y eventual reemplazo del activo existente. No se inventó otra identidad.
2. Confirmar con evidencia histórica si alguna URL retirada tiene un equivalente directo que amerite 301; validar reglas externas de Vercel. La implementación actual usa 404 justificada.
3. Definir/publicar aviso de privacidad y términos si corresponden; no existen enlaces confirmados para agregarlos.
4. Proporcionar LinkedIn oficial si se desea incluirlo. TikTok permanece fuera.
5. Asignar responsable autorizado de Search Console para revisar URLs y resultados antiguos.
6. Validar respuestas reales de hosting y previews sociales después de autorizar una publicación futura. No se creó preview remoto porque no se autorizó desplegar.

## Cómo revisar

```sh
cd /workspace/Pagina-Web
git switch codex/zentris-home-audit-fixes
python3 scripts/preview.py
```

Abrir http://127.0.0.1:4174/ y cada ruta de la tabla. Revisar teclado con Tab/Shift+Tab/Enter, reducir movimiento en el sistema y probar los cinco tamaños indicados. No abrir el HTML con file://, porque los activos usan rutas desde la raíz.

Para repetir Lighthouse con red disponible y Chromium instalado:

```sh
npm exec --yes --package=lighthouse -- lighthouse http://127.0.0.1:4174/ --chrome-path=/usr/bin/chromium --chrome-flags='--headless --no-sandbox' --output=html --output-path=/tmp/zentris-mobile.html
npm exec --yes --package=lighthouse -- lighthouse http://127.0.0.1:4174/ --preset=desktop --chrome-path=/usr/bin/chromium --chrome-flags='--headless --no-sandbox' --output=html --output-path=/tmp/zentris-desktop.html
```

No se hizo merge, push ni despliegue; no se modificaron variables de entorno ni se activó Vercel Analytics.
