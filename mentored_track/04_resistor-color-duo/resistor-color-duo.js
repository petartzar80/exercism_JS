import { colorCode } from '../03_resistor-color/resistor-color';

export const decodedValue = ([color1, color2]) => {
  const code1 = colorCode(color1);
  const code2 = colorCode(color2);
  return code1 * 10 + code2;
};
