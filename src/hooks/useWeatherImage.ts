import { SetStateAction, useEffect, useState } from 'react';
import { WeatherState } from '../model/weather-state';
import snow from '../assets/weathers/snow.png'
import sleet from '../assets/weathers/sleet.png'
import hail from '../assets/weathers/hail.png'
import thunderstorm from '../assets/weathers/thunderstorm.png'
import heavyRain from '../assets/weathers/heavyRain.png'
import lightRain from '../assets/weathers/lightRain.png'
import showers from '../assets/weathers/showers.png'
import heavyCloud from '../assets/weathers/heavyCloud.png'
import lightCloud from '../assets/weathers/lightCloud.png'
import clear from '../assets/weathers/clear.png'

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
