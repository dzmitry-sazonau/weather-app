import 'styled-components';

interface IBg {
  main: string;
  second: string;
  third: string;
  card: string;
  blueBtn: string;
  grayBtn: string;
}

interface IColor {
  main: string;
  second: string;
  third: string;
  fourth: string;
  sidebar: string;
  slider: string;
}

interface IFontWeight {
  main: number;
  bold: number;
  second: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: IBg,
    color: IColor,
    fontWeight: IFontWeight;
  }
}
