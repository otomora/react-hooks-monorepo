import React, { useState, useEffect } from 'react';
import './App.css';

function Advice() {
  const [advice, setAdvice] = useState("Cargando consejo...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdvice("No dejes para mañana lo que puedas hacer hoy.");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Ejemplo useEffect: Consejo del día</h2>
      <p>{advice}</p>
    </div>
  );
}

export default Advice;