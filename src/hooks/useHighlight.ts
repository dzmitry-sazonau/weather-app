import { useEffect, useState } from 'react';
import { Weather } from '../model/weather';
import { Highlight, HighlightType } from '../model/highlight';

function useHighlight(weather: Weather): any {
  const [highlight, setHighlight] = useState<Highlight[]>([])

  useEffect(() => {
    setHighlight([
      {
        label: 'Wind status',
        value: `${weather.wind_speed?.toFixed()} mph`,
        type: HighlightType.direction,
        subValue: weather.wind_direction_compass,
      },
      {
        label: 'Humidity',
        value: `${weather.humidity}%`,
        type: HighlightType.slider,
      },
      {
        label: 'Visibility',
        value: `${weather.visibility?.toFixed(1)} miles`,
        type: HighlightType.default,
      },
      {
        label: 'Air Pressure',
        value: `${weather.air_pressure} mb`,
        type: HighlightType.default,
      },
    ])
  }, [weather])

  return [highlight]
}

export default useHighlight;
