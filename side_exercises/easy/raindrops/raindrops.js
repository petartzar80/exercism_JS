export const convert = n => {
  let raindrops = '';
  for (const raindrop in SOUNDS) {
    n % raindrop === 0 ? (raindrops += SOUNDS[raindrop]) : null;
  }
  return raindrops !== '' ? raindrops : (raindrops += n);
};

const SOUNDS = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong',
};
