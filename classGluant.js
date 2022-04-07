class Gluant {
    
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.life = 80;
        this.attack = 30;
        this.experience = 40;
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
        return this.attack
    }

    touchByAttack(damageRecieved){  // quand il est attaqué
        this.life = this.life - damageRecieved

        if(this.life < 0 ){
            this.isAlive = false;
            
        }

    }
    
}