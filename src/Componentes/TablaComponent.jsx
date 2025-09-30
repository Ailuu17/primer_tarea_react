import React from "react";

function TablaComponent({props}) {

    const [datos, setDatos] = React.useState([]); // Estado para almacenar los datos

  return (
    <table class="tabla">

    <h2>Tabla de Datos:</h2>

      <thead>   
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
        </tr>
      </thead>

      <tbody>
        {datos.length === 0 ? (
          <tr>
            <td>Sin datos</td>
          </tr>
        ) : (
            
          props.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.edad}</td>
            </tr>
          ))
        )}
      </tbody>

    </table>
  );
}

export default TablaComponent;