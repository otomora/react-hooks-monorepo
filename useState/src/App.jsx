
import React, { useState } from 'react';

function ToggleSwitch() {
  const [activo, setActivo] = useState(false);

  const toggle = () => {
    setActivo(prev => !prev);
  };

  return (
    <div>
      <h2>Ejemplo useState: Encendido y Apagado </h2>
      <p>{activo ? "Encendido" : "Apagado"}</p>
      <button onClick={toggle}>Interructor</button>
    </div>
  );
}

export default ToggleSwitch;