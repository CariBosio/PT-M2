import React from "react";
import "./Contact.css";

const Contact = () => {
  const [errors, setErrors] = React.useState({});

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
<div className="contacto">
      <div className="log">
        <h2 className="nomform">Acceso</h2>
        <div>
          <label className="username">Username</label>
          <div className="espacio-mail">
            <input
              type="text"
              name="username"
              onChange={handleInputChange}
              placeholder={"Invalid username"}
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
              placeholder={"Only numbers"}
              value={input.password}
              className={errors.password && "danger"}
            />
          </div>
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <br />
        <button>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Enviar</span>
</button>

        {/* <button className="submit">
          <span className="enviar">Submit</span>
        </button> */}
        {/* <input className="submit" type="submit" value="Submit" /> */}
      </div>
      </div>
    </form>
  );
};

export default Contact;

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


