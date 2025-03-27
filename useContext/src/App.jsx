import React, { createContext, useContext, useState } from 'react';
import './App.css'

// Creamos el contexto con un valor predeterminado
const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {}
});

function Greeting() {
  // Consumimos el contexto para obtener el idioma actual
  const { language } = useContext(LanguageContext);
  
  // Objeto de traducciones
  const translations = {
    en: {
      greeting: "Hello!",
      title: "useContext Example: Greeting"
    },
    es: {
      greeting: "¡Hola!",
      title: "Ejemplo useContext: Saludo"
    }
  };

  return (
    <div>
      <h2>{translations[language].title}</h2>
      <p>{translations[language].greeting}</p>
    </div>
  );
}

function AppLanguage() {
  // Estado para manejar el idioma
  const [language, setLanguage] = useState('en');

  // Función para alternar entre idiomas
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div>
        <Greeting />
        <button onClick={toggleLanguage}>
          {language === 'en' 
            ? "Switch to Spanish" 
            : "Cambiar a Inglés"}
        </button>
      </div>
    </LanguageContext.Provider>
  );
}

export default AppLanguage;