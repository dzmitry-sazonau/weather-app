import { createAsyncThunk } from '@reduxjs/toolkit';
import { City } from '../../model/city';
import { getCityByName } from '../../api/cityAPI';

export const fetchCity = createAsyncThunk(
  'city/get',
  async (query: string): Promise<City> => {
    const { data } = await getCityByName(query);
    return data[0];
  }
);
