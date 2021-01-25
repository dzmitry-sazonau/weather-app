import React from 'react';
import styled from 'styled-components';
import { Location } from './icon/Location';

interface LocationButtonProps {
  handle: () => void
}

const StyledLocationButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #71747D;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const LocationButton = ({ handle }: LocationButtonProps): JSX.Element => {
  return (
    <StyledLocationButton onClick={handle}>
      <Location />
    </StyledLocationButton>
  )
};
