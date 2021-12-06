import { Fragment } from 'react';

const Error = () => {
  return (
    <Fragment>
      <p>
        <span style={{ color: 'var(--red)' }}> 404 </span>
        <span style={{ color: 'var(--green)' }}>Page not found. Σ(‘◉⌓◉’)</span>
      </p>
    </Fragment>
  );
};

export default Error;
