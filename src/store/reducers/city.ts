import { createSlice } from '@reduxjs/toolkit';
import { Loading } from '../../model/loading';
import { City } from '../../model/city';
import { getItem, setItem } from '../../utils';
import { fetchCity } from '../effects/city'

interface InitialState {
  cities: City[];
  activeCity: City;
  loadingCity: Loading;
}

// const KeyForCities = 'cities'
// const KeyForActiveCity = 'cities'

const initialState: InitialState = {
  cities: [
    {
      title: 'Minsk',
      woeid: 834463
    },
    {
      title: 'Warsaw',
      woeid: 523920
    },
    {
      title: 'London',
      woeid: 44418
    },
  ],
  activeCity: {
    title: 'Minsk',
    woeid: 834463
  },
  loadingCity: Loading.idle,
};

const city = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.loadingCity = Loading.pending;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.activeCity = action.payload;
        state.cities.push(action.payload);
        state.loadingCity = Loading.succeeded;
      })
  }
})

const { reducer } = city;

// export const { getCities, saveCities } = actions

export default reducer;
