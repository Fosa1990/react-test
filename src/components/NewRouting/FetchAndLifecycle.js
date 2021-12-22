import React from 'react';
import Title from '../Title';
import Lifecycle from '../Lifecycle';
import FetchApi from '../FetchApi';

const FetchAndLifecycle = () => {
  return (
    <>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routed to: </span>
        <span style={{ color: 'var(--red)' }}>"Fetch &amp; Lifecycle" </span>
      </p>

      <Title title={'Component: FetchApi'}></Title>
      <FetchApi></FetchApi>
      <hr />
      <Title title={'Component: Lifecycle'}></Title>
      <p>Open console (^_^)</p>
      <Lifecycle></Lifecycle>
    </>
  );
};

export default FetchAndLifecycle;
