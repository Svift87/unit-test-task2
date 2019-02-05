import sortPlayer, {players, sort} from '../js/second';

describe('игрок', () => {
    let copyPlayers;
    beforeEach(() => {
        copyPlayers = [...players];
    });
    afterEach(() => {
        copyPlayers = null;
    });

    it('не передаем аргументов', () => {
        expect(sortPlayer()).toBeFalsy();
    });
    it('функция не возвращает undefined', () => {
        expect(sortPlayer()).toBeDefined();
    });
    it('длина массива совпадает', () => {
        expect(sortPlayer(copyPlayers)).toHaveLength(players.length)
    });
    it('возвращается массив', () => {
        expect(sortPlayer(copyPlayers)).toBeInstanceOf(Array);
    });

    it('после сортировки находятся все те же поля', () => {
        const sortPalyers = copyPlayers.sort(sort);
        expect(sortPlayer(copyPlayers)).toEqual(sortPalyers);
    });
    it('возвратился новый массив', () => {
        expect(sortPlayer(copyPlayers)).not.toBe(copyPlayers);
    });
    test('каждый объект соответствует объекту в ожидаемом массиве', () => {
        const sortPalyers = copyPlayers.sort(sort);
        expect(sortPlayer(copyPlayers)).toMatchObject(sortPalyers);
    });
    describe('передаем не массив', function () {
        it('объект', () => {
            expect(sortPlayer({})).toBeFalsy();
        });
        it('функция', () => {
            expect(sortPlayer(() => {
            })).toBeFalsy();
        });
        it('число', () => {
            expect(sortPlayer(5)).toBeFalsy();
        });
        it('строка', () => {
            expect(sortPlayer('string')).toBeFalsy();
        });
        it('null', () => {
            expect(sortPlayer(null)).toBeFalsy();
        });
        it('undefined', () => {
            expect(sortPlayer(undefined)).toBeFalsy();
        });
        it('bool', () => {
            expect(sortPlayer(true)).toBeFalsy();
        });
        it('пустая строка', () => {
            expect(sortPlayer('')).toBeFalsy();
        });
    });
});