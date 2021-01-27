import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeather } from '../../api/weatherAPI';
import { RootState } from '../configure-store';
import { Weather } from '../../model/weather';

export const fetchWeather = createAsyncThunk(
  'weather/get',
  async (_, { getState }): Promise<Weather[]> => {
    const { citySlice } = <RootState>getState();
    const { data } = await getWeather(citySlice.activeCity);
    return data.consolidated_weather;
  }
);
