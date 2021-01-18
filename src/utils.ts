import { Temperature } from './model/Temperature';
import { TemperatureType } from './model/temperature-type';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setItem = (key: string, item: any): void => {
  localStorage.setItem(key, JSON.stringify(item))
};

export const getItem = (key: string): any => {
  return JSON.parse(<string>localStorage.getItem(key))
}

export const temperatures: Temperature[] = [
  {
    label: '°C',
    type: TemperatureType.celsius
  },
  {
    label: '°F',
    type: TemperatureType.fahrenheit
  }
];

export const celsiusToFahrenheit = (celsius: number): number => (celsius * (9 / 5)) + 32;
