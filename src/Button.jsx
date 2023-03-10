import { useState } from "react";
import "./styles.css";
const Button = (props) => {
  const [click, setClick] = useState(0);

  function clickHandler() {
    return setClick(Math.ceil(Math.random() * 200));
  }

  return (
    <div>
      <h1> Click each for your cars speed </h1>
      <button onClick={clickHandler}>
        <div className="Button-Car">{click} </div>
      </button>
    </div>
  );
};

export default Button;
