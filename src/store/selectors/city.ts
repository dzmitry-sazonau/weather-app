import { RootState } from '../configure-store';
import { City } from '../../model/city';
import { Loading } from '../../model/loading';

export const getActiveCity = (state: RootState): City => state.citySlice.activeCity;

export const getCityLoader = (state: RootState): Loading => state.citySlice.cityLoader;

export const getCurrentLattlong = (state: RootState): string => state.citySlice.currentLattlong;
