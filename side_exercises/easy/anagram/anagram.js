export const findAnagrams = (word, list) => {
  word = word.toLowerCase();
  return list.filter(elem => {
    elem = elem.toLowerCase();
    return (
      [...word].every(letter => elem.includes(letter)) &&
      word !== elem &&
      word.length === elem.length &&
      [...word].sort().every((val, idx) => val === [...elem].sort()[idx])
    );
  });
};
