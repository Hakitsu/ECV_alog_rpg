class LoupGarou {
    
    constructor(selector) {
        this.name = "Loup-Garou";
        this.container = document.querySelector(selector);
        this.life = 30;
        this.attackCaC = 10;
        this.experience = 10;
        this.isAlive = true;
    }

    giveExperience(){  // quand il meurt
        if(this.experienceMax < this.experience + exp){
            this.lvl = this.lvl +1;
            this.experienceMax = this.experienceMax + 50;
            this.experience = (this.experience + exp ) - this.experienceMax;
        }
        else{
            this.experience = this.experience + exp;
        }
    }
    
    attack() {  // quand il attaque
        probaEchec = Math.random() * (11 - 1) + 1;
        if(probaEchec === 5){
            return 0;
        }
        return this.attackCaC
    }

    touchByAttack(damageRecieved){  // quand il est attaqué
        this.life = this.life - damageRecieved
        if(this.life <= 0 ){
            this.isAlive = false;
            this.life = 0;
        }else{
            console.log("Il lui reste "+this.life+" au "+this.name);
        }
    }
    
}