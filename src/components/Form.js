import React, { Component } from "react";
class Form extends Component {
  date = new Date();
  state = {
    text: "",
    checkbox: false,
    date: this.date.toISOString().slice(0, 10),
    maxDate: `${this.date.toISOString().slice(0, 4) * 1 + 1}-12-31`,
    isCorrect: true
  };
  handleInputChange = e => {
    const typeOfValue = e.target.type;
    let value = e.target.value;
    if (typeOfValue === "checkbox") value = e.target.checked;
    this.setState({
      [typeOfValue]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.length < 3 || !Boolean(this.state.date)) {
      return this.setState({
        isCorrect: false
      });
    }
    const { handleNewTask } = this.props;
    const newTask = {
      text: this.state.text,
      priority: this.state.checkbox,
      date: this.state.date
    };
    handleNewTask(newTask);
    this.date = new Date();
    this.setState({
      text: "",
      checkbox: false,
      date: this.date.toISOString().slice(0, 10),
      maxDate: `${this.date.toISOString().slice(0, 4) * 1 + 1}-12-31`,
      isCorrect: true
    });
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="taskContent">
              <span>Zadanie:</span>
              <input
                type="text"
                id="taskContent"
                value={this.state.text}
                onChange={this.handleInputChange}
                placeholder="Treść zadania..."
              />
            </label>
            <label htmlFor="priority">
              <input
                type="checkbox"
                id="priority"
                checked={this.state.checkbox}
                onChange={this.handleInputChange}
              />
              <span>Priorytet</span>
            </label>
          </p>
          <p>
            <label htmlFor="date">
              <span>Termin wykonania:</span>
              <input
                type="date"
                id="date"
                value={this.state.date}
                min={this.state.date}
                max={this.state.maxDate}
                onChange={this.handleInputChange}
              />
            </label>
          </p>
          <button>dodaj</button>
        </form>
        {!this.state.isCorrect && (
          <h1>
            Treść zadania musi zawierać przynajmniej 3 znaki oraz mieć
            wyznaczony termin wykonania!
          </h1>
        )}
      </div>
    );
  }
}
export default Form;
