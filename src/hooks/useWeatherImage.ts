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

export default function useWeatherImage(state: WeatherState): string {
  return {
    [WeatherState.snow]: snow,
    [WeatherState.sleet]: sleet,
    [WeatherState.hail]: hail,
    [WeatherState.thunderstorm]: thunderstorm,
    [WeatherState.heavyRain]: heavyRain,
    [WeatherState.lightRain]: lightRain,
    [WeatherState.showers]: showers,
    [WeatherState.heavyCloud]: heavyCloud,
    [WeatherState.lightCloud]: lightCloud,
    [WeatherState.clear]: clear,
  }[state];
}
