import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { WeatherSection } from './WeatherSection';
import { CitiesSection } from './CitiesSection';
import { getActiveSidebarCondition } from '../../store/selectors/sidebar';
import { SidebarCondition } from '../../model/sidebar-сondition';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 460px;
  background: ${({ theme }) => theme.bg.card};
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
