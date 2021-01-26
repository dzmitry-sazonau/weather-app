import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Cross } from '../../shared/icon/Cross';
import { Search } from './Search';
import { CitiesList } from './CitiesList';
import { setWeatherCondition } from '../../../store/slices/sidebar';

const StyledCitiesSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 50px;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const StyledWrapForSection = styled.div`
  margin-top: 50px;
`

const StyledWrapForCross = styled.div`
  cursor: pointer;
`

export const CitiesSection = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <StyledCitiesSection>
      <StyledHeader>
        <StyledWrapForCross onClick={() => dispatch(setWeatherCondition())}>
          <Cross />
        </StyledWrapForCross>
      </StyledHeader>

      <StyledWrapForSection>
        <Search />
      </StyledWrapForSection>

      <StyledWrapForSection>
        <CitiesList />
      </StyledWrapForSection>
    </StyledCitiesSection>
  )
}
