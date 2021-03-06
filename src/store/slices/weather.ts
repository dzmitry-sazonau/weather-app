import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading } from '../../model/loading';
import { fetchWeather } from '../effects/weather';
import { Weather } from '../../model/weather';
import { TemperatureType } from '../../model/temperature-type';

interface InitialState {
  weathers: Weather[];
  activeWeather: Weather,
  weatherLoader: Loading;
  temperature: TemperatureType
}

const initialState: InitialState = {
  weathers: [],
  activeWeather: {} as Weather,
  weatherLoader: Loading.idle,
  temperature: TemperatureType.celsius,
};

const weather = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleTemperature(state) {
      state.temperature = state.temperature === TemperatureType.celsius
        ? TemperatureType.fahrenheit
        : TemperatureType.celsius;
    },
    changeActiveWeather(state, action: PayloadAction<Weather['id']>) {
      state.activeWeather = state.weathers.find((item) => item.id === action.payload) || {} as Weather;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.weatherLoader = Loading.pending
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weathers = action.payload;
        [state.activeWeather] = action.payload;
        state.weatherLoader = Loading.succeeded;
      })
  }
});

const { reducer, actions } = weather;

export const { toggleTemperature, changeActiveWeather } = actions

export default reducer;
