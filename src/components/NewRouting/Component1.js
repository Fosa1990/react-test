import React from 'react';
import { Fragment } from 'react';
import Title from '../Title';
import Lifecycle from '../Lifecycle';
import FetchApi from '../FetchApi';

const Component1 = () => {
  return (
    <Fragment>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routing to: </span>
        <span style={{ color: 'var(--red)' }}>Component "1" </span>
        <span style={{ color: 'var(--white)' }}>watch to URL (^_^)</span>
      </p>
      <hr />
      <Title title={'Component: FetchApi'}></Title>
      <FetchApi></FetchApi>
      <hr />
      <Title title={'Component: Lifecycle'}></Title>
      <p>Open console (^_^)</p>
      <Lifecycle></Lifecycle>
    </Fragment>
  );
};

export default Component1;
