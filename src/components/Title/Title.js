import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return <TitleH2>{title}</TitleH2>;
};

const TitleH2 = styled.h2`
  color: var(--yellow);
`;

export default Title;
