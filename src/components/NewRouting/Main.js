import React from 'react';
import Title from '../Title';
import { Fragment } from 'react';

const Main = () => {
  return (
    <Fragment>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routed to: </span>
        <span style={{ color: 'var(--red)' }}>"Main" </span>
      </p>

      <Title title="It's main page, but still nothing here  Σ(‘◉⌓◉’) "> </Title>
    </Fragment>
  );
};

export default Main;
