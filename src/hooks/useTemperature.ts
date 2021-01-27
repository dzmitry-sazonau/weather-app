import { TemperatureType } from '../model/temperature-type';
import { celsiusToFahrenheit } from '../utils';

export default function useTemperature(temp: number, tempType: TemperatureType): string[] {
  const formattedTemp = (tempType === TemperatureType.fahrenheit
    ? celsiusToFahrenheit(temp)
    : temp).toFixed();
  const unitTempType = tempType === TemperatureType.fahrenheit ? '°F' : '°C';

  return [formattedTemp, unitTempType, formattedTemp + unitTempType];
}
