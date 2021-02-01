import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getActiveTemp, getActiveWeather } from '../../../../store/selectors/weather';
import useTemperature from '../../../../hooks/useTemperature';
import { getActiveCity } from '../../../../store/selectors/city';
import { Pin } from '../../../shared/icon/Pin';
import useFormattedDate from '../../../../hooks/useFormattedDate';

const StyledBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`;

const StyledTempWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: -14%;
`;

const StyledTemp = styled.div`
  font-size: 144px;
  line-height: 169px;
`;

const StyledUnit = styled.div`
  font-size: 48px;
  line-height: 56px;
`;

const StyledWeatherState = styled.div`
  text-align: center;
  margin-top: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 36px;
  line-height: 42px;
  color ${({ theme }) => theme.color.gray_1};
`;

const StyledDate = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.color.gray_2};
`;

const StyledCity = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.color.gray_2};
`;

export const Body = (): JSX.Element => {
  const activeWeather = useSelector(getActiveWeather);
  const activeTemperature = useSelector(getActiveTemp);
  const activeCity = useSelector(getActiveCity)
  const formattedDate = useFormattedDate(activeWeather.applicable_date, true);
  const [temp, unit] = useTemperature(activeWeather.max_temp, activeTemperature);

  return (
    <StyledBody>
      <StyledTempWrap>
        <StyledTemp>{temp}</StyledTemp>
        <StyledUnit>{unit}</StyledUnit>
      </StyledTempWrap>

      <StyledWeatherState>{activeWeather.weather_state_name}</StyledWeatherState>

      <StyledDate>{formattedDate}</StyledDate>

      <StyledCity>
        <Pin />
        {activeCity.title}
      </StyledCity>
    </StyledBody>
  )
}
