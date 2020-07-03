export const compute = (strand1, strand2) => {
  let hammingDistance = 0;
  if (strand1.length === strand2.length) {
    for (let i = 0; i < strand1.length; i++) {
      strand1[i] !== strand2[i] && hammingDistance++;
    }
  } else if (!strand1.length) {
    throw new Error('left strand must not be empty');
  } else if (!strand2.length) {
    throw new Error('right strand must not be empty');
  } else throw new Error('left and right strands must be of equal length');
  return hammingDistance;
};
