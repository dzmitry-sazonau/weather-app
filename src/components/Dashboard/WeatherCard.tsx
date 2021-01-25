import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useCircumstanceOfTime from '../../hooks/useСircumstanceOfTime';
import useTemperature from '../../hooks/useTemperature';
import useWeatherImage from '../../hooks/useWeatherImage';
import { WeatherState } from '../../model/weather-state';
import { getActiveTemp } from '../../store/selectors/weather';

interface StyledTempProps {
  second?: boolean;
}

interface WeatherCardProps {
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
  background: ${(props) => props.theme.color.black_3};
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
  maxTemp, minTemp, date, weatherState
}: WeatherCardProps): JSX.Element => {
  const activeTempType = useSelector(getActiveTemp);
  const formattedDate = useCircumstanceOfTime(date);
  const url = useWeatherImage(weatherState);
  const [,,formattedMaxTempWithUnit] = useTemperature(maxTemp, activeTempType);
  const [,,formattedMinTempWithUnit] = useTemperature(minTemp, activeTempType);

  return (
    <StyledCard>
      <StyledDate>{formattedDate}</StyledDate>
      <StyledImage src={url} />
      <StyledWrapTemp>
        <StyledTemp>{formattedMaxTempWithUnit}</StyledTemp>
        <StyledTemp second>{formattedMinTempWithUnit}</StyledTemp>
      </StyledWrapTemp>
    </StyledCard>
  )
}
