import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({ username: "", password: "" });
  // input={username, password}
  //! ↑ Mas limpio que hacer todo esto ↓
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateUser(value) {
    //m.com --->false
    //m@gmail.com ----> true
    if (!/\S+@\S+\.\S+/.test(value)) {
      //el estado error deja de estar vacío
      // ↓hacé esto
      setError("el usuario tiene que ser un email");
    } else {
      //sino el estado de error va a estar vacio
      setError("");
    }
    //sino setea el valor en setUsername
    setUsername(value);
  }

  let onSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(error);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className={error && "danger"}
        //↑si error es true agregale una clase danger(lo coloca en rojo al recuadro)-->definido en index.html
        name="username"
        value={username}
        placeholder="username"
        onChange={(e) => validateUser(e.target.value)}
      />
      {!error ? null : <span>{error}</span>}
      <input
        name="password"
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

//Vamos a hacer
//vincular cada input con un estado
