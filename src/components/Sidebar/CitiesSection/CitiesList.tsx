import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCities } from '../../../store/selectors/city';
import { CitiesListItem } from './CitiesListItem';

const StyledCitiesList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const CitiesList = (): JSX.Element => {
  const cities = useSelector(getCities);

  return (
    <StyledCitiesList>
      {cities
        .filter((item, index) => index < 4)
        .map(({ title, woeid }, index) => (
          <CitiesListItem
            key={woeid}
            title={title}
            woeid={woeid}
            withoutOffset={!index}
          />
        ))}
    </StyledCitiesList>
  )
}
