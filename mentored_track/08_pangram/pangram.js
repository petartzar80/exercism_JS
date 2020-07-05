export const isPangram = sentence => {
  sentence = sentence.toLowerCase();
  return ALPHABET.every(letter => sentence.includes(letter));
};

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

// version with Set:

// export const isPangram = sentence => {
//   sentence = sentence.toLowerCase();
//   const sentenceSet = new Set(sentence.match(REGEX));
//   return ALPHABET.length === sentenceSet.size;
// };

// const REGEX = /[a-z]/g;
