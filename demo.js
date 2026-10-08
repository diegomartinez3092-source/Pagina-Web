// Illustrative interactions only: no requests, storage, or customer data.
const demoMessages = {
  interested: 'Simulación: interés registrado. El vendedor debe confirmar el pedido con el cliente y seguir el proceso autorizado.',
  later: 'Simulación: seguimiento pendiente. El vendedor acuerda con el cliente cuándo retomar el contacto.',
  unreached: 'Simulación: contacto no logrado. El caso queda pendiente de seguimiento según las reglas del negocio.',
  review: 'Simulación: caso para revisión humana. La persona responsable revisa el contexto y decide el siguiente paso.'
};
for (const select of document.querySelectorAll('[data-demo-result]')) {
  select.addEventListener('change', () => {
    document.getElementById(select.dataset.demoResult).textContent = demoMessages[select.value] || 'Selecciona una opción para ver cómo queda el seguimiento.';
  });
}

// Manual screen navigation; no autoplay, tracking, or live business connection.
for (const demo of document.querySelectorAll('[data-screen-demo]')) {
  const slides = [...demo.querySelectorAll('.screen-demo-slide')];
  const tabs = [...demo.querySelectorAll('[data-screen-index]')];
  const previous = demo.querySelector('[data-screen-prev]');
  const next = demo.querySelector('[data-screen-next]');
  const status = demo.querySelector('[data-screen-status]');
  let current = 0;
  function show(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    tabs.forEach((tab, i) => tab.setAttribute('aria-pressed', String(i === current)));
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    status.textContent = `Pantalla ${current + 1} de ${slides.length}`;
  }
  demo.querySelector('.screen-demo-tabs').hidden = false;
  demo.querySelector('.screen-demo-controls').hidden = false;
  tabs.forEach((tab, i) => tab.addEventListener('click', () => show(i)));
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  demo.querySelector('.screen-demo-tabs').addEventListener('keydown', event => {
    let destination;
    if (event.key === 'ArrowRight') destination = Math.min(current + 1, slides.length - 1);
    if (event.key === 'ArrowLeft') destination = Math.max(current - 1, 0);
    if (event.key === 'Home') destination = 0;
    if (event.key === 'End') destination = slides.length - 1;
    if (destination === undefined) return;
    event.preventDefault();
    show(destination);
    tabs[destination].focus();
  });
  show(0);
}

// Keep the same app-only framing when enlarging a screen.
const captureDialog = document.querySelector('.screen-capture-dialog');
if (captureDialog) {
  for (const button of document.querySelectorAll('[data-screen-enlarge]')) {
    button.hidden = false;
    button.addEventListener('click', () => {
      const source = button.closest('figure').querySelector('img');
      const image = captureDialog.querySelector('img');
      image.src = button.dataset.screenEnlarge;
      image.alt = source.alt;
      captureDialog.querySelector('#screen-dialog-title').textContent = button.textContent;
      captureDialog.showModal();
    });
  }
}
