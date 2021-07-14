import React, { useState } from "react";

function AddTask(props) {
  const [Text, setText] = useState("");
  const [Day, setDay] = useState("");
  const [Reminder, setReminder] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "text") {
      setText((prevText) => {
        return value;
      });
    } else if (name === "day") {
      setDay(value);
    } else if (name === "reminder") {
      setReminder((prevReminder) => {
        return !prevReminder;
      });
    }
  }

  function handleSubmit() {}

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>
          <strong>Task</strong>{" "}
        </label>
        <input
          name="text"
          type="text"
          placeholder="Add Task"
          value={Text}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label>
          <strong>Day & Time</strong>
        </label>
        <input
          name="day"
          type="text"
          placeholder="Add Day & Time"
          value={Day}
          onChange={handleChange}
        />
      </div>
      <div className="form-control form-control-check">
        <label>
          <strong>Set Reminder</strong>
        </label>
        <input
          name="reminder"
          type="checkbox"
          checked={Reminder}
          value={Reminder}
          onChange={handleChange}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
}

export default AddTask;
