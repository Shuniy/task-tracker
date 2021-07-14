import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        style={{ backgroundColor: props.color }}
        className="btn"
      >
        {props.text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "black",
};

Button.propType = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
