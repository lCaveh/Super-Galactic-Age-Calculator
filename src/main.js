import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jQuery';
import { Warlord } from './warlord';
import mage from './img/mage.png';
import warrior from './img/warrior.png';
$(document).ready(function() {
  $("img#selectWarrior").attr("src",warrior);
  $("img#selectMage").attr("src",mage);

  $("img#selectWarrior").click(function(){
    let fighter="Warrior";
    let name=$("textarea").val();
    var player = new Warlord(fighter, name);
    player.buildWarrior();
    start(player);
  });
  $("img#selectMage").click(function(){
    let fighter="Mage";
    let name=$("textarea").val();
    var player = new Warlord(fighter, name);
    player.buildMage();
    start(player);
  });
});
function start(player){
  $(".intro").toggle("");
  $(".battle").toggle("");
$("img#player").attr("src", (player.image));
  let stage=1;
  console.log(player);
  // $(".move").show();
  let enemy=new Warlord("Fighter","Enemy");
  enemy.buildRandomEnemy(stage);
  $("img#currentEnemy").attr("src", (enemy.image));  

}
