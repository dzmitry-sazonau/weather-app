import axios, { AxiosResponse } from 'axios';
import { City } from '../model/city';
import { MeteorologicalInformation } from '../model/weather';

export async function getWeather(city: City): Promise<AxiosResponse<MeteorologicalInformation>> {
  const url = `location/${city.woeid}/`;

  return axios.get<any>(url);
}
