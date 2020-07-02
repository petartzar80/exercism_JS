export const toRna = dna =>
  [...dna].map(nucleotide => TRANSLATED[nucleotide]).join('');

const TRANSLATED = {
  C: 'G',
  G: 'C',
  T: 'A',
  A: 'U',
};
