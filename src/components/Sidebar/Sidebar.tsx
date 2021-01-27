import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { WeatherSection } from './WeatherSection/WeatherSection';
import { CitiesSection } from './CitiesSection/CitiesSection';
import { getActiveSidebarCondition } from '../../store/selectors/sidebar';
import { SidebarCondition } from '../../model/sidebar-сondition';
import { breakpoints } from '../../breakpoints';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 460px;
  background: ${({ theme }) => theme.color.black_3};
  
  ${breakpoints.xxl} { 
    min-width: 360px;
  }
`;

export const Sidebar = (): JSX.Element => {
  const sidebarCondition = useSelector(getActiveSidebarCondition);

  return (
    <StyledSidebar>
      {
        sidebarCondition === SidebarCondition.weather
          ? <WeatherSection />
          : <CitiesSection />
      }
    </StyledSidebar>
  )
}
