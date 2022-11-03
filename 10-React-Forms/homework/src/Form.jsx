import React from "react";
import "./Form.css";

//!En el código vamos a crear un componente funcional llamado Form. Este va a retonar un <form />, que contenga un <label /> y un <input /> para el Username y el Password, respectivamente.

export default function Form() {
  //agregar comportamiento a nuestro componente, para eso vamos a agregarle un ESTADO(con hooks)
  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const [errors, setErrors] = React.useState({});

  // unificar el estado en un sólo objeto, donde cada input se refleje en una propiedad, para que sea más eficiente y escalable
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("caribosio@gmail.com");
    console.log("123456");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <form onSubmit={handleSubmit}> */}

      <div className="card">
        <h2>Login</h2>
        <div>
          <label className="username">Username</label>
          <div className="espacio-mail">
            <input
              type="text"
              name="username"
              onChange={handleInputChange}
              placeholder={"Invalid email"}
              value={input.username}
              className={errors.username && "danger"}
            />
          </div>
          {errors.username && <p className="danger">{errors.username}</p>}
        </div>
        <br />
        <div className="llenar">
          <label className="password">Password:</label>
          <div className="espacio-mail">
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder={"Only numbers are accepted"}
              value={input.password}
              className={errors.password && "danger"}
            />
          </div>
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <br />
        <button class="submit">
          <span>Submit</span>
        </button>
        {/* <input className="submit" type="submit" value="Submit" /> */}
      </div>
    </form>
  );
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    //controla que un texto tenga: por lo menos 1 string(\S+) / un @(@) / por lo menos 1 string(\S+) /un punto(\.) / por lo menos un string(\S+) ---> acá como sabemos que son tres lo podemos poner (\S{3})
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    //controla que un texto tenga un número por lo menos
    errors.password = "Password is invalid";
  }

  return errors;
}
