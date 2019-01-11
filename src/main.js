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
    $(".form").hide();

    $(".result").show();
    $("img#mercury").attr("src",formImage);




  });
});
