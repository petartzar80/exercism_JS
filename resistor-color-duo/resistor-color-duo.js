export const decodedValue = bands => {
  // prettier-ignore
  const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  return parseInt(
    COLORS.indexOf(bands[0]).toString() + COLORS.indexOf(bands[1].toString())
  );
};
