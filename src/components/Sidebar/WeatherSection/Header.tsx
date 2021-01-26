import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from '../../shared/Button';
import { LocationButton } from '../../shared/LocationButton';
import { setCitiesCondition } from '../../../store/slices/sidebar';
import { setLocation } from '../../../store/slices/city';
import { defineLocations } from '../../../utils';

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 50px;
`;

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <Button label="Search for places" handle={() => dispatch(setCitiesCondition())} />
      <LocationButton
        handle={() => {
          defineLocations((latitude, longitude) => dispatch(setLocation(`${latitude}, ${longitude}`)));
        }}
      />
    </StyledHeader>
  )
}
