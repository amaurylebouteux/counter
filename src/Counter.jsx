import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count » 
  // Déclare une fonction setCount qui permet de modifier la valeur de count

  
  const [count, setCount] = useState(0);
  
  function event(event) {
    setCount(Number(event.target.value))
    
  }
  

  return (
    <div>
        <p>Choisissez un nombre de départ:<input type="number" onChange={event}></input></p>
        <p>Le compteur est  à : {count} </p>
        <button onClick={() => setCount(count + 1)}>
            +1
        </button>
        <button onClick={() => setCount(count - 1)}>
            -1
        s</button>
    </div>
  );
}

export default Counter;
