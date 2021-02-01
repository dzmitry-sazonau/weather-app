import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { WeatherCard } from './WeatherCard';
import { getWeathersWithoutActive } from '../../../store/selectors/weather';
import { breakpoints } from '../../../breakpoints';

const StyledListCard = styled.div`
  display: flex;
  justify-content: space-between;
  
   ${breakpoints.xl} {
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 25px;
      row-gap: 25px;
  }
`

export default function WeatherListCard(): JSX.Element {
  const weathers = useSelector(getWeathersWithoutActive);

  return (
    <StyledListCard>
      {weathers.map(({
        id, max_temp, min_temp, weather_state_abbr, applicable_date
      }) => (
        <WeatherCard
          key={id}
          id={id}
          maxTemp={max_temp}
          minTemp={min_temp}
          date={applicable_date}
          weatherState={weather_state_abbr}
        />
      ))}
    </StyledListCard>
  )
}
