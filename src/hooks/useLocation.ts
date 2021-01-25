import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../store/slices/city'
import { getCurrentLattlong } from '../store/selectors/city';

export default function useLocation(): void {
  const dispatch = useDispatch();
  const location = useSelector(getCurrentLattlong)

  navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    if (!location) {
      dispatch(setLocation(`${latitude}, ${longitude}`))
    }
  });
}
