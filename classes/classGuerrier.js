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
    this.gold = 100;
    this.nbPotion = 0;
    }

    setExperience(exp, gold){  // quand il tue un monstre
        this.gold = this.gold + gold; 
        console.log("Argent : " + this.gold)
        if(this.experienceMax < this.experience + exp){
            this.lvl = this.lvl +1;
            this.experience = (this.experience + exp ) - this.experienceMax;
            this.experienceMax = this.experienceMax + 50;
            console.log("Le guerrier est monté au niveau " , this.lvl);
            
            let action =  window.prompt("Voulez-vous achetez une potion pour 100 golds ? (oui / non) ")
            if(action === "oui"){
                if(this.gold >= 100){
                    this.gold = this.gold - 100;
                    this.nbPotion = this.nbPotion + 1;
                    console.log("vous avez maintenant : " + this.nbPotion + " potions et " + this.gold + " argents")
                }
                else {
                    alert("Vous n'avez pas assez d'argent !")
                }
            }


        }
        else{
            this.experience = this.experience + exp;
        }

        console.log("Guerrier a gagné" , exp ," exp en tuant le monstre, son expérience est maintenant de ", this.experience , " / ", this.experienceMax)
    }

    attack() {  // quand il attaque
        var probaEchec = 0;
        probaEchec = Math.floor(Math.random() * (11 - 1)) + 1;
        if(probaEchec === 5){
            console.log("Guerrier a attaqué le monstre ! Il a raté son attaque ");
            return 0;
        }
        console.log("Guerrier a attaqué le monstre ! Le monstre a subit ", this.attackCaC , " dégats ")
        return this.attackCaC
    }

    touchByAttack(damageRecieved){  // quand il est attaqué
        this.life = this.life - damageRecieved
        if(this.life <= 0 ){
            this.isAlive = false;
        }
        
        console.log("Guerrier a été touché , il a subit", damageRecieved, "de dégats");
        console.log("Il lui reste "+this.life+" PV");


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
            console.log("Guerrier s'est soigné, ses PV sont maintentant de   " , this.life);
        }
        else {
            console.log("Guerrier ne peut pas se soigner, il n'a plus de potion !")
        }


    }
}
