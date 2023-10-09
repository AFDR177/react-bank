import React, { useState } from "react";
// import "./index.css";
import "./index.scss";

import Button from "../button";
import Danger from "./svg/danger.svg";

export default function FormField({ onSubmit, button }) {
  const [value, setValue] = useState(""); //відповідає за значення в нашому полі email
  const [valueP, setValueP] = useState(""); //відповідає за значення в нашому полі password

  const handleChangeP = (e) => setValueP(e.target.value); //для того щоб задавати значення нашого поля (input)
  const handleChange = (e) => setValue(e.target.value); //для того щоб задавати значення нашого поля (input)
  // console.log(value); // вивід в консоль для перевірки

  const handleSubmit = () => {
    console.log(value, valueP);
  };

  // changeIcon функція показує/скриває пароль
  const changeIcon = (obj) => {
    obj.target.toggleAttribute("show");
    // console.log(obj.target.toggleAttribute("show"));

    const input = obj.target.previousElementSibling;

    const type = input.getAttribute("type");

    if (type === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
    input.focus();
  };

  return (
    <div className="form">
      <div className="form__item">
        <label for="email" class="field__label">
          Email:
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={value}
          placeholder="Enter your email"
          class="field__input validation"
        />
      </div>

      <div className="form__item field--password">
        <label for="password" class="field__label">
          Password:
        </label>
        <div class="field__wrapper">
          <input
            // type="password"
            onChange={handleChangeP}
            value={valueP}
            name="password"
            placeholder="Enter your password"
            class="field__input field__input--pass validation"
          />
          <span onClick={changeIcon} class="field__icon click"></span>
        </div>
      </div>

      <p className="feild__have-acc">
        Already have an account?{" "}
        <a href="/signup" className="feild__link-signin">
          Sign In
        </a>
      </p>

      <Button onClick={handleSubmit} className="button">
        {button}
      </Button>
      <Button onClick={null} className="button button--error">
        <span>
          <img src={Danger} alt="error" />
        </span>
        A user with the same name is already exist
      </Button>
    </div>
  );
}
