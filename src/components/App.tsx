import React from 'react';
import styled from 'styled-components';
import { Dashboard } from './Dashboard/Dashboard';
import { Sidebar } from './Sidebar/Sidebar';

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export default (): JSX.Element => {
  // navigator.geolocation.getCurrentPosition((a) => {
  //   console.log(a)
  // });
  return (
    <Wrap>
      <Sidebar />
      <Dashboard />
    </Wrap>
  );
}
