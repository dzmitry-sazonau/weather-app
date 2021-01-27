import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import cloudBg from '../../../assets/image/cloud-background.png'
import { getActiveWeather } from '../../../store/selectors/weather';
import useWeatherImage from '../../../hooks/useWeatherImage';
import { Header } from './Header';
import { Body } from './Body';

const StyledWeatherSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledWeatherStateWrap = styled.div`
  position: relative;
`

const StyledCloudBackground = styled.div`
  width: 460px;
  height: 376px;
  background: url(${cloudBg}) no-repeat center center;
  opacity: .3;
`

const StyledImage = styled.img`
  position: absolute;
  height: 160px;
  top: 30%;
  right: 35%;
`;

export const WeatherSection = (): JSX.Element => {
  const activeWeather = useSelector(getActiveWeather);
  const url = useWeatherImage(activeWeather.weather_state_abbr);

  return (
    <StyledWeatherSection>
      <Header />

      <StyledWeatherStateWrap>
        <StyledCloudBackground />
        <StyledImage src={url} />
      </StyledWeatherStateWrap>

      <Body />
    </StyledWeatherSection>
  )
}
