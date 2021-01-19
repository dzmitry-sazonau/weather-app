import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configure-store';
import { Weather } from '../../model/weather';
import { TemperatureType } from '../../model/temperature-type';

export const getWeathersWithoutActive = createSelector(
  [
    (state: RootState): Weather[] => state.weatherSlice.weathers,
    (state: RootState): Weather => state.weatherSlice.activeWeather,
  ],
  (weathers: Weather[], activeWeather: Weather) => {
    return weathers.filter(({ id }) => id !== activeWeather.id);
  },
);

export const getActiveTemp = (state: RootState): TemperatureType => state.weatherSlice.temperature;

export const getActiveWeather = (state: RootState): Weather => state.weatherSlice.activeWeather;
