import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { TempList } from './TempList';
import { breakpoints } from '../../breakpoints';

const WeatherListCard = lazy(() => import('./WeatherListCard'));
const HighlightListCard = lazy(() => import('./HighlightListCard'));

const StyledDashboardWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px 0;
  background: ${({ theme }) => theme.color.black_1};

  ${breakpoints.xxl} {
    padding: 30px 0;
  }

  ${breakpoints.xl} { 
    overflow: auto;
  }

  ${breakpoints.md} { 
    overflow: unset;
    height: unset;
  }
`;

const StyledDashboard = styled.div`
  max-width: 750px;
  margin: 0 auto;
  
  ${breakpoints.xl} { 
    margin: 0;
  }
`

const StyledWrapWeatherList = styled.div`
  margin-top: 25px;
  
  ${breakpoints.xl} { 
   display: flex;
   justify-content: center;
   align-items: center;
  }
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
