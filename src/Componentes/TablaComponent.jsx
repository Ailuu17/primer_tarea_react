import React from "react";

function TablaComponent({ datos }) {
  return (
    <table border="1" cellPadding="8" style={{ margin: "auto", marginBottom: "2rem" }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {datos.length === 0 ? (
          <tr>
            <td colSpan="2" style={{ textAlign: "center" }}>Sin datos</td>
          </tr>
        ) : (
          datos.map((item, idx) => (
            <tr key={idx}>
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