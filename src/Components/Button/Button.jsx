import { useState } from "react";
import "./Button.scss";

function Button(props) {
  const [Button, setButton] = useState();
  return (
    <>
      <button className={props.buttonType}>
        <p>{props.buttonText}</p>
      </button>
    </>
  );
}

export default Button;
