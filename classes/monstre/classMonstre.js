class Monstre{
    constructor(name, lifeMax, attackCaC, experience, po) {
        this.name = name
        this.life = lifeMax;
        this.lifeMax = lifeMax;
        this.attackCaC = attackCaC;
        this.experience = experience;
        this.po = po
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