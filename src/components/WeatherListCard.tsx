import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/configure-store';
import { WeatherCard } from './WeatherCard';
import { fetchWeather } from '../store/effects/weather';

const StyledListCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WeatherListCard = (): JSX.Element => {
  const dispatch = useDispatch();
  const weathers = useSelector((state: RootState) => {
    const [, ...others] = state.weatherSlice.weathers
    return others;
  });

  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch]);

  return (
    <StyledListCard>
      {weathers.map(({
        id, max_temp, min_temp, weather_state_abbr, applicable_date
      }) => (
        <WeatherCard
          key={id}
          maxTemp={max_temp}
          minTemp={min_temp}
          date={applicable_date}
          weatherState={weather_state_abbr}
        />
      ))}
    </StyledListCard>
  )
}
