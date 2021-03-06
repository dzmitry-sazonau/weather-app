import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useFormattedDate from '../../../hooks/useFormattedDate';
import useTemperature from '../../../hooks/useTemperature';
import useWeatherImage from '../../../hooks/useWeatherImage';
import { WeatherState } from '../../../model/weather-state';
import { getActiveTemp } from '../../../store/selectors/weather';
import { changeActiveWeather } from '../../../store/slices/weather';

interface StyledTempProps {
  second?: boolean;
}

interface WeatherCardProps {
  id: number
  maxTemp: number;
  minTemp: number;
  date: string;
  weatherState: WeatherState;
}

const StyledCard = styled.div`
  width: 140px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 18px 22px;
  cursor: pointer;
  background: ${(props) => props.theme.color.black_3};

  :hover {
    background: ${(props) => props.theme.color.gray_5};
  }
`;

const StyledDate = styled.div`
  font-size: 16px;
  line-height: 19px;
`;

const StyledImage = styled.img`
  height: 65px;
`;

const StyledWrapTemp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledTemp = styled.div<StyledTempProps>`
  font-size: 16px;
  line-height: 19px;
  color: ${({ second, theme }) => (second ? theme.color.gray_1 : theme.color.white)}
`;

export const WeatherCard = ({
  maxTemp, minTemp, date, weatherState, id
}: WeatherCardProps): JSX.Element => {
  const dispatch = useDispatch();
  const activeTempType = useSelector(getActiveTemp);
  const formattedDate = useFormattedDate(date);
  const url = useWeatherImage(weatherState);
  const [,,formattedMaxTempWithUnit] = useTemperature(maxTemp, activeTempType);
  const [,,formattedMinTempWithUnit] = useTemperature(minTemp, activeTempType);

  return (
    <StyledCard onClick={() => dispatch(changeActiveWeather(id))}>
      <StyledDate>{formattedDate}</StyledDate>
      <StyledImage src={url} />
      <StyledWrapTemp>
        <StyledTemp>{formattedMaxTempWithUnit}</StyledTemp>
        <StyledTemp second>{formattedMinTempWithUnit}</StyledTemp>
      </StyledWrapTemp>
    </StyledCard>
  )
}
