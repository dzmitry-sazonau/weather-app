import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCities } from '../../../../store/selectors/city';
import { CitiesListItem } from './CitiesListItem';

const StyledCitiesList = styled.div`
  display: flex;
  flex-direction: column;
`

export const CitiesList = (): JSX.Element => {
  const cities = useSelector(getCities);

  return (
    <StyledCitiesList>
      {cities.map(({ title, woeid }, index) => (
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
