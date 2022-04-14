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
        this.gold = 0;
        this.nbPotion = 1;

    }

    setExperience(exp, gold){  // quand il tue un monstre
        this.gold = this.gold + gold; 
        console.log("Argent : " + this.gold)
        if(this.experienceMax < this.experience + exp){
            this.lvl = this.lvl +1;
            this.experience = (this.experience + exp ) - this.experienceMax;
            this.experienceMax = this.experienceMax + 50;
            console.log("Le mage est monté au niveau " , this.lvl);

            let action =  window.prompt("Voulez-vous achetez une potion pour 100 golds ? (oui / non) ")
            if(action === "oui"){
                if(this.gold >= 100){
                    this.gold = this.gold - 100;
                    this.nbPotion = this.nbPotion + 1;
                    console.log("vous avez maintenant :" , this.nbPotion , "potions et" , this.gold , " argents")
                }
                else {
                    alert("Vous n'avez pas assez d'argent !")
                }
            }
        }
        else{
            this.experience = this.experience + exp;
        }
        console.log("Mage a gagné" , exp,"exp en tuant le monstre, son expérience est maintenant de", this.experience , "/", this.experienceMax , "xp")

    }

    attack(type) {  // quand il attaque
        probaEchec = Math.random() * (11 - 1) + 1;
        if(probaEchec === 5){
            console.log("Mage a attaqué le monstre !\n Il a raté son attaque ");

            return 0;
        }
        if(type === "sort" ){
            if(this.mana - 10 < 0){
                console.log("Mage a attaqué le monstre !\n Pas assez de mana, l'attaque a échoué")

                return 0;
            }
            console.log("Mage a attaqué le monstre !\nLe monstre a subit", this.attackMagic , "dégats ")
            this.mana -= 10;
            return this.attackMagic;

        }
        console.log("Mage a attaqué le monstre !\nLe monstre a subit", this.attackCaC , "dégats ")

        return this.attackCaC;
    }

    touchByAttack(damageRecieved){  // quand il est attaqué
        this.life = this.life - damageRecieved

        if(this.life < 0 ){
            this.isAlive = false;
        }
        console.log("Mage a été touché.\nIl a subit", damageRecieved, "dégats");
        console.log(this.life, "/",  this.lifeMax , "PV");
           

    }

    heal() {  // quand il se soigne
        if(this.nbPotion > 0){
            if(this.lifeMax < this.life + 100){
                this.life = this.lifeMax;
            }
              else{
                this.life = this.life + 100 ;
            }
            this.nbPotion = this.nbPotion - 1;
            console.log("Mage s'est soigné, ses PV sont maintenant de   " , this.life);

        }
        else{
            console.log("Mage ne peut pas se soigner, il n'a plus de potion !")
        }
    }


}
