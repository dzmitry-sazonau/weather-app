import React from 'react';
import styled from 'styled-components';
import { TempList } from './TempList';
import { WeatherListCard } from './WeatherListCard';
import { HighlightListCard } from './HighlightListCard';

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px 120px;
  background: ${({ theme }) => theme.bg.main};
`;

const StyledWrap = styled.div`
  margin-top: 25px;
`

const StyledFooter = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.color.fourth};
  margin-top: 25px;
`

export const Dashboard = (): JSX.Element => {
  return (
    <StyledDashboard>
      <TempList />

      <StyledWrap>
        <WeatherListCard />
      </StyledWrap>

      <HighlightListCard />

      <StyledFooter>Dzmitry Sazonov @ DevChallenges.io</StyledFooter>
    </StyledDashboard>
  )
}
