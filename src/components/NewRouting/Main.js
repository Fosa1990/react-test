import React from 'react';
import Title from '../Title';
import { Fragment } from 'react';

const Main = () => {
  return (
    <Fragment>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routing to: </span>
        <span style={{ color: 'var(--red)' }}>Main </span>
        <span style={{ color: 'var(--white)' }}>watch to URL (^_^)</span>
      </p>

      <Title title="It's main page, but still nothing here  Σ(‘◉⌓◉’) "> </Title>
    </Fragment>
  );
};

export default Main;
