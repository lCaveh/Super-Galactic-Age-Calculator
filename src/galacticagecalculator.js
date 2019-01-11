export class GalacticAgeCalculator {
  constructor (birthday,lifeStyle) {
    this.today = new Date();
    this.birthday = new Date(birthday);
    this.lifeStyle = lifeStyle;
    this.ageInDays = 0;
    this.ageInYears = 0.00;
    this.planetYears = {Mercury:0.24, Venus:0.62, Earth:1, Mars:1.88, Jupiter:11.86}
    this.ageInPlanet = 0.00;

  }

  getAge() {
    let milisecondsInDay = 86400000;
    let milisecondsInYear= 31557600000;
    let difference = this.today-this.birthday;
    this.ageInDays= Math.round(difference/milisecondsInDay);
    this.ageInYears=difference/milisecondsInYear;
  }
  getAgeInPlanet(planet) {
    this.ageInPlanet= this.ageInYears/this.planetYears[planet];
  }
}
