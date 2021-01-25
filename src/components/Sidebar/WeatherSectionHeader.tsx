import React from 'react';
import styled from 'styled-components';
import { Button } from '../shared/Button';
import { LocationButton } from '../shared/LocationButton';

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 46px;
`;

export const WeatherSectionHeader = (): JSX.Element => {
  return (
    <StyledHeader>
      <Button label="Search for places" handle={() => console.log('Search')} />
      <LocationButton handle={() => console.log('Geo')} />
    </StyledHeader>
  )
}
