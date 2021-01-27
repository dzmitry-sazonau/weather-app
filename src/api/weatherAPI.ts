import axios, { AxiosResponse } from 'axios';
import { City } from '../model/city';
import { MeteorologicalInformation } from '../model/weather';

export async function getWeather(city: City): Promise<AxiosResponse<MeteorologicalInformation>> {
  const url = `location/${city.woeid}/`;

  const response = await axios.get<any>(url);
  return response;
}
