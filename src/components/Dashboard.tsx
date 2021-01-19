import React from 'react';
import styled from 'styled-components';
import { TempList } from './TempList';
import { WeatherListCard } from './WeatherListCard';

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 50px 150px;
  background: ${({ theme }) => theme.bg.main};
`;

const StyledWrap = styled.div`
  margin-top: 65px;
`

export const Dashboard = (): JSX.Element => {
  return (
    <StyledDashboard>
      <TempList />

      <StyledWrap>
        <WeatherListCard />
      </StyledWrap>
    </StyledDashboard>
  )
}
