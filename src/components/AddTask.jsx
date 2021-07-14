import React, { useState } from "react";
import uuid from "react-uuid";

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

  function handleSubmit(event) {
    event.preventDefault();

    if (!Text) {
      alert("Please add a task");
      return;
    }
    if (!Day) {
      alert("Please add a Date");
      return;
    }

    let months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
    let weekdays = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };

    let day = new Date(Day);

    let dayResult = `${
      months[day.getMonth()]
    }, ${day.getDate()}, ${day.getFullYear()}, ${
      weekdays[day.getDay()]
    } at ${day.getHours()}:${day.getMinutes()}`;

    let id = uuid();

    console.log(dayResult);

    props.addTask({
      id,
      Text,
      dayResult,
      Reminder,
    });

    setText("");
    setDay("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>
          <strong>Task</strong>
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
          type="datetime-local"
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
