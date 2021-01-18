import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { toggleTemperature } from '../store/reducers/weather'
import { Temperature } from '../model/Temperature';
import { RootState } from '../store/configure-store';

interface StyledTempProps {
  isActive: boolean;
  isFirst: boolean;
}

interface TempProps extends Temperature {
  isFirst: boolean;
}

const StyledTemp = styled.div<StyledTempProps>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  border-radius: 54px;
  cursor: pointer;
  margin-left: ${({ isFirst }) => !isFirst && '12px'};
  ${({ isActive }) => isActive
    ? css`
      background: #E7E7EB;
      color: #110E3C;
    ` : css`
      background: #585676;
      color: #E7E7EB;
    `}
`;

export const Temp = ({ label, type, isFirst }: TempProps): JSX.Element => {
  const dispatch = useDispatch();
  const activeTemp = useSelector((state: RootState) => state.weatherSlice.temperature);

  return (
    <StyledTemp
      isFirst={isFirst}
      isActive={activeTemp === type}
      onClick={() => activeTemp !== type && dispatch(toggleTemperature())}
    >
      {label}
    </StyledTemp>
  )
}
