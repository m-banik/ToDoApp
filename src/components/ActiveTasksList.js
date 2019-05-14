import React from "react";
import ActiveTask from "./ActiveTask";
const ActiveTasksList = props => {
  const { tasks, handleDoneTask } = props;
  let tasksList = [...tasks];
  tasksList = tasksList.filter(task => !task.finishedDate);
  const tasksNumber = tasksList.length;
  tasksList.sort((a, b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  tasksList = tasksList.map(task => (
    <ActiveTask key={task.id} task={task} handleDoneTask={handleDoneTask} />
  ));
  return (
    <section className="activeTasks">
      {tasksNumber ? (
        <h1>Wykaz aktywnych zadań</h1>
      ) : (
        <h1>Brak aktywnych zadań do wykonania</h1>
      )}
      {tasksList}
    </section>
  );
};
export default ActiveTasksList;
