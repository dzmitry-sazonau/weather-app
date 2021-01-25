import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { toggleTemperature } from '../../store/slices/weather'
import { Temperature } from '../../model/temperature';
import { getActiveTemp } from '../../store/selectors/weather';

interface StyledTempProps {
  isActive: boolean;
  withoutOffset: boolean;
}

interface TempProps extends Temperature {
  withoutOffset: boolean;
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
  margin-left: ${({ withoutOffset }) => !withoutOffset && '12px'};
  ${({ isActive, theme }) => isActive
    ? css`
      background: ${theme.color.white};
      color: ${theme.color.black_2};
    ` : css`
      background: ${theme.color.gray_5};
      color: ${theme.color.white};
    `}
`;

export const Temp = ({ label, type, withoutOffset }: TempProps): JSX.Element => {
  const dispatch = useDispatch();
  const activeTemp = useSelector(getActiveTemp);

  return (
    <StyledTemp
      withoutOffset={withoutOffset}
      isActive={activeTemp === type}
      onClick={() => activeTemp !== type && dispatch(toggleTemperature())}
    >
      {label}
    </StyledTemp>
  )
}
