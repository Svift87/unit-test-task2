const healthComparator = (a, b) => a.health - b.health;

const validateInput = (input) => {
  if (!Array.isArray(input)) {
    throw new Error('should receive an array as input');
  }
};

const validatePlayer = (player) => {
  if (typeof player !== 'object') {
    throw new Error('invalid input: player must be an object');
  }
  const { name, health } = player;
  if ((typeof name !== 'string') || (typeof health !== 'number')) {
    throw new Error('wrong or missing properties of player');
  }
  return true;
};

const sortPlayers = (players) => {
  validateInput(players);
  players.forEach(player => validatePlayer(player));
  return players.sort(healthComparator);
};

export default sortPlayers;
