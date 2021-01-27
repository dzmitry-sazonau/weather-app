import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weather from './slices/weather';
import city from './slices/city';
import sidebar from './slices/sidebar';

const store = configureStore({
  reducer: combineReducers({
    weatherSlice: weather,
    citySlice: city,
    sidebarSlice: sidebar,
  }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>
