import MercuryImage from './img/Mercury.jpg';
import VenusImage from './img/Venus.jpeg';
import EarthImage from './img/Earth.jpg';
import MarsImage from './img/Mars.jpg';
import JupiterImage from './img/Jupiter.jpeg';
import SaturnImage from './img/Saturn.jpg';
import UranusImage from './img/Uranus.jpg';
import NeptuneImage from './img/Neptune.jpg';
import PlutoImage from './img/Pluto.jpg';
export class GalacticAgeCalculator {
  constructor (birthday,lifeStyle) {
    this.today = new Date();
    this.birthday = new Date(birthday);
    this.lifeStyle = lifeStyle;
    this.ageInDays = 0;
    this.ageInYears = 0.00;
    this.planetYears = {Mercury:0.24, Venus:0.62, Earth:1, Mars:1.88, Jupiter:11.86, Saturn:29.48, Uranus:84, Neptune:164.8, Pluto:248 };
    this.planetImages={Mercury:MercuryImage, Venus:VenusImage, Earth:EarthImage, Mars:MarsImage, Jupiter:JupiterImage, Saturn:SaturnImage, Uranus:UranusImage, Neptune:NeptuneImage, Pluto:PlutoImage };
    this.ageInPlanet = 0.00;
    this.expectedAge = 0;
    this.remainAge = 0;
    this.remainAgeInPlanet= 0;

  }

  getExpectedAge(){
    this.expectedAge = 76.1;
    if (this.lifeStyle["Gender"]=="Female"){
      this.expectedAge+= 5;
    }
    if (this.lifeStyle["Bmi"]>30){
      this.expectedAge-= 10;
    } else if (this.lifeStyle["Bmi"]>25){
      this.expectedAge-= 3;
    } else if (this.lifeStyle["Bmi"]>20){
      this.expectedAge+= 5;
    } else if (this.lifeStyle["Bmi"]>15){
      this.expectedAge-= 3;
    } else {
      this.expectedAge-= 10;
    }
    if (this.lifeStyle["Smoke"]=="Yes"){
      this.expectedAge-= 8;
    }
    if (this.lifeStyle["Exercise"]=="Yes"){
      this.expectedAge+= 10;
    }
    if (this.lifeStyle["Blood"]=="Yes"){
      this.expectedAge-= 10;
    }
  }

  getAge() {
    let milisecondsInDay = 86400000;
    let milisecondsInYear= 31557600000;
    let difference = this.today-this.birthday;
    this.ageInDays= Math.round(difference/milisecondsInDay);
    this.ageInYears=difference/milisecondsInYear;
    this.remainAge= this.expectedAge-this.ageInYears;
  }
  getAgeInPlanet(planet) {
    this.ageInPlanet= this.ageInYears/this.planetYears[planet];
  }
  getRemainAgeInPlanet(planet) {
    this.remainAgeInPlanet= this.remainAge/this.planetYears[planet];
  }
}
