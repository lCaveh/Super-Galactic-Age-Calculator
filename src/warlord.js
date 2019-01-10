import mageImage from './img/mage.png';
import warriorImage from './img/warrior.png';
import goblinImage from './img/baby-goblin.png';
import trollImage from './img/troll.png';
import giantImage from './img/giant.png';

export class Warlord {
  constructor(type, name) {
    this.playerName = name;
    this.playerType = type;
    this.image = mageImage;
    this.currentHP = 0;
    this.currentMP = 0;
    this.maxHP = 0;
    this.maxMP = 0;
    this.armor = 0;
    this.armorLevel = 0;
    this.attack = 0;
    this.special = 0;
    this.weaponLevel = 0;
    this.specialMana = 0;
    this.xp = 0;
    this.level = 1;
    this.maxXP = 100;
    this.manaPotions = 0;
    this.HealthPotions = 0;
    this.dropXP = 0;
    this.dodgeRate =0;
  }

  buildWarrior() {
    this.image = warriorImage;
    this.maxHP = 200;
    this.currentHP = this.maxHP;
    this.maxMP = 10;
    this.currentMP = this.maxMP;
    this.armor = 5;
    this.attack = 10;
    this.special = 10;
    this.dodgeRate = 5;
  }
  buildMage() {
    this.image = mageImage;
    this.maxHP = 100;
    this.currentHP = this.maxHP;
    this.maxMP = 20;
    this.currentMP = this.maxMP;
    this.armor = 2;
    this.attack = 20;
    this.special = 20;
    this.dodgeRate = 10;
  }
  buildGoblin() {
    this.playerType="Goblin";
    this.image = goblinImage;
    this.maxHP = 50;
    this.currentHP = this.maxHP;
    this.maxMP = 30;
    this.currentMP = this.maxMP;
    this.armor = 0;
    this.attack = 30;
    this.special = 100;
    this.dropXP = 10;
    this.dodgeRate = 20;
  }
  buildTroll() {
    this.playerType="Troll";
    this.image = trollImage;
    this.maxHP = 100;
    this.currentHP = this.maxHP;
    this.maxMP = 20;
    this.currentMP = this.maxMP;
    this.armor = this.maxHP/20;
    this.attack = 20;
    this.special = 50;
    this.dropXP = 10;
    this.dodgeRate = 15;
  }
  buildGiant() {
    this.playerType="Giant";
    this.image = giantImage;
    this.maxHP = 200;
    this.currentHP = this.maxHP;
    this.maxMP = 10;
    this.currentMP = this.maxMP;
    this.armor = this.maxHP/15;
    this.attack = 10;
    this.special = 30;
    this.dropXP = 10;
    this.dodgeRate = 10;
  }
  buildRandomEnemy(level){
    let random = Math.floor((Math.random() * 3) + 1);
    if (random==1) {
      this.buildGoblin();
    } else if (random==2) {
      this.buildTroll();
    } else {
      this.buildGiant();
    }
    for (let i=0;i<=level;i++){
      this.gainLevel();
    }
  }
  gainXP(amount) {
    this.xp += amount;
    if (this.xp >= this.maxXP) {
      this.level++;
      this.xp -= this.maxXP;
      this.maxXP = 100 * this.level;
      this.gainLevel();
    }
  }
  gainLevel() {
    this.maxHP *= 1.1;
    this.maxMP *= 1.1;
    this.attack *= 1.1;
    if (this.playerType=="warrior" || this.playerType=="Mage"){
      //do nothing
    } else {
      this.specialMana+=1;
      this.dropXP *= 1.5;
    }
    this.currentHP = this.maxHP;
    this.currentMP = this.maxMP;
  }
  itemTypeDrop() {
    let random = Math.floor((Math.random() * 12) + 1);
    if (random <= 6) {
      // do nothing
    }
    else if (random == 7) {
      return "Armor";
    } else if (random == 8) {
      return "Weapon";
    } else if (random <= 10) {
      return "HP Potion";
    } else {
      return "MP Potion";
    }
  }
  hit(opponent) {
    if (this.attack > opponent.armor) {
      let damage = this.attack - opponent.armor;
      if (Math.floor(Math.random())*100+1 > opponent.dodgeRate){
        opponent.currentHP -= damage;
      } else {
        //do nothing
      }
    } else {
      //do nothing
    }

    if (opponent.currentHP <= 0) {
      opponent.hp = 0;
      opponent.battleEnd(this);
    }
  }

  specialHit(opponent) {
    this.Mana -= this.specialMana;
    let specialAttack = this.attack * (1 + this.special / 100);
    if (specialAttack > opponent.armor) {
      let damage = specialAttack - opponent.armor;
      if (Math.floor(Math.random())*100+1 > opponent.dodgeRate){
        opponent.currentHP -= damage;
      } else {
        //do nothing
      }
    } else {
      //do nothing
    }

    if (opponent.currentHP <= 0) {
      opponent.hp = 0;
      opponent.battleEnd(this);
    }
  }
  battleEnd(player) {

    if (this.playerType == "Warrior" || this.playerType == "Mage") {
      this.gameOver();
    } else {
      let drop = this.itemTypeDrop();
      if (drop =="Weapon"){
        player.equipWeapon(this.level);
      } else if (drop =="Armor"){
        player.equipArmor(this.level);
      } else if (drop =="HP Potion"){
        player.HealthPotions++;
      } else if (drop =="MP Potion"){
        player.manaPotions++;
      }
      player.gainXP(this.dropXP);
    }
  }
  equipArmor(level){
    let armorAdded = level - this.armorLevel;
    this.armor *= Math.pow(1.1,armorAdded);
    this.hp *= Math.pow(1.1,armorAdded);
    this.armorLevel = level;
  }
  equipWeapon(level){
    let weaponAdded = level - this.weaponLevel;
    this.attack *= Math.pow(1.1,weaponAdded);
    this.special += weaponAdded;
    this.weaponLevel = level;
  }
  gameOver(){
    this.level = 0;
  }
  hpPotionConsume(){
    this.currentHP += this.maxHP/4;
    if (this.currentHP>this.maxHP){
      this.currentHP = this.maxHP;
    }
  }
  mpPotionConsume(){
    this.currentMP += this.maxMP/4;
    if (this.currentMP>this.maxMP){
      this.currentMP = this.maxMP;
    }
  }

}
