import React from 'react';
import Title from '../Title';

const Main = () => {
  return (
    <>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routed to: </span>
        <span style={{ color: 'var(--red)' }}>"Main" </span>
      </p>

      <Title title="It's main page, but still nothing here  Σ(‘◉⌓◉’) "> </Title>
    </>
  );
};

export default Main;
