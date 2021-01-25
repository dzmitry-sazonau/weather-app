import React from 'react';
import styled from 'styled-components';
import { Dashboard } from './Dashboard/Dashboard';
import { Sidebar } from './Sidebar/Sidebar';
import useWeatherDataInitialize from '../hooks/useWeatherDataInitialize';
import { Loader } from './shared/Loader';

const StyledWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const StyledLoaderWrap = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.black_1};
`

export default (): JSX.Element => {
  const isDataLoaded = useWeatherDataInitialize();

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
