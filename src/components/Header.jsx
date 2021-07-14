import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import AddTask from "./AddTask";

function Header(props) {
  const [toggleForm, settoggleForm] = useState(true);
  function handleClick() {
    settoggleForm((prevToggleForm) => {
      return !prevToggleForm;
    });
  }

  return (
    <div>
      <header className="header">
        <h1 style={{ color: props.titleColor }}>{props.title}</h1>

        <Button
          onClick={handleClick}
          text={toggleForm ? "Add" : "Close"}
          color={toggleForm ? props.buttonColor : "red"}
        />
      </header>
      <div>{toggleForm ? <></> : <AddTask addTask={props.addTask} />}</div>
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
