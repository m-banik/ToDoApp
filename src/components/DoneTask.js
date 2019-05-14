import React from "react";
const DoneTask = props => {
  const { id, text, priority, date, finishedDate } = props.task;
  const { handleDoneTask } = props;
  let time = new Date(finishedDate).toLocaleString();
  if (time.charAt(1) === ".") time = `0${time}`;
  return (
    <p className="doneTask">
      <span>
        <strong className={priority ? "important" : null}>{text}</strong>
        <em>(zrobić do {date})</em>
      </span>
      <span>
        - potwierdzenie wykonania {time}
        <button onClick={() => handleDoneTask(id, false)}>x</button>
      </span>
    </p>
  );
};
export default DoneTask;
