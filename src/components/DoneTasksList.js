import React from "react";
import DoneTask from "./DoneTask";
const DoneTasksList = props => {
  const { tasks, handleDoneTask } = props;
  let tasksList = [...tasks];
  tasksList = tasksList.filter(task => task.finishedDate);
  tasksList.sort((a, b) => {
    a = a.finishedDate;
    b = b.finishedDate;
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
  const doneTasksNumber = tasksList.length;
  tasksList = tasksList.slice(0, 3);
  tasksList = tasksList.map(task => (
    <DoneTask key={task.id} task={task} handleDoneTask={handleDoneTask} />
  ));
  return (
    <section className="doneTasks">
      <h1>
        Zadania wykonane<em>({doneTasksNumber})</em>
      </h1>
      {Boolean(doneTasksNumber) && <h2>Ostatnie 3 wykonane zadania</h2>}
      {tasksList}
    </section>
  );
};
export default DoneTasksList;
