import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Icon from './Icon';

const Svg = styled(Icon)` 
  width: 20px; 
  height: 20px;
`;

export const Pin = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  return (
    <Svg viewBox="0 0 512 512">
      <path
        stroke={themeContext.color.gray_2}
        fill={themeContext.color.gray_2}
        d="m259.61 16.04c-1.2-.03-2.4-.04-3.61-.04s-2.41.01-3.61.04c-120.32 2.45-194.23 133.97-136.25 240.09l126.96 232.39c5.74 9.97 20.06 9.97 25.8 0l126.96-232.39c57.98-106.12-15.93-237.64-136.25-240.09zm-3.61 199.96c-30.93 0-56-25.07-56-56s25.07-56 56-56 56 25.07 56 56-25.07 56-56 56z"
      />
    </Svg>
  )
}
