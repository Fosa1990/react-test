// API : thecocktaildb.com
// Used1 fetch url: https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
// Used2 fetch url: https://www.thecocktaildb.com/api/json/v1/1/random.php

import React, { Component, Fragment } from 'react';
import Title from '../Title';

export class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.drinks,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <Fragment key={`${item.idDrink}_fragment`}>
              <li key={`${item.idDrink}_list_item`}>
                Random cocktail is: <Title title={item.strDrink}></Title>
              </li>
              <img
                key={`${item.idDrink}_img`}
                loading="lazy"
                width="150"
                height="150"
                src={item.strDrinkThumb}
                alt={item.idDrink}
              />
              <p>{item.strAlcoholic}</p>
              <p>{item.strInstructions}</p>
            </Fragment>
          ))}
        </ul>
      );
    }
  }
}

export default FetchApi;
