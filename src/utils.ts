import { Temperature } from './model/temperature';
import { TemperatureType } from './model/temperature-type';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setItem = (key: string, item: any): void => {
  localStorage.setItem(key, JSON.stringify(item))
};

export const getItem = (key: string): any => {
  return JSON.parse(<string>localStorage.getItem(key))
}

export const standardFormatForDate = 'E, d LLL'

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

export const defineLocations = (successCallback: (latitude: number, longitude: number) => void): void => {
  navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    successCallback(latitude, longitude);
  })
}

export const celsiusToFahrenheit = (celsius: number): number => (celsius * (9 / 5)) + 32;
