class Monstre{
    constructor(name, lifeMax, attackCaC, experience) {
        this.name = name
        this.life = lifeMax;
        this.lifeMax = lifeMax;
        this.attackCaC = attackCaC;
        this.experience = experience;
    };

    takeDommage(dmg){
        this.life -= dmg
        if(this.life <= 0){
            return 0
        }else{
            return this.life
        }
    }
}