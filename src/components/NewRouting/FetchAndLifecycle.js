import React from 'react';
import { Fragment } from 'react';
import Title from '../Title';
import Lifecycle from '../Lifecycle';
import FetchApi from '../FetchApi';

const FetchAndLifecycle = () => {
  return (
    <Fragment>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routing to: </span>
        <span style={{ color: 'var(--red)' }}>"Fetch &amp; Lifecycle" </span>
        <span style={{ color: 'var(--white)' }}>watch to URL (^_^)</span>
      </p>

      <Title title={'Component: FetchApi'}></Title>
      <FetchApi></FetchApi>
      <hr />
      <Title title={'Component: Lifecycle'}></Title>
      <p>Open console (^_^)</p>
      <Lifecycle></Lifecycle>
    </Fragment>
  );
};

export default FetchAndLifecycle;
