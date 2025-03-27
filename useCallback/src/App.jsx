import React, { useState, useCallback } from 'react';
import './App.css'



function AddItem({ onAdd }) {
  return (
    <button onClick={onAdd}>Agregar ítem</button>
  );
}

function RemoveItem({ onRemove }) {
  return (
    <button onClick={onRemove}>Eliminar último ítem</button>
  );
}

function ListWithCallback() {
  const [items, setItems] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const addItem = useCallback(() => {
    setItems(prev => [...prev, `Ítem ${prev.length + 1}`]);
  }, []);

  const removeItem = useCallback(() => {
    setItems(prev => prev.slice(0, -1));
  }, []);

  const toggleEditMode = useCallback(() => {
    setEditMode(prev => !prev);
  }, []);

  return (
    <div>
      <h2>Ejemplo useCallback: Lista de ítems</h2>
      <div>
        <AddItem onAdd={addItem} />
        <RemoveItem onRemove={removeItem} />
        <button onClick={toggleEditMode}>
          {editMode ? 'Desactivar' : 'Activar'} Modo Edición
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li 
            key={index} 
            style={{ 
              backgroundColor: editMode ? 'lightyellow' : 'transparent',
              cursor: editMode ? 'pointer' : 'default'
            }}
            onClick={editMode ? () => {
              const newName = prompt('Editar ítem:', item);
              if (newName) {
                setItems(prev => prev.map((i, idx) => 
                  idx === index ? newName : i
                ));
              }
            } : undefined}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>Total de ítems: {items.length}</p>
    </div>
  );
}

export default ListWithCallback;