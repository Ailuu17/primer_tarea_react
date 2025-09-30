import React, { useState } from "react";

function FormComponent({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || edad === "") return;
    onAdd({ nombre, edad });
    setNombre("");
    setEdad("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={e => setEdad(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormComponent;