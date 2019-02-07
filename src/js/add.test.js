import sortPlayers from './add';

test('input not an array throws', () => {
  const heroes = 1;
  expect(() => sortPlayers(heroes)).toThrow(/array/i);
});

test('input with player not an object throws', () => {
  const heroes = [1];
  expect(() => sortPlayers(heroes)).toThrow(/object/i);
});


test('sort simple input', () => {
  const heroes = [{
    name: 'мечник',
    health: 10,
  },
  {
    name: 'маг',
    health: 100,
  },
  {
    name: 'лучник',
    health: 80,
  },
  ];
  const expected = [{
    name: 'мечник',
    health: 10,
  },
  {
    name: 'лучник',
    health: 80,
  },
  {
    name: 'маг',
    health: 100,
  },
  ];
  const sorted = sortPlayers(heroes);
  expect(sorted).toEqual(expected);
});

test('wrong health format throws', () => {
  const heroes = [
    {
      name: 'эльф',
      health: '1',
    },
    {
      name: 'маг',
      health: 20,
    },
  ];
  expect(() => sortPlayers(heroes)).toThrow(/wrong/i);
});

test('wrong name format throws', () => {
  const heroes = [
    {
      name: 1,
      health: 2,
    },
    {
      name: 'маг',
      health: 20,
    },
  ];
  expect(() => sortPlayers(heroes)).toThrow(/wrong/i);
});