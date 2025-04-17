// Verificar que estamos en un entorno de navegador antes de ejecutar cualquier código
const isSSR = typeof window === 'undefined';

// Declarar las funciones para que estén disponibles para exportar
let initTheme, toggleTheme, setupTheme;

// Solo ejecutar este código en el navegador, no durante SSR
if (!isSSR) {
  // Función para inicializar los iconos del tema basado en el modo actual
  initTheme = function() {
    const sunIcons = document.querySelectorAll('.sun-icon');
    const moonIcons = document.querySelectorAll('.moon-icon');
    
    if (document.documentElement.classList.contains('dark')) {
      // Dark mode is active
      moonIcons.forEach(icon => icon.classList.add('hidden'));
      sunIcons.forEach(icon => icon.classList.remove('hidden'));
    } else {
      // Light mode is active
      sunIcons.forEach(icon => icon.classList.add('hidden'));
      moonIcons.forEach(icon => icon.classList.remove('hidden'));
    }
  };

  // Función para cambiar el tema
  toggleTheme = function() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    initTheme();
  };

  // Configuración inicial del tema
  setupTheme = function() {
    // Set initial theme based on localStorage or system preference
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: light)').matches)) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    // Initialize theme icons
    initTheme();

    // Añadir event listeners a los botones de tema
    document.querySelectorAll('#theme-toggle, #theme-toggle-mobile').forEach(button => {
      button.addEventListener('click', toggleTheme);
    });
  };

  // Ejecutar setup cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', setupTheme);

  // Reinicializar cuando Astro realice una transición de página
  document.addEventListener('astro:page-load', setupTheme);
} else {
  // Definir versiones vacías de las funciones para SSR
  initTheme = function() {};
  toggleTheme = function() {};
  setupTheme = function() {};
}

// Exportar funciones
export { setupTheme, toggleTheme, initTheme };