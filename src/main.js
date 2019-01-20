import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jQuery';
import { GalacticAgeCalculator } from './galacticagecalculator';
import navImage from './img/Solarnav.jpg';
import formImage from './img/Solarform.jpg';
$(document).ready(function () {

  $("img#nav").attr("src",navImage);
  $("img#form").attr("src",formImage);
  $('#calculatorForm').submit(function (event) {
    event.preventDefault();
    let planets=["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
    let birthday = $('input#birthday').val();
    let gender = $('#gender').val();
    let bmi = $('input#bmi').val();
    let smoke = $('#smoke').val();
    let exercise = $('#exercise').val();
    let blood = $('#blood').val();
    let lifestyle = {Gender:gender,Bmi:bmi,Smoke:smoke,Exercise:exercise,Blood:blood};
    let galacticAge= new GalacticAgeCalculator(birthday,lifestyle);
    $(".form").hide();
    $(".result").show();
    galacticAge.getExpectedAge();
    galacticAge.getAge();
    for (var planet in planets){
      $(`img#${planets[planet]}`).attr("src",galacticAge.planetImages[`${planets[planet]}`]);
      $(`img#${planets[planet]}`).click(function(){
        $("img#Show").attr("src",galacticAge.planetImages[this.id]);
        galacticAge.getAgeInPlanet(this.id);
        galacticAge.getRemainAgeInPlanet(this.id);
        $("p.age").text(`Your age at ${this.id} planet is ${galacticAge.ageInPlanet.toFixed(2)} years.`);
        if (galacticAge.remainAge>=0){
          $("p.remainAge").text(`You supposed to live ${galacticAge.remainAgeInPlanet.toFixed(2)} years more in ${this.id}`);
        } else {
          galacticAge.remainAge= Math.abs(galacticAge.remainAge);
          $("p.remainAge").text(`You lived past years from the life expectancy ${galacticAge.remainAgeInPlanet.toFixed(2)}`);
        }
      });
    }
  });
});
