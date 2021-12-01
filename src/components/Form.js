import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.todoSubmit = this.todoSubmit.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  // var 1 [ 1 method = 1 action ] start
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
  }

  todoSubmit(event) {
    event.preventDefault();
    this.setState({
      input: this.state.input,
      items: [...this.state.items, this.state.input],
    });
  }
  // var 1 [ 1 method = 1 action ] end

  // var 2 [ 1 method = 2 actions ] start
  handleTodoSubmit(event) {
    event.preventDefault();
    this.setState({
      input: this.state.input,
      submit: this.state.input,
      items: [...this.state.items, this.state.input],
    });
  }
  // var 2 [ 1 method = 2 actions ] end

  clearFields() {
    this.setState({
      input: '',
      submit: '',
      items: [],
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.clearFields} type="button">
          Clear All
        </button>
        <h3>Input: {this.state.input}</h3>
        <h3>Submit: {this.state.submit}</h3>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;
