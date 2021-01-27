import axios, { AxiosResponse } from 'axios';
import { City } from '../model/city';
import { CityOptions } from '../model/city-options';

export async function getCityByOption(option: CityOptions): Promise<AxiosResponse<City[]>> {
  const key = Object.keys(option)[0];
  const url = `location/search/?${key}=${option[key]}`;

  const response = await axios.get<any>(url);
  return response;
}
