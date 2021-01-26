import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../store/slices/city'
import { getCurrentLattlong } from '../store/selectors/city';
import { defineLocations } from '../utils';

export default function useLocation(): void {
  const dispatch = useDispatch();
  const location = useSelector(getCurrentLattlong)

  defineLocations((latitude, longitude) => {
    if (!location) {
      dispatch(setLocation(`${latitude}, ${longitude}`))
    }
  });
}
