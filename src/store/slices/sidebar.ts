import { createSlice } from '@reduxjs/toolkit';
import { SidebarCondition } from '../../model/sidebar-сondition';

interface InitialState {
  condition: SidebarCondition;
}

const initialState: InitialState = {
  condition: SidebarCondition.weather,
}

const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setWeatherCondition(state) {
      state.condition = SidebarCondition.weather
    },
    setCitiesCondition(state) {
      state.condition = SidebarCondition.cities
    },
  }
});

const { reducer, actions } = sidebar;

export const { setWeatherCondition, setCitiesCondition } = actions;

export default reducer;
