import { useEffect, useState } from 'react';
import { TemperatureType } from '../model/temperature-type';
import { celsiusToFahrenheit } from '../utils';

function useTemperature(temp: number, tempType: TemperatureType): any {
  const [formattedTemp, setTemp] = useState<number>(temp);

  useEffect(() => {
    setTemp(
      tempType === TemperatureType.fahrenheit ? celsiusToFahrenheit(temp) : temp
    );
  }, [temp, tempType])

  return [`${formattedTemp.toFixed()} ${tempType === TemperatureType.fahrenheit ? '°F' : '°C'}`];
}

export default useTemperature;
