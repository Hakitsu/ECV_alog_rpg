function changeTour(tour){
    if(tour === "H"){
        return "M"
    }
    else{
        return "H"
    }
}

function getMonster(){
    number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (getMonster() == 1) {
        var monstre = new LoupGarou();
    }else if (getMonster() == 2) {
        var monstre = new Zombie();
    }else{
        var monstre = new Gluant();
    }
    return monstre;
}

select_class = window.prompt("Choisissez votre classe : Guerrier / Mage ","Guerrier");
while(select_class.toLowerCase() != "guerrier" && select_class.toLowerCase() != "mage"){
    console.log("Vous devez choissire entre guerrier ou mage");
    select_class = window.prompt("Choisissez votre classe : Guerrier / Mage ","Guerrier");
} 

if (select_class.toLowerCase() == "guerrier") {
    var hero = new Guerrier();
}else{
    var hero = new Mage();
}

var monstre = getMonster();

let tour = "H";

while(hero.isAlive === true){

    if(tour === "H"){
        if(hero.name === "guerrier"){
            let action =  window.prompt("Que voulez vous faire ? soin / attaque")
            while(action.toLowerCase() !== "soin" && action.toLowerCase() !== "attaque"  ){
                 action =  window.prompt("Que voulez vous faire ? soin / attaque")
            }
            if(action.toLowerCase() === "soin"){
                hero.heal()
            }
            else{
                let dmg = hero.attack() 
                monstre.touchByAttack(dmg)
            }
        }

        if(hero.name === "mage"){
            let action =  window.prompt("Que voulez vous faire ? soin / sort / CaC ")
            while(action.toLowerCase() !== "soin" && action.toLowerCase() !== "attaque" && action.toLowerCase() !== "attaque cac"   ){
                 action =  window.prompt("Que voulez vous faire ? soin / sort / CaC ")
            }
            if(action.toLowerCase() === "soin"){
                hero.heal()
            }
            else if(action.toLowerCase() !== "cac"){
                let dmg = hero.attack() 
                monstre.touchByAttack(dmg)
            }
            else {
                let dmg = hero.attack("sort") ;
                monstre.touchByAttack(dmg)
            }
        }

        if(monstre.isAlive === false){
            hero.setExperience(monstre.experience)
            monstre = getMonster();
            // TODO faire spawn nouveau monstre
        }
        

    }

    else{ // si c'est tour du monstre
        var dmgM = monstre.attack();
        hero.touchByAttack(dmgM);
    }
}
