import React, { useState } from "react";
import NavbarComponent from "./Componentes/NavbarComponent";
import FormComponent from "./Componentes/FormComponent"
import TablaComponent from "./Componentes/TablaComponent";

function App() {
  const [datos, setDatos] = useState([]); // Función para agregar un nuevo dato desde el formulario
  const handleAddDato = (nuevoDato) => {
    setDatos([...datos, nuevoDato]);
  };

  return (
    <>
      <NavbarComponent />
      <FormComponent onAdd={handleAddDato} />
     

    </>
  )
}

export default App;
