export const HIT = 'HIT';
export const MISSED = 'MISSED';

const moleWacked = () => {
  return {
    type: HIT,
  };
};

const moleMissed = () => {
  return {
    type: MISSED,
  };
};

export { moleWacked, moleMissed };
