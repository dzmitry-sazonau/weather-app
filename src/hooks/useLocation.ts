import { useDispatch } from 'react-redux';
import { setLocation } from '../store/slices/city'

export default function useLocation(): void {
  const dispatch = useDispatch();

  navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    dispatch(setLocation(`${latitude}, ${longitude}`))
  });
}
