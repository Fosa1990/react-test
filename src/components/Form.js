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
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

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

  render() {
    return (
      <div>
        <form onSubmit={(this.handleSubmit, this.todoSubmit)}>
          <input
            value={this.state.input}
            onChange={this.handleChange}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
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
