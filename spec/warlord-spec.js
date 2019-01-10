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

  it('opponent hp should not change if attack value is less than opponent armor value', function () {
    testPlayer.attack = 5;
    testEnemy.armor = 15;
    testPlayer.hit(testEnemy);
    expect(testEnemy.currentHP).toEqual(50);
  });

  it('enemy health will decrease if player attack is stronger than armor', function () {
    testPlayer.attack = 20;
    testEnemy.armor = 5;
    testPlayer.hit(testEnemy);
    expect(testEnemy.currentHP).toBeLessThan(100);
  });

  it('player should gain xp from killing enemy', function () {
    testPlayer.attack = 20;
    testEnemy.armor = 5;
    testEnemy.dodgeRate =0;
    testEnemy.currentHP = 10;
    testPlayer.hit(testEnemy);
    expect(testPlayer.xp).toEqual(10);
  });

  it('player should gain level from killing enemy', function () {
    testPlayer.attack = 20;
    testEnemy.armor = 5;
    testEnemy.dropXP = 105;
    testEnemy.dodgeRate= 0;
    testEnemy.currentHP = 10;
    testPlayer.hit(testEnemy);
    expect(testPlayer.level).toEqual(2);
  });

  it('player health will increase when consume HP potion', function () {
    testPlayer.currentHP=50;
    testPlayer.hpPotionConsume();
    expect(testPlayer.currentHP).toEqual(100);
  });

  it('player Mana will increase when consume MP potion', function () {
    testPlayer.currentMp=10;
    testPlayer.maxMP=40;
    testPlayer.mpPotionConsume();
    expect(testPlayer.currentMP).toEqual(20);
  });

});
