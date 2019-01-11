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

  it('should calculate the age in days with given birthday', function () {
    galacticAge.getAge();
    expect(galacticAge.ageInDays).toEqual(14276);
  });

  it('should calculate the age in days with given birthday', function () {
    galacticAge.getAge();
    expect(galacticAge.ageInYears.toFixed(2)).toEqual('39.08');
  });

});
