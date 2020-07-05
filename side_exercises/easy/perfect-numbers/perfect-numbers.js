export const classify = n => {
  if (n > 0) {
    let aliquotsSum = 0;

    for (let i = 1; i < n; i++) {
      if (n % i == 0) aliquotsSum += i;
    }

    return aliquotsSum < n
      ? 'deficient'
      : aliquotsSum > n
      ? 'abundant'
      : 'perfect';
  } else
    throw new Error('Classification is only possible for natural numbers.');
};
