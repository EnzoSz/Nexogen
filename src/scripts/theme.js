// Verificar si estamos en el navegador
const isSSR = typeof window === 'undefined';

if (!isSSR) {
  // Script solo ejecutado en el cliente
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
  });

  // También inicializar el tema cuando Astro completa una transición de página
  document.addEventListener('astro:page-load', () => {
    initTheme();
  });

  function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
    const sunIcons = document.querySelectorAll('.sun-icon');
    const moonIcons = document.querySelectorAll('.moon-icon');

    // Función para actualizar los íconos según el tema
    function updateIcons(isDark) {
      sunIcons.forEach(icon => {
        icon.classList.toggle('hidden', !isDark);
      });
      moonIcons.forEach(icon => {
        icon.classList.toggle('hidden', isDark);
      });
    }

    // Función para cambiar el tema
    function toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        updateIcons(false); // Mostrar ícono de luna en modo claro
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        updateIcons(true); // Mostrar ícono de sol en modo oscuro
      }
    }

    // Inicializar los íconos basados en el tema actual
    if (document.documentElement.classList.contains('dark')) {
      updateIcons(true); // Mostrar ícono de sol en modo oscuro
    } else {
      updateIcons(false); // Mostrar ícono de luna en modo claro
    }

    // Agregar event listeners a los botones de tema
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (themeToggleMobileBtn) {
      themeToggleMobileBtn.addEventListener('click', toggleTheme);
    }
  }
}

// Función para obtener el tema actual, uso seguro en SSR
export function getTheme() {
  if (isSSR) return 'dark'; // Valor por defecto para SSR
  return localStorage.theme === 'dark' || 
         (!('theme' in localStorage) && 
          window.matchMedia('(prefers-color-scheme: dark)').matches) 
         ? 'dark' 
         : 'light';
}