export const steps = n => {
  let counter = 0;
  if (n >= 1) {
    while (n !== 1) {
      n % 2 === 0 ? (n /= 2) : (n = n * 3 + 1);
      counter++;
    }
  } else throw new Error('Only positive numbers are allowed');
  return counter;
};
