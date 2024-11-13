import { useState } from "react";

function CounterComponent() {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
  
    return (
      <div>
        <p>Hur många gånger har du sett Star Wars filmerna tror du? {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }

  export default CounterComponent;
  