document.addEventListener('DOMContentLoaded', () => {

    const translations = {
      es: {
        title: "¡Hola Mundo ! 👋",
        subtitle: "Este es mi proyecto desplegado en la nube.",
        thanks: "¡Gracias por visitarnos!",
        button: "Switch to English"
      },
      en: {
        title: "Hello World ! 👋",
        subtitle: "This is my project deployed in the cloud.",
        thanks: "Thanks for visiting!",
        button: "Cambiar a Español"
      }
    };
  
    const htmlEl = document.documentElement; // La etiqueta <html>
    const titleEl = document.getElementById('text-title');
    const subtitleEl = document.getElementById('text-subtitle');
    const thanksEl = document.getElementById('text-thanks');
    const buttonEl = document.getElementById('lang-toggle');
  
    buttonEl.addEventListener('click', () => {
      const currentLang = htmlEl.getAttribute('lang');
      
      if (currentLang === 'es') {
      
        htmlEl.setAttribute('lang', 'en');
        titleEl.textContent = translations.en.title;
        subtitleEl.textContent = translations.en.subtitle;
        thanksEl.textContent = translations.en.thanks;
        buttonEl.textContent = translations.en.button;
      } else {
        
        htmlEl.setAttribute('lang', 'es');
        titleEl.textContent = translations.es.title;
        subtitleEl.textContent = translations.es.subtitle;
        thanksEl.textContent = translations.es.thanks;
        buttonEl.textContent = translations.es.button;
      }
    });
  
  });