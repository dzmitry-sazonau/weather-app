import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather } from '../store/effects/weather';
import { fetchCity } from '../store/effects/city';
import { getWeatherLoader } from '../store/selectors/weather';
import { Loading } from '../model/loading';
import { getCityLoader, getCurrentLattlong } from '../store/selectors/city';
import useLocation from './useLocation';

export default function useWeatherDataInitialize(): boolean {
  useLocation();
  const dispatch = useDispatch();
  const weatherLoader = useSelector(getWeatherLoader);
  const cityLoader = useSelector(getCityLoader);
  const lattlong = useSelector(getCurrentLattlong);

  useEffect(() => {
    if (cityLoader === Loading.succeeded) {
      dispatch(fetchWeather())
    }
  }, [dispatch, cityLoader]);

  useEffect(() => {
    if (lattlong) {
      dispatch(fetchCity({ lattlong }))
    }
  }, [dispatch, lattlong])

  return cityLoader === Loading.succeeded && weatherLoader === Loading.succeeded
}
