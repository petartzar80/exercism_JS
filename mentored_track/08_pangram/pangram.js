export const isPangram = sentence =>
  ALPHABET.every(letter => sentence.toLowerCase().includes(letter));

// version with Set:

// export const isPangram = sentence => {
//   const sentenceSet = new Set(sentence.toLowerCase());
//   return ALPHABET.every(letter => sentenceSet.has(letter));
// };

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];
