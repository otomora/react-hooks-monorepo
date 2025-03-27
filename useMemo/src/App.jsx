import React, { useState, useMemo } from 'react';
import './App.css'


function FilteredNumbers() {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 20 }, (_, i) => i + 1)
  );
  
  const [filterType, setFilterType] = useState('even');
  
  const filterOptions = {
    even: num => num % 2 === 0,
    odd: num => num % 2 !== 0,
    positive: num => num > 0,
    greaterThanTen: num => num > 10
  };

  const filtered = useMemo(() => {
    return numbers.filter(filterOptions[filterType]);
  }, [numbers, filterType]);

 
  const addNumber = () => {
    const newNumber = numbers.length > 0 
      ? Math.max(...numbers) + 1 
      : 1;
    setNumbers(prev => [...prev, newNumber]);
  };

  const removeLastNumber = () => {
    setNumbers(prev => prev.slice(0, -1));
  };

  return (
    <div>
      <h2>Ejemplo useMemo: Números filtrados</h2>
      
      <div>
        <h3>Filtro actual: {filterType}</h3>
        <div>
          {Object.keys(filterOptions).map(type => (
            <button 
              key={type} 
              onClick={() => setFilterType(type)}
              style={{ 
                fontWeight: filterType === type ? 'bold' : 'normal',
                margin: '0 5px'
              }}
            >
              {type === 'even' ? 'Pares' : 
               type === 'odd' ? 'Impares' : 
               type === 'positive' ? 'Positivos' : 
               'Mayor que 10'}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button onClick={addNumber}>Agregar Número</button>
        <button onClick={removeLastNumber}>Eliminar Último</button>
      </div>

      <div>
        <p>Números totales: {numbers.length}</p>
        <p>Números filtrados: {filtered.length}</p>
      </div>

      <ul>
        {filtered.map((num, index) => (
          <li 
            key={`${num}-${index}`} 
            style={{ 
              color: num % 2 === 0 ? 'blue' : 'red',
              fontWeight: num > 10 ? 'bold' : 'normal'
            }}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredNumbers;