/* lang-init.js — Inicializa y sincroniza los selectores de idioma con I18n
   Compatible con ES, CA, EN, FR (y cualquier otro idioma que añadas) */

(function () {
    'use strict';

    // IDs de los selectores en todas las páginas (desktop y mobile)
    const SELECT_IDS = ['lang-select-desktop', 'lang-select-mobile'];

    // Obtenemos los elementos del DOM, ignorando los que no existan
    const selects = SELECT_IDS
        .map(id => document.getElementById(id))
        .filter(Boolean);

    // Si no hay ningún selector en la página, terminamos sin error
    if (!selects.length) return;

    // Recuperamos el idioma guardado o usamos español por defecto
    const savedLang = localStorage.getItem('site-lang') || 'es';

    // Establecemos el valor inicial de todos los selectores
    selects.forEach(select => {
        select.value = savedLang;
    });

    /**
     * Cambia el idioma en toda la aplicación.
     * @param {string} lang - Código de idioma (es, ca, en, fr...)
     */
    function switchLanguage(lang) {
        if (window.I18n && typeof window.I18n.setLang === 'function') {
            // I18n se encarga de actualizar la página y guardar la preferencia
            window.I18n.setLang(lang);
        } else {
            // Fallback: guardamos y recargamos manualmente
            localStorage.setItem('site-lang', lang);
            window.location.reload();
        }
        // Sincronizamos todos los selectores con el nuevo idioma
        selects.forEach(select => {
            select.value = lang;
        });
    }

    // Escuchamos los cambios manuales del usuario en cualquiera de los selectores
    selects.forEach(select => {
        select.addEventListener('change', (event) => {
            switchLanguage(event.target.value);
        });
    });

    // Si otro componente (como I18n) dispara un cambio de idioma, actualizamos los selectores
    window.addEventListener('languageChanged', (event) => {
        const newLang = event.detail?.lang || localStorage.getItem('site-lang') || 'es';
        selects.forEach(select => {
            select.value = newLang;
        });
    });
})();