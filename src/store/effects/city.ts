import { createAsyncThunk } from '@reduxjs/toolkit';
import { City } from '../../model/city';
import { getCityByOption } from '../../api/cityAPI';
import { CityOptions } from '../../model/city-options';

export const fetchCity = createAsyncThunk(
  'city/get',
  async (option: CityOptions): Promise<City[]> => {
    const { data } = await getCityByOption(option);
    return data;
  }
);
