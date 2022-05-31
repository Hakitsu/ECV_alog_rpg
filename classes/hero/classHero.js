class Hero{
    constructor(name, lifeMax, defense, attackCac,mana, sort = null){
      this.name = name;
      this.lifeMax = lifeMax;
      this.life = lifeMax;
      this.defense = defense;
      this.attackCac = attackCac;
      this.mana = mana;
      this.sort = sort
    };
  
    attack() {
      var probaEchec = 0;
      probaEchec = Math.floor(Math.random() * (11 - 1)) + 1;
      console.log(probaEchec);
      if (probaEchec == 1) {
        return 0
      }else{
        return this.attackCac
      }
    };

    defenseAttack(AttackM) {
      var degat = parseInt(AttackM - this.defense)
      this.life -= degat
      if (this.life <= 0) {
        return 0
      }else{
        return this.life
      }
    };

    heal(){
      this.life = this.lifeMax
      return this.life
    }
}