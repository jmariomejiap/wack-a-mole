export const HIT = 'HIT';
export const MISSED = 'MISSED';

const moleWacked = (position) => {
  return {
    type: HIT,
    position,
  };
};

const moleMissed = () => {
  return {
    type: MISSED,
  };
};

export { moleWacked, moleMissed };
