import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weather from './reducers/weather';
import city from './reducers/city';

const store = configureStore({
  reducer: combineReducers({
    weatherSlice: weather,
    citySlice: city
  }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>
