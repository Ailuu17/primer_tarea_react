import { useState } from "react";

function Contador() {
    // useState devuelve un par de valores:
    // 1. El estado actual (contador)
    // 2. Una función para actualizarlo (setContador)
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador +
      1)}>Sumar</button>
    </div>
  );
}


export default Contador;