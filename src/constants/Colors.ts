const light = '#11181C';
const dark = '#0A1F50';
const tintColorLight = '#fff';
const tintColorDark = '#fff';
const bottomBorderColor = '#9CA3AF';
const searchBarColor = '#FFFDFD';
export const themeColors = {
  light: {
    text: '#000000',
    tabBarIcon: '#0A79DF',
    tabBarBackgroundColor: '#fff',
    bottomBorderColor,
    searchBarColor,
    background: light,
    tint: tintColorLight,
    icon: '#000000',
    tabIconDefault: '#ffffff',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    tabBarIcon: '#0A79DF',
    tabBarBackgroundColor: '#050505',
    bottomBorderColor,
    searchBarColor,
    background: dark,
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
