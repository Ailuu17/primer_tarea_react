import React, { useState } from "react";
import NavbarComponent from "./Componentes/NavbarComponent";
import FromComponent from "./Componentes/FormComponent"; 
import TablaComponent from "./Componentes/TablaComponent";
import ContadorComponent from "./Componentes/ContadorComponent";
import PersonaComponent from "./Componentes/personaComponent";

function App() {
  const [datos, setDatos] = useState([]); // Función para agregar un nuevo dato desde el formulario
  const handleAddDato = (nuevoDato) => {
    setDatos([...datos, nuevoDato]);
  };

  return (
    <>
      <NavbarComponent />
      <FormComponent onAdd={handleAddDato} />
      <TablaComponent datos={datos} />
      <ContadorComponent />
      <PersonaComponent />
    </>
  )
}

export default App;
