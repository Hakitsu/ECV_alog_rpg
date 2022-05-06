class Hero{
    constructor(name, lifemax, defense, attackCac,mana, proctection = 0, attackMagic = 0,selector){
      this.name = name;
      this.container = document.querySelector(selector);
      this.lifemax = lifemax;
      this.life = lifemax;
      this.defense = defense;
      this.attackCac = attackCac;
      this.mana = mana;
    }

}