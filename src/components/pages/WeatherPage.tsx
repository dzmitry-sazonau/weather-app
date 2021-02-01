import React from 'react';
import styled from 'styled-components';
import { Dashboard } from '../features/Dashboard/Dashboard';
import { Sidebar } from '../features/Sidebar/Sidebar';
import useWeatherInitialize from '../../hooks/useWeatherInitialize';
import { Loader } from '../shared/Loader';
import useCityInitialize from '../../hooks/useCityInitialize';
import { breakpoints } from '../../breakpoints';

const StyledWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;

  ${breakpoints.md} { 
    flex-direction: column;
    overflow: auto;
  }
`

const StyledLoaderWrap = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.black_1};
`

export default function WeatherPage(): JSX.Element {
  const cityLoaded = useCityInitialize()
  const weatherLoaded = useWeatherInitialize();
  const isDataLoaded = cityLoaded && weatherLoaded;

  return (
    <>
      { isDataLoaded ? (
        <StyledWrap>
          <Sidebar />
          <Dashboard />
        </StyledWrap>
      ) : (
        <StyledLoaderWrap>
          <Loader />
        </StyledLoaderWrap>
      )}
    </>
  );
}
