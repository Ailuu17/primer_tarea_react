import { useState } from "react";
import TablaComponent from "./TablaComponent";

function FormComponent({ onAdd }) {
  const [nombre, setNombre] = useState(' ');
  const [edad, setEdad] = useState(' ');

  const [Form, setForm] = useState([]); //estado para almacenar los Forms agregados


    function agregarForm() {
        const nuevoForm = {nombre, edad}; //creo un objeto Form
        setForm([...Form, nuevoForm]); //agrego el objeto Form al array Forms
    }


    const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || edad === "") return;
    onAdd({ nombre, edad });
    setNombre("");
    setEdad("");
  };


  return (
    <>
    <form class="form" onSubmit={handleSubmit}>

      <h2>Formulario:</h2>
        <p>Nombre: {nombre}</p>
        <p>Edad: {edad}</p>

      <input class="input"
        type="text"
        placeholder="Nombre"
        value={nombre}
    
        onChange={e => setNombre(e.target.value)}
      />

      <input class="input"
        type="number"
        placeholder="Edad"
        value={edad}
 
        onChange={e => setEdad(e.target.value)}
      />

      <button class="button" onClick={() => {
          agregarForm();
      }}>Agregar</button>


      <h3>Lista:</h3>
      <ul>
        {Form.map((form, index) => (
          <li key={index}>{form.nombre} - {form.edad} años</li>
        ))}
      </ul>

    </form>
    <TablaComponent datos={Form} />
    </>
  );
}

export default FormComponent;

