export function Counter({ count, setCount, isActive }) {
    return (
      <div className="card">
        <button 
          onClick={() => setCount((count) => count + 1)}
          disabled={!isActive}
        >
          +
        </button>
        <h2>{count}</h2>
        <button 
          onClick={() => setCount((count) => count - 1)}
          disabled={!isActive}
        >
          -
        </button>
      </div>
    )
  }