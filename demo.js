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
