import React from "react";
const ActiveTask = props => {
  const { id, text, priority, date } = props.task;
  const { handleDoneTask } = props;
  return (
    <p className="activeTask">
      <span>
        <strong className={priority ? "important" : null}>{text}</strong>- do{" "}
        {date}
      </span>
      <button onClick={() => handleDoneTask(id, true)}>zadanie wykonane</button>
      <button onClick={() => handleDoneTask(id, false)}>x</button>
    </p>
  );
};
export default ActiveTask;
