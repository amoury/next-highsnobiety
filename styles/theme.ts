export type TColors = {
  lightgray: string;
  darkgray: string;
}

export type TTheme = {
  colors: TColors;
  fonts: { bold: string; light: string; regular: string }
};

const theme: TTheme = {
  colors: {
    lightgray: '#ebebeb',
    darkgray: '#2e2e2e'
  },
  fonts: {
    bold: 'Univers-bold',
    light: 'Univers-light',
    regular: 'Univers-regular',
  }
}

export default theme;