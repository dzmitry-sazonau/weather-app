import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCity } from '../store/effects/city';
import { Loading } from '../model/loading';
import { getCityLoader, getCurrentLattlong } from '../store/selectors/city';
import useLocation from './useLocation';

export default function useCityInitialize(): boolean {
  useLocation();
  const dispatch = useDispatch();
  const cityLoader = useSelector(getCityLoader);
  const lattlong = useSelector(getCurrentLattlong);

  useEffect(() => {
    if (lattlong) {
      dispatch(fetchCity({ lattlong }))
    }
  }, [dispatch, lattlong])

  return cityLoader === Loading.succeeded
}
