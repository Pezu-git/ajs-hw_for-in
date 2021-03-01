/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import orderByProps from '../index.js';

test('first test', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const orderArr = ['name', 'level'];
  const receverCall = orderByProps(obj, orderArr);
  const expectObj = [
    { prop: 'name', value: 'мечник' },
    { prop: 'level', value: 2 },
    { prop: 'attack', value: 80 },
    { prop: 'defence', value: 40 },
    { prop: 'health', value: 10 },
  ];
  expect(receverCall).toEqual(expectObj);
});
test('second test', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 60,
    speed: 10,
    mana: 100,
  };
  const orderArr = ['level', 'name'];
  const receverCall = orderByProps(obj, orderArr);
  const expectObj = [
    { prop: 'level', value: 2 },
    { prop: 'name', value: 'мечник' },
    { prop: 'attack', value: 80 },
    { prop: 'defence', value: 60 },
    { prop: 'health', value: 10 },
    { prop: 'mana', value: 100 },
    { prop: 'speed', value: 10 },
  ];
  expect(receverCall).toEqual(expectObj);
});
