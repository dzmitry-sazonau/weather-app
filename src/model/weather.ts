import { City } from './city';

export interface Weather {
  id: number;
  air_pressure: number;
  applicable_date: string;
  humidity: number;
  max_temp: number;
  min_temp: number;
  visibility: number;
  wind_direction_compass: string;
  wind_speed: number;
}

export interface MeteorologicalInformation extends City{
  consolidated_weather: Weather[];
}
