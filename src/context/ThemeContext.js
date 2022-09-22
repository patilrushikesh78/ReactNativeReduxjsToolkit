import React, {createContext, useState} from 'react';
import {Colors} from '../constants/colors';
export const ThemeContext = createContext({
  dynamicColors: Colors[0],
  changeColors: colors => {},
});
const ThemeProvider = ({children}) => {
  const [dynamicColors, setDynamicColors] = useState(Colors[0]);
  const changeColors = colorItem => {
    let updatedColors = {
      DARK_PRIMARY_COLOR: colorItem.DARK_PRIMARY_COLOR,
      PRIMARY_COLOR: colorItem.PRIMARY_COLOR,
      TEXT_ICON_COLOR: colorItem.TEXT_ICON_COLOR,
      ACCENT_COLOR: colorItem.ACCENT_COLOR,
      PRIMARY_TEXT_COLOR: colorItem.PRIMARY_TEXT_COLOR,
      SECONDARY_TEXT_COLOR: colorItem.SECONDARY_TEXT_COLOR,
      DIVIDER_COLOR: colorItem.DIVIDER_COLOR,
    };
    setDynamicColors(updatedColors);
  };
  return (
    <ThemeContext.Provider
      value={{dynamicColors: dynamicColors, changeColors: changeColors}}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
