import { SetStateAction, useEffect, useState } from 'react';
import { WeatherState } from '../model/weatherState';
import snow from '../assets/weathers/sn.png'
import sleet from '../assets/weathers/sl.png'
import hail from '../assets/weathers/h.png'
import thunderstorm from '../assets/weathers/t.png'
import heavyRain from '../assets/weathers/hr.png'
import lightRain from '../assets/weathers/lr.png'
import showers from '../assets/weathers/s.png'
import heavyCloud from '../assets/weathers/hc.png'
import lightCloud from '../assets/weathers/lc.png'
import clear from '../assets/weathers/c.png'

function useWeatherImage(state: WeatherState): SetStateAction<any> {
  const [url, setUrl] = useState<SetStateAction<any>>();

  useEffect(() => {
    switch (state) {
      case WeatherState.snow:
        setUrl(snow);
        break;
      case WeatherState.sleet:
        setUrl(sleet);
        break;
      case WeatherState.hail:
        setUrl(hail);
        break;
      case WeatherState.thunderstorm:
        setUrl(thunderstorm);
        break;
      case WeatherState.heavyRain:
        setUrl(heavyRain);
        break;
      case WeatherState.lightRain:
        setUrl(lightRain);
        break;
      case WeatherState.showers:
        setUrl(showers);
        break;
      case WeatherState.heavyCloud:
        setUrl(heavyCloud);
        break;
      case WeatherState.lightCloud:
        setUrl(lightCloud);
        break;
      case WeatherState.clear:
        setUrl(clear);
        break;
      default:
        break;
    }
  }, [state]);

  return [url];
}

export default useWeatherImage;
