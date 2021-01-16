import axios, { AxiosResponse } from 'axios';
import { City } from '../model/city';

export async function getCityByName(name: string): Promise<AxiosResponse<City[]>> {
  const url = `https://www.metaweather.com/api/location/search/?query=${name}`;

  const response = await axios.get<any>(url);
  return response;
}
