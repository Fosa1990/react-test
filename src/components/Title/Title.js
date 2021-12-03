import React from 'react';
import styled from 'styled-components';

const TitleH2 = styled.h2`
  color: var(--yellow);
`;

const Title = ({ title }) => {
  return <TitleH2>{title}</TitleH2>;
};

export default Title;
