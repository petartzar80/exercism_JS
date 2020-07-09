export const parse = phrase =>
  phrase.replace(/['_]/g, '').match(ACRONYM_REGEX).join('').toUpperCase();

const ACRONYM_REGEX = new RegExp(/\b(\w)/g);
