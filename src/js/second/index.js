export const players = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];

export const sort = (a, b) => {
    return b.health - a.health
};

const sortPlayer = data => {
    if (!data || !Array.isArray(data)) {
        return false;
    }
    // return true
    return [...data].sort(sort);
};

console.log(sortPlayer(players));

export default sortPlayer;