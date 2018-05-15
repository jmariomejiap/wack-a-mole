export const HIT = 'HIT';
export const MISSED = 'MISSED';
export const GAMEON = 'GAMEON';

const gameControl = () => {
  return {
    type: GAMEON,
  };
};

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

export { gameControl, moleWacked, moleMissed };
