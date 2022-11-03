import React, { useState } from "react";

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

//modeloFamiliar ---> objeto
//familiar ---> arreglo de objetos

function DinamicInputs() {
  const modeloFamiliar = { nombre: "" };
  //const [familiar, setFamiliar] = useState([{ ...modeloFamiliar }]); //se generan campos nuevos de familiar, pero sin nombre adentro, porque modeloFamiliar es ""
  const [familiar, setFamiliar] = useState([]); //para que se agregue el nombre del nuevo familiar
  //en este instante familiar = [{nombre:''}]

  const [persona, setPersona] = useState({
    nombre: "",
  });
  //en este instante persona = {nombre:''}

  const agregaFamiliar = () => {
    setFamiliar([...familiar, { ...modeloFamiliar }]);
    setPersona({ nombre: "" });
  };
  //en este instante familiar =[copia de familia y le agrega {modelo familiar}]

  const handlePersonaChange = (e) =>
    //setea persona
    setPersona({
      ...persona,
      [e.target.name]: e.target.value, //quedate con el nombre del input(copia) y esa propiedad pisala (sobreescribí el valor que está entre [])
    });

  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //no te refresques
    console.log(familiar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange} //cuando alguien escriba algo, ejecuta handlePersonaChange
      />
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
        // familiar se actualizó
      />
      {familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
            type="text"
            name={`nombre-${i}`}
            id={i}
            data-name="nombre"
            value={el.nombre}
            onChange={handleFamiliarChange}
          />
        </div>
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default DinamicInputs;
