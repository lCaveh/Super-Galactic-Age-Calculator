export class Warlord {
  constructor(type, name) {
    this.playerName = name;
    this.playerType = type;
    this.currentHP = 0
    this.currentMP = 0
    this.maxHP = 0;
    this.maxMP = 0;
    this.armor = 0;
    this.attack = 0;
    this.special = 0;
    this.specialMana = 0;
    this.xp = 0;
    this.level = 1;
    this.maxXP = 100;
    this.potionsInventory = [];
    this.gearsInventory = [];
    this.dropXP = 0;
  }
  buildWarrior() {
    this.maxHP = 200;
    this.currentHP = this.maxHP;
    this.maxMP = 10;
    this.currentMP = this.maxMP;
    this.armor = 5;
    this.attack = 10;
    this.special = 10;
  }
  buildMage() {
    this.maxHP = 100;
    this.currentHP = this.maxHP;
    this.maxMP = 20;
    this.currentMP = this.maxMP;
    this.armor = 0;
    this.attack = 20;
    this.special = 20;
  }
  buildGoblin() {
    this.maxHP = 100;
    this.currentHP = this.maxHP;
    this.maxMP = 20;
    this.currentMP = this.maxMP;
    this.armor = 0;
    this.attack = 20;
    this.special = 20;
    this.dropXP = 10;
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
    this.dropXP *= 2;
    this.currentHP = this.maxHP;
    this.currentMP = this.maxMP;
  }
  itemTypeDrop() {
    let random = Math.floor((Math.random() * 12) + 1);
    if (random <= 6) {
      // intentionally empty
    }
    else if (random == 7) {
      this.dropArmor();
    } else if (random == 8) {
      this.dropWeapon();
    } else if (random <= 10) {
      this.dropManaPotion();
    } else {
      this.dropHealthPotion();
    }
  }
  hit(opponent) {
    var msg = "";
    if (this.attack > opponent.armor) {
      let damage = this.attack - opponent.armor;
      if (damage >= Math.floor(Math.random())) {
        opponent.currentHP -= damage;
      } else {
        // need to fix random generated dodge so this is reachable
        // msg = "Blocked!";
        // console.log(msg);
        // return msg;
      }
    } else {
      msg = "Missed!";
      return msg;
    }

    if (opponent.currentHP <= 0) {
      opponent.battleEnd(this);
    }
  }

  specialHit(opponent) {
    this.Mana -= this.specialMana;
    let specialAttack = this.attack * (1 + this.special / 100);
    if (specialAttack > opponent.armor) {
      let damage = specialAttack - opponent.armor;
      if (damage >= Math.floor(Math.random())) {
        opponent.currentHP -= damage;
      } else {
        console.log("Blocked!");
      }
    } else {
      console.log("Missed!");
    }

    if (opponent.currentHP <= 0) {
      opponent.battleEnd(this);
    }
  }
  battleEnd(player) {

    if (this.playerType == "Warrior" || this.playerType == "Mage") {
      this.gameOver();
    } else {

      //this.itemTypeDrop();
      player.xp += this.dropXP;
    }
  }
}



