import React, { useReducer, useState } from 'react';
import './App.css'

const initialState = { 
  count: 0,
  history: [],
  isLocked: false
};

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return state.isLocked 
        ? state 
        : { 
            ...state, 
            count: state.count + 1, 
            history: [...state.history, state.count + 1] 
          };
    case 'decrement':
      return state.isLocked 
        ? state 
        : { 
            ...state, 
            count: state.count - 1, 
            history: [...state.history, state.count - 1] 
          };
    case 'reset':
      return { ...initialState };
    case 'multiply':
      return state.isLocked 
        ? state 
        : { 
            ...state, 
            count: state.count * action.payload,
            history: [...state.history, state.count * action.payload]
          };
    case 'set':
      return state.isLocked 
        ? state 
        : { 
            ...state, 
            count: action.payload,
            history: [...state.history, action.payload]
          };
    case 'toggle_lock':
      return { ...state, isLocked: !state.isLocked };
    case 'revert':
      return state.history.length > 1
        ? { 
            ...state, 
            count: state.history[state.history.length - 2],
            history: state.history.slice(0, -1)
          }
        : state;
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [customValue, setCustomValue] = useState('');

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: 'auto', 
      padding: '20px', 
      textAlign: 'center' 
    }}>
      <h2>Ejemplo useReducer: Contador Avanzado</h2>
      
      <div style={{ 
        fontSize: '2em', 
        margin: '20px 0',
        color: state.isLocked ? 'red' : 'black'
      }}>
        Contador: {state.count}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Incrementar
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrementar
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
        <button onClick={() => dispatch({ type: 'multiply', payload: 2 })}>
          Multiplicar × 2
        </button>
        <button onClick={() => dispatch({ type: 'toggle_lock' })}>
          {state.isLocked ? 'Desbloquear' : 'Bloquear'}
        </button>
        <button 
          onClick={() => dispatch({ type: 'revert' })}
          disabled={state.history.length <= 1}
        >
          Deshacer
        </button>
      </div>

      <div>
        <input 
          type="number" 
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          placeholder="Ingrese un valor"
          disabled={state.isLocked}
        />
        <button 
          onClick={() => {
            const num = parseInt(customValue);
            if (!isNaN(num)) {
              dispatch({ type: 'set', payload: num });
              setCustomValue('');
            }
          }}
          disabled={state.isLocked}
        >
          Establecer Valor
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Historial</h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          maxHeight: '100px',
          overflowY: 'auto'
        }}>
          {state.history.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CounterWithReducer;
