export const HIT = 'HIT';
export const MISSED = 'MISSED';
export const GAMEON = 'GAMEON';
export const ACTIVATE_MOLE = 'ACTIVATE_MOLE';

// actionCreator. handles start and end of game.
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

const generateRandomMole = () => {
  return {
    type: ACTIVATE_MOLE,
    moleIndex: Math.floor(Math.random() * Math.floor(10)),
  };
};

export { gameControl, moleWacked, moleMissed, generateRandomMole };
