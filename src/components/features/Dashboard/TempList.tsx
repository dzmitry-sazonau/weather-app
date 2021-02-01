import React from 'react';
import styled from 'styled-components';
import { temperatures } from '../../../utils';
import { Temp } from './Temp';
import { breakpoints } from '../../../breakpoints';

const StyledTempList = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  width: 100%;
  ${breakpoints.xl} { 
    padding: 0 50px;
  }
`;

export const TempList = (): JSX.Element => {
  return (
    <StyledTempList>
      {temperatures.map(({ label, type }, index) => (
        <Temp key={type} label={label} type={type} withoutOffset={!index} />
      ))}
    </StyledTempList>
  )
}
