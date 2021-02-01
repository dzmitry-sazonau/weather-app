import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCity } from '../../../../store/slices/city';
import { ArrowRight } from '../../../shared/icon/ArrowRight';
import { getIsActiveCity } from '../../../../store/selectors/city';

interface CitiesListItemProps {
  title: string;
  woeid: number;
  withoutOffset: boolean;
}

interface StyledCitiesListItemProps {
  withoutOffset: boolean;
  active: boolean;
}

const StyledCitiesListItem = styled.div<StyledCitiesListItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 16px;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  font-weight: ${({ active, theme }) => active && theme.fontWeight.bold};
  border: 1px solid ${({ theme }) => theme.color.black_3};
  :hover {
    border: 1px solid ${({ theme }) => theme.color.gray_4};
  }
`

export const CitiesListItem = (
  { title, woeid, withoutOffset }: CitiesListItemProps
): JSX.Element => {
  const [isHovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const isActive = useSelector(getIsActiveCity(woeid))

  return (
    <StyledCitiesListItem
      onClick={() => dispatch(setActiveCity(woeid))}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      withoutOffset={withoutOffset}
      active={isActive}
    >
      {title}
      {isHovered && <ArrowRight />}
    </StyledCitiesListItem>
  )
}
