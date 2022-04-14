class Guerrier {

    constructor(selector) {
    this.name = "guerrier"
    this.container = document.querySelector(selector);
    this.lifeMax = 100;
    this.life = 100;
    this.defense = 100;
    this.attackCaC = 50;
    this.experience = 0;
    this.lvl = 1;
    this.experienceMax = 50;
    this.isAlive = true;
    this.mana = 40;
    this.gold = 0;
    this.nbPotion = 1;
    this.protection = 0
    }

    setExperience(exp, gold){  // quand il tue un monstre
        this.gold = this.gold + gold;
        console.log("Argent : " + this.gold)
        if(this.experienceMax <= this.experience + exp){
            this.lvl = this.lvl +1;
            this.experience = (this.experience + exp ) - this.experienceMax;
            this.experienceMax = this.experienceMax + 50;
            console.log("Le guerrier est monté au niveau " , this.lvl);

            let action =  window.prompt("Voulez-vous achetez une potion pour 100 golds ? (oui / non) ","oui")
            if(action === "oui"){
                if(this.gold >= 100){
                    this.gold = this.gold - 100;
                    this.nbPotion = this.nbPotion + 1;
                    console.log("vous avez maintenant : " , this.nbPotion , "potions et" , this.gold , " argents")
                }
                else {
                    alert("Vous n'avez pas assez d'argent !")
                }
            }


        }
        else{
            this.experience = this.experience + exp;
        }

        console.log("Guerrier a gagné" , exp ," exp en tuant le monstre.\nson expérience est maintenant de", this.experience , "/", this.experienceMax,"exp")
    }

    attack(type) {  // quand il attaque
        var probaEchec = 0;
        probaEchec = Math.floor(Math.random() * (11 - 1)) + 1;
        if(type === "sort" ){
            if(this.mana - 10 < 0){
                console.log("Le guerrier n'a plus de mana !!!")

                return 0;
            }else if (this.protection > 0) {
                console.log("Le guerrier ce protège déjà des",this.protection,"prochaines attaques");
                return 0
            }
            this.protection = 3
            console.log("Le guerrier ce protège des",this.protection,"attaque")
            this.mana -= 10;
            return 0;

        }
        if(probaEchec === 5){
            console.log("Guerrier a attaqué le monstre ! \nIl a raté son attaque ");
            return 0;
        }
        console.log("Guerrier a attaqué le monstre ! \nLe monstre a subit", this.attackCaC , "dégats ")
        return this.attackCaC
    }

    touchByAttack(damageRecieved){  // quand il est attaqué
        if (this.protection > 0) {
            damageRecieved -= damageRecieved/2;
            this.protection -= 1
        }
        this.life = this.life - damageRecieved
        if(this.life <= 0 ){
            this.isAlive = false;
        }

        console.log("Guerrier a été touché.\nIl a subit", damageRecieved, "de dégats");
        console.log(this.life, "/" , this.lifeMax , "PV");


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
            console.log("Guerrier s'est soigné. \nSes PV sont maintentant de   " , this.life);
        }
        else {
            console.log("Guerrier ne peut pas se soigner. \nil n'a plus de potion !")
        }


    }
}
// competence -50% pendant 3 tours -> pas etre réutilisé
// mana
