import { useState } from "react";
import "./Input.scss";

function Input(props) {
  const [input, setInput] = useState();
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder ? props.placeholder : "Search"}
        value={props.inputValue}
        onChange={props.inputFunction}
        className={props.inputType}
      />
    </>
  );
}

export default Input;
