import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { toggleTemperature } from '../../store/reducers/weather'
import { Temperature } from '../../model/Temperature';
import { getActiveTemp } from '../../store/selectors/weather';

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
  ${({ isActive, theme }) => isActive
    ? css`
      background: ${theme.bg.second};
      color: ${theme.color.second};
    ` : css`
      background: ${theme.bg.third};
      color: ${theme.color.main};
    `}
`;

export const Temp = ({ label, type, isFirst }: TempProps): JSX.Element => {
  const dispatch = useDispatch();
  const activeTemp = useSelector(getActiveTemp);

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
