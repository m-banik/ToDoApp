import React, { Component, Fragment as div } from "react";
import Form from "./Form";
import ActiveTasksList from "./ActiveTasksList";
import DoneTasksList from "./DoneTasksList";
import "../styles/App.css";
class App extends Component {
  state = {
    currentId: null,
    tasks: [
      {
        id: 0,
        text: "naprawić kran w kuchni",
        priority: false,
        date: "2019-02-07",
        finishedDate: null
      },
      {
        id: 1,
        text: "zrobić zakupy",
        priority: false,
        date: "2019-04-28",
        finishedDate: null
      },
      {
        id: 2,
        text: "wyprowadzić psa",
        priority: true,
        date: "2019-02-08",
        finishedDate: null
      },
      {
        id: 4,
        text: "zrobić dobry uczynek",
        priority: true,
        date: "2019-12-31",
        finishedDate: null
      }
    ]
  };
  componentDidMount() {
    this.setState({
      currentId: this.state.tasks.length + 1
    });
  }
  handleNewTask = newTask => {
    newTask.id = this.state.currentId;
    newTask.finishedDate = null;
    const tasks = [...this.state.tasks, newTask];
    this.setState(prevState => ({
      tasks,
      currentId: prevState.currentId + 1
    }));
  };
  handleDoneTask = (TaskId, isDone) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.map(task => {
      if (task.id === TaskId) {
        if (isDone) task.finishedDate = new Date().getTime();
        else return null;
      }
      return task;
    });
    tasks = tasks.filter(task => task !== null);
    this.setState({
      tasks
    });
  };
  render() {
    return (
      <div className="app">
        <Form handleNewTask={this.handleNewTask} />
        <ActiveTasksList
          tasks={this.state.tasks}
          handleDoneTask={this.handleDoneTask}
        />
        <DoneTasksList
          tasks={this.state.tasks}
          handleDoneTask={this.handleDoneTask}
        />
      </div>
    );
  }
}
export default App;
