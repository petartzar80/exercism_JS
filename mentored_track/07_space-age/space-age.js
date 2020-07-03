export const age = (planet, secs) => {
  return (
    Math.round((secs / EARTH_YEAR_IN_SECS / ORBITAL_PERIOD[planet]) * 100) / 100
  );
};

const EARTH_YEAR_IN_SECS = 31557600;
const ORBITAL_PERIOD = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
