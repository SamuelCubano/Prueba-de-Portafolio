const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  sidebar.classList.remove('slide-out', 'hidden');
  sidebar.classList.add('slide-in');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('slide-in');
  sidebar.classList.add('slide-out');

  // Esperamos a que termine la animación para ocultar
  setTimeout(() => {
    sidebar.classList.add('hidden');
    overlay.classList.add('hidden');
    sidebar.classList.remove('slide-out'); // limpio la clase
  }, 300); // debe coincidir con la duración del @keyframes
});

const closeBtn = document.getElementById('closeSidebar');

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('slide-in');
  sidebar.classList.add('slide-out');

  setTimeout(() => {
    sidebar.classList.add('hidden');
    overlay.classList.add('hidden');
    sidebar.classList.remove('slide-out');
  }, 300);
});
