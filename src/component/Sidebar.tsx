import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 450px;
`;

export const Sidebar = (): JSX.Element => {
  return (
    <Wrap>
      Sidebar
    </Wrap>
  )
}
