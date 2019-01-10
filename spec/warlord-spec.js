import { Warlord } from './../src/warlord.js';
describe('Warlord', function () {
  let testPlayer;
  let testEnemy;

  beforeEach(function () {
    testPlayer = new Warlord("Warrior", "Luke Skywalker");
    testPlayer.buildWarrior();
    testEnemy = new Warlord("Goblin", "Goblin Fighter");
    testEnemy.buildGoblin();
  });

  it('should show how beforeEach() works', function () {
    console.log(testPlayer, testEnemy);
  });

  it('can create warlord object', function () {
    expect(testPlayer.playerType).toEqual("Warrior");
  });

  it('can create warlord with name', function () {
    expect(testEnemy.playerName).toEqual("Goblin Fighter");
  });

  it('says Blocked if attack value is less than opponent armor value', function () {
    testPlayer.attack = 5;
    testEnemy.armor = 15;
    testPlayer.hit(testEnemy)
    expect(testEnemy.currentHP).toEqual(100);
  });

  it('enemy health will decrease if player attack is stronger than armor', function () {
    testPlayer.attack = 20;
    testEnemy.armor = 5;
    testPlayer.hit(testEnemy);
    expect(testEnemy.currentHP).toBeLessThan(100);
  });

  it('wwww', function () {
    testPlayer.attack = 20;
    testEnemy.armor = 5;
    testEnemy.currentHP = 10;
    testPlayer.hit(testEnemy);
    console.log(testPlayer);
    console.log(testEnemy);

    expect(testPlayer.xp).toEqual(10);
  });
});