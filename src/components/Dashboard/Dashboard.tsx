import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { TempList } from './TempList';

const WeatherListCard = lazy(() => import('./WeatherListCard'));
const HighlightListCard = lazy(() => import('./HighlightListCard'));

const StyledDashboardWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px 110px;
  background: ${({ theme }) => theme.color.black_1};
`;

const StyledDashboard = styled.div`
  max-width: 750px;
  margin: 0 auto;
`

const StyledWrapWeatherList = styled.div`
  margin-top: 25px;
`

const StyledFooter = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.color.gray_4};
  margin-top: 25px;
`

export const Dashboard = (): JSX.Element => {
  return (
    <StyledDashboardWrap>
      <StyledDashboard>
        <TempList />

        <Suspense fallback={<div>Loading...</div>}>
          <StyledWrapWeatherList>
            <WeatherListCard />
          </StyledWrapWeatherList>

          <HighlightListCard />
        </Suspense>

        <StyledFooter>Dzmitry Sazonov @ DevChallenges.io</StyledFooter>
      </StyledDashboard>
    </StyledDashboardWrap>
  )
}
