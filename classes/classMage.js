class Mage {

    constructor(selector) {
        this.name = "mage"
        this.container = document.querySelector(selector);
        this.lifeMax = 80;
        this.life = 80;
        this.defense = 80;
        this.attackCaC = 30;
        this.experience = 0;
        this.lvl = 1;
        this.experienceMax = 50;
        this.isAlive = true;
        this.mana = 100;
        this.attackMagic = 50;

    }

    set setExperience(exp){  // quand il tue un monstre
        if(this.experienceMax < this.experience + exp){
            this.lvl = this.lvl +1;
            this.experienceMax = this.experienceMax + 50;
            this.experience = (this.experience + exp ) - this.experienceMax;
        }
        else{
            this.experience = this.experience + exp;
        }
        console.log("Mage a gagné " , exp , " en tuant le monstre, son expérience est maintenant de ", this.experience , " / ", this.experienceMax)

    }

    attack(type = "CaC") {  // quand il attaque
        probaEchec = Math.random() * (11 - 1) + 1;
        if(probaEchec === 5){
            console.log("Mage a attaqué le monstre ! Il a raté son attaque ");

            return 0;
        }
        if(type === "sort" ){
            if(this.mana - 10 < 0){
                console.log("Mage a attaqué le monstre ! Pas assez de mana, l'attaque a échoué")

                return 0;
            }
            console.log("Mage a attaqué le monstre ! Le monstre a subit ", this.attackMagic , " dégats ")

            return this.attackMagic;

        }
        console.log("Mage a attaqué le monstre ! Le monstre a subit ", this.attackCaC , " dégats ")

        return this.attackCaC;
    }

    touchByAttack(damageRecieved){  // quand il est attaqué
        this.life = this.life - damageRecieved

        if(this.life < 0 ){
            this.isAlive = false;
        }
        console.log("Mage a été touché , il a subit  " , damageRecieved);
           

    }

    heal() {  // quand il se soigne
        if(this.lifeMax < this.life + 100){
            this.life = this.lifeMax;
        }
        else{
            this.life = this.life + 100 ;
        }

        console.log("Mage s'est soigné, ses PV sont maintenant de   " , this.life);

    }

}
