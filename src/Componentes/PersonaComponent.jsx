import { useState } from "react";

function Persona() {
    // useState devuelve un par de valores:
    // 1. El estado actual (nombre, apellido, email)
    // 2. Una función para actualizarlo (setNombre, setApellido, setEmail)
  const [nombre, setNombre] = useState(' ');
  const [apellido, setApellido] = useState(' ');
  const [edad, setEdad] = useState(' ');
  const [email, setEmail] = useState(' ');


  const [personas, setPersonas] = useState([]); //estado para almacenar las personas agregadas


    function agregarPersona() {
        const nuevaPersona = {nombre, apellido, edad, email}; //creo un objeto persona
        setPersonas([...personas, nuevaPersona]); //agrego el objeto persona al array personas
    }


  return (
    <div>

    <h2>Formulario de Persona:</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Edad: {edad}</p>
      <p>Email: {email}</p>


      <input
        type="text"
        placeholder="Nombre"
       
        onChange={(e) => setNombre(e.target.value)} />


      <input
        type="text"
        placeholder="Apellido"
       
        onChange={(e) => setApellido(e.target.value)} />
       
      <input
        type="int"
        placeholder="Edad"
       
        onChange={(e) => setEdad(e.target.value)} />


      <input
        type="email"
        placeholder="Email"  
       
        onChange={(e) => setEmail(e.target.value)} />


      <button onClick={() => {
          agregarPersona();
      }}>Agregar persona</button>


      <h3>Lista personas:</h3>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>{persona.nombre} {persona.apellido} - 
          {persona.edad} años - {persona.email}</li>
        ))}
      </ul>


    </div>
  );
}


export default Persona;