import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./Components/counter";

function App() {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem("count")) || 0; // Carga desde localStorage, por defecto 0
  });

  const [isCounterActive, setIsCounterActive] = useState(() => {
    return localStorage.getItem("isCounterActive") === "true"; // Carga estado desde localStorage
  });

  // Guardar el contador y el estado de activación en localStorage
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("isCounterActive", isCounterActive);
  }, [isCounterActive]);

  const numeroFavorito = () =>
    count === 11 && <p className="favorite-message">✨ El 11 es mi número favorito ✨</p>;

  const toggleCounter = (state) => {
    setIsCounterActive(state);
  };

  // Resetear el contador a 0
  const resetCounter = () => {
    if (isCounterActive) {
      setCount(0); // Resetear a 0 si el contador está activo
    }
  };

  return (
    <div className="app-container">
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="control-panel">
        <div className="switch-container">
          <button
            className={`switch-button ${isCounterActive ? "active" : ""}`}
            onClick={() => toggleCounter(true)}
          >
            ✅ ENCENDER
          </button>

          <button
            className={`switch-button ${!isCounterActive ? "active" : ""}`}
            onClick={() => toggleCounter(false)}
          >
            ❌ APAGAR
          </button>
        </div>

        <div className="status-light">
          <div
            className={`light ${isCounterActive ? "active" : "inactive"}`}
            style={{
              boxShadow: isCounterActive ? "0 0 20px #4caf50" : "0 0 20px #ff0000",
            }}
          />
        </div>
      </div>

      <Counter count={count} setCount={setCount} isActive={isCounterActive} />

      {/* Botón de reset */}
      <button
        className="reset-button"
        onClick={resetCounter}
        disabled={!isCounterActive} // Desactiva el botón si el contador está apagado
      >
        Reiniciar Contador
      </button>

      {numeroFavorito()}

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
