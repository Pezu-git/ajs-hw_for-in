/* eslint-disable no-undef */

// import Daemon from '../js/Daemon.js';
// import Bowerman from '../js/Bowerman.js';
// import Magician from '../js/Magician.js';
// import Swordsman from '../js/Swordsman.js';
// import Undead from '../js/Undead.js';
// import Zombie from '../js/Zombie.js';

// test('first test', () => {
//   const daemon = new Daemon('hif', 'Daemon');
//   const receverDaemon = daemon.getChar();
//   const expectedDaemon = {
//     name: 'hif',
//     type: 'Daemon',
//     health: 100,
//     level: 1,
//     attack: 10,
//     defence: 40,
//   };
//   expect(receverDaemon).toStrictEqual(expectedDaemon);
//   const bowerman = new Bowerman('hif', 'Bowerman');
//   const receverBowerman = bowerman.getChar();
//   const expectedBowerman = {
//     name: 'hif',
//     type: 'Bowerman',
//     health: 100,
//     level: 1,
//     attack: 25,
//     defence: 25,
//   };
//   expect(receverBowerman).toStrictEqual(expectedBowerman);

//   const magician = new Magician('hif', 'Magician');
//   const receverMagician = magician.getChar();
//   const expectedMagician = {
//     name: 'hif',
//     type: 'Magician',
//     health: 100,
//     level: 1,
//     attack: 10,
//     defence: 40,
//   };
//   expect(receverMagician).toStrictEqual(expectedMagician);
//   const swordsman = new Swordsman('hif', 'Swordsman');
//   const receverSwordsman = swordsman.getChar();
//   const expectedSwordsman = {
//     name: 'hif',
//     type: 'Swordsman',
//     health: 100,
//     level: 1,
//     attack: 40,
//     defence: 10,
//   };
//   expect(receverSwordsman).toStrictEqual(expectedSwordsman);
//   const undead = new Undead('hif', 'Undead');
//   const receverUndead = undead.getChar();
//   const expectedUndead = {
//     name: 'hif',
//     type: 'Undead',
//     health: 100,
//     level: 1,
//     attack: 25,
//     defence: 25,
//   };
//   expect(receverUndead).toStrictEqual(expectedUndead);
//   const zombie = new Zombie('hif', 'Zombie');
//   const receverZombie = zombie.getChar();
//   const expectedZombie = {
//     name: 'hif',
//     type: 'Zombie',
//     health: 100,
//     level: 1,
//     attack: 40,
//     defence: 10,
//   };
//   expect(receverZombie).toStrictEqual(expectedZombie);
//   const zombie1 = new Zombie('Zombie', 'Zombie1');
//   const receverZombie1 = zombie1.getError('Не подходящее имя класса');
//   const expectedZombie1 = console.error('Не подходящее имя класса');
//   expect(receverZombie1).toStrictEqual(expectedZombie1);
//   const zombie2 = new Zombie('ZombieZombie', 'Zombie');
//   const receverZombie2 = zombie2.getError('Не подходящее имя');
//   const expectedZombie2 = console.error('Не подходящее имя');
//   expect(receverZombie2).toStrictEqual(expectedZombie2);
// });
