import React, { Component } from 'react';

/*
 * Используем Enumerable чтобы не болеть антипаттерном "магические числа"
 */
const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
};

class RadioButtons extends Component {
  state = {
    ...INITIAL_STATE,
  };

  /*
   * Для всех инпутов создаем один обарботчик
   * Различать инпуты будем по атрибуту name
   */
  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password, agreed, gender } = this.state;

    console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
      Agreed: ${agreed}
      Gender: ${gender}
    `);

    // Проп который передается форме для вызова при сабмите
    // this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender } = this.state;

    return (
      <form autocomplete="off" onSubmit={this.handleSubmit}>
        <section>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter login"
              name="login"
              value={login}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Agree to terms
            <input
              type="checkbox"
              name="agreed"
              checked={agreed}
              onChange={this.handleChange}
            />
          </label>

          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
export default RadioButtons;
