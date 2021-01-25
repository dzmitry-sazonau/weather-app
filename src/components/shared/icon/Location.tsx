import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Icon from './Icon';

const Svg = styled(Icon)` 
  width: 22px; 
  height: 22px;
`;

export const LocationIcon = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  return (
    <Svg viewBox="0 0 48 48">
      <path d="M0 0h48v48h-48z" fill="none" />
      <path fill={themeContext.color.white} d="M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm17.88 6c-.92-8.34-7.54-14.96-15.88-15.88v-4.12h-4v4.12c-8.34.92-14.96 7.54-15.88 15.88h-4.12v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88h4.12v-4h-4.12zm-17.88 16c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z" />
    </Svg>
  )
}
