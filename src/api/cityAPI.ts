import axios, { AxiosResponse } from 'axios';
import { City } from '../model/city';
import { CityOptions } from '../model/city-options';

export async function getCityByOption(option: CityOptions): Promise<AxiosResponse<City[]>> {
  const key = Object.keys(option)[0];
  const url = `https://www.metaweather.com/api/location/search/?${key}=${option[key]}`;

  return axios.get<any>(url);
}
