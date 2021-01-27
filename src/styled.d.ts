import 'styled-components';

interface IColor {
  black_1: string;
  black_2: string;
  black_3: string;
  gray_1: string;
  gray_2: string;
  gray_3: string;
  gray_4: string;
  gray_5: string;
  white: string;
  blue: string;
  yellow: string;
}

interface IFontWeight {
  medium: number;
  bold: number;
  regular: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: IColor,
    fontWeight: IFontWeight;
  }
}
