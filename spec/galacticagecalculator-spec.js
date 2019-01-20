import { GalacticAgeCalculator } from '../src/galacticagecalculator.js';
describe('GalacticAgeCalculator', function () {

  let birthday;
  let lifeStyle = new Object();
  let galacticAge;

  beforeEach(function () {
    birthday = new Date('1979-12-12');
    lifeStyle = {Gender: "Male", Bmi: 25, Smoke: "Yes", Exercise: "Yes", Blood: "Yes"}
    galacticAge = new GalacticAgeCalculator(birthday,lifeStyle);

  });

  it('should show how beforeEach() works', function () {
    console.log(birthday, lifeStyle, galacticAge);
  });

  it('it should calculate the age in days with given birthday', function () {
    galacticAge.getAge();
    expect(galacticAge.ageInDays).toBeCloseTo(14284,-2);
  });

  it('it should calculate the age in days with given birthday', function () {
    galacticAge.getAge();
    expect(galacticAge.ageInYears).toBeCloseTo(39.11,0);
  });

  it('it should calculate the age in other planet', function () {
    galacticAge.getAge();
    galacticAge.getAgeInPlanet("Mercury");
    expect(galacticAge.ageInPlanet).toBeCloseTo(162.9,-1);
  });

  it('it should calculate average expected age', function () {
    galacticAge.getExpectedAge();
    expect(galacticAge.expectedAge).toBeCloseTo(73.10,0);
  });

  it('it should calculate the remain age to expected one', function () {
    galacticAge.getExpectedAge();
    galacticAge.getAge();
    expect(galacticAge.remainAge).toBeCloseTo(33.99,-2);
  });

  it('it should calculate the remain age to expected one in other planets', function () {
    galacticAge.getExpectedAge();
    galacticAge.getAge();
    galacticAge.getRemainAgeInPlanet("Venus");
    expect(galacticAge.remainAgeInPlanet).toBeCloseTo(54.83,0);
  });

});
