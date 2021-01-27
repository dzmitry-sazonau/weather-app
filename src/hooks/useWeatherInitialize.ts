import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather } from '../store/effects/weather';
import { getWeatherLoader } from '../store/selectors/weather';
import { Loading } from '../model/loading';
import { getActiveCity, getCityLoader } from '../store/selectors/city';

export default function useWeatherInitialize(): boolean {
  const dispatch = useDispatch();
  const weatherLoader = useSelector(getWeatherLoader);
  const cityLoader = useSelector(getCityLoader);
  const activeCity = useSelector(getActiveCity);

  useEffect(() => {
    if (cityLoader === Loading.succeeded) {
      dispatch(fetchWeather())
    }
  }, [dispatch, cityLoader, activeCity]);

  return weatherLoader === Loading.succeeded
}
