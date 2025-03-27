import React, { useRef, useState, useEffect } from 'react';
import './App.css'

function RenderCounter() {
  // useRef para contar renders sin causar re-renderizaciones
  const renderCount = useRef(0);
  
  // useState para manejar el estado del contador
  const [contador, setContador] = useState(0);

  // useEffect sin dependencias se ejecuta después de cada render
  useEffect(() => {
    // Incrementa el conteo de renders
    renderCount.current += 1;
  });

  return (
    <div>
      <h2>Ejemplo useRef: Contador de renders</h2>
      <p>Contador: {contador}</p>
      <p>Renderizado: {renderCount.current} veces</p>
      <button onClick={() => setContador(prev => prev + 1)}>
        Incrementar Contador
      </button>
    </div>
  );
}

export default RenderCounter;