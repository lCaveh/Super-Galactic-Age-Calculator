import { GalacticAgeCalculator } from '../src/galacticagecalculator.js';
describe('GalacticAgeCalculator', function () {

  let birthday;
  let lifeStyle;
  let galacticAge;

  beforeEach(function () {
    birthday = new Date('1979-12-12');
    lifeStyle = new Object();
    galacticAge = new GalacticAgeCalculator(birthday,lifeStyle);

  });

  it('should show how beforeEach() works', function () {
    console.log(birthday, lifeStyle, galacticAge);
  });



});
