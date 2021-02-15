import React from "react";
import "./Button.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return(
    <Link to="/sign-up" className="btn-mobile">
    <button
      className={`btn ${checkButtonStyle} ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  </Link>
  )
};

export default Button;