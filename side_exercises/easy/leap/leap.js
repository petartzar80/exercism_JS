export const isLeap = year => {
  const evendiv4 = year % 4 === 0;
  const evendiv100 = year % 100 === 0;
  const evendiv400 = year % 400 === 0;
  return evendiv4 && (!evendiv100 ? true : evendiv400);
};
