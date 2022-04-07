
// scénario tour 

function changeTour(tour){
    if(tour === "H"){
        return "M"
    }
    else{
        return "H"
    }
}

//scénario tour Hero (le héro commence)
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
            let action =  window.prompt("Que voulez vous faire ? soin / attaque magique / attaque CaC ")
            while(action.toLowerCase() !== "soin" && action.toLowerCase() !== "attaque" && action.toLowerCase() !== "attaque cac"   ){
                 action =  window.prompt("Que voulez vous faire ? soin / attaque magique / attaque CaC ")
            }
            if(action.toLowerCase() === "soin"){
                hero.heal()
            }
            else if(action.toLowerCase() !== "attaque cac"){
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
        }
        

    }

    else{ // si c'est tour du monstre

    }
}