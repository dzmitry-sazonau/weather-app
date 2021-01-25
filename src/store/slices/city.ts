import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading } from '../../model/loading';
import { City } from '../../model/city';
import { fetchCity } from '../effects/city'

interface InitialState {
  cities: City[];
  activeCity: City;
  cityLoader: Loading;
  currentLattlong: string;
}

const initialState: InitialState = {
  cities: [],
  activeCity: {} as City,
  cityLoader: Loading.idle,
  currentLattlong: ''
};

const city = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.currentLattlong = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.cityLoader = Loading.pending;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        [state.activeCity] = action.payload;
        state.cities = action.payload;
        state.cityLoader = Loading.succeeded;
      })
  }
})

const { reducer, actions } = city;

export const { setLocation } = actions

export default reducer;
