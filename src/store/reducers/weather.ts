import { createSlice } from '@reduxjs/toolkit';
import { Loading } from '../../model/loading';
import { fetchWeather } from '../effects/weather';
import { Weather } from '../../model/weather';
import { Temperature } from '../../model/temperature';

interface InitialState {
  weathers: Weather[];
  loadingWeathers: Loading;
  temperature: Temperature
}

const initialState: InitialState = {
  weathers: [],
  loadingWeathers: Loading.idle,
  temperature: Temperature.celsius,
};

const weather = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weathers = action.payload;
        state.loadingWeathers = Loading.succeeded;
      })
      .addCase(fetchWeather.pending, (state) => {
        state.loadingWeathers = Loading.pending;
      })
  }
});

const { reducer } = weather;

export default reducer;
