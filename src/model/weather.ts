import { City } from './city';
import { WeatherState } from './weather-state';

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
  weather_state_abbr: WeatherState;
}

export interface MeteorologicalInformation extends City{
  consolidated_weather: Weather[];
}
