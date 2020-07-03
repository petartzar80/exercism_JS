export const transform = old => {
  const expected = {};
  for (const score in old) {
    old[score].forEach(
      letter => (expected[letter.toLowerCase()] = parseInt(score))
    );
  }
  return expected;
};
