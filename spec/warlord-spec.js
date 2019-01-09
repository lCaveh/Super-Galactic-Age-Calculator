import { Warlord } from './../src/warlord.js';
describe('Warlord', function () {
  let testPlayer;
  let testEnemy;

  beforeEach(function () {
    testPlayer = new Warlord("Warrior", "Luke Skywalker");
    testPlayer.buildWarrior();
    testEnemy = new Warlord("Enemy", "Giant Barbarian");
    testEnemy.buildEnemy(3);
  });

  it('should show how beforeEach() works', function () {
    console.log(testPlayer, testEnemy);
  });

  it('can create warlord object', function () {
    expect(testPlayer.playerType).toEqual("Warrior");
  });

  it('can create warlord with name', function () {
    expect(testEnemy.playerName).toEqual("Giant Barbarian");
  });
});