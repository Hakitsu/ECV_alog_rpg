function changeTour(tour){   
    if(tour === "H"){
        // Monster tour
        return "M"
    }
    else{
        //Player tour
        return "H"
    }
}
// Affiche dans la console : Le choix entre Mage et guerrier (Défaut : Guerrier)
select_class = window.prompt("Choisissez votre classe : Guerrier / Mage ","Guerrier");
// Si le choix est différent de guerrier ou mage, Alors on relance le prompt
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
console.log("Un " + monstre.name+" apparait !!! ");

let tour = "H";
var gluantKo = 0;
var loupKo = 0;
var zombieKo = 0;
var probaEchec = 0

while(hero.isAlive === true){
    if(tour === "H"){
        console.log("-------------"+hero.name+"-------------")
        if(hero.name === "guerrier"){
            let action =  window.prompt("Que voulez vous faire ? soin / sort / attaque","attaque")
            while(action.toLowerCase() !== "soin" && action.toLowerCase() !== "sort" && action.toLowerCase() !== "attaque"  ){
                 action =  window.prompt("Que voulez vous faire ? soin / sort / attaque","attaque")
            }
            if(action.toLowerCase() === "soin"){
                hero.heal()
            }else if (action.toLowerCase() === "sort") {
                let dmg = hero.attack("sort")
                monstre.touchByAttack(dmg)
                console.log("Mana restant :",hero.mana);
            }
            else{
                let dmg = hero.attack()
                monstre.touchByAttack(dmg)
            }
        }

        if(hero.name === "mage"){
            let action =  window.prompt("Que voulez vous faire ? soin / sort / CaC","sort")
            while(action.toLowerCase() !== "soin" && action.toLowerCase() !== "sort" && action.toLowerCase() !== "cac"   ){
                 action =  window.prompt("Que voulez vous faire ? soin / sort / CaC","sort")
            }
            if(action.toLowerCase() === "soin"){
                hero.heal()
            }
            else if(action.toLowerCase() === "cac"){
                let dmg = hero.attack()
                monstre.touchByAttack(dmg)
            }
            else {
                let dmg = hero.attack("sort") ;
                monstre.touchByAttack(dmg)
                console.log("Mana restant :",hero.mana);
            }
        }

        if(monstre.isAlive === false){
            hero.setExperience(monstre.experience , 50)

            if(monstre.name === "Gluant"){
                gluantKo += 1;
            }

            if(monstre.name === "Loup-Garou"){
                loupKo += 1;
            }

            if(monstre.name === "Zombie"){
                zombieKo += 1;
            }

            monstre = getMonster();
            console.log("un "+monstre.name+" apparait et vous défonce votre gueule (cheh)");
            // TODO faire spawn nouveau monstre
        }
    tour = changeTour("H");

    }

    else{ // si c'est tour du monstre
        console.log("-------------"+monstre.name+"-------------")
        var dmgM = monstre.attack();
        hero.touchByAttack(dmgM);
        tour = changeTour("M");
    }
}
alert("Votre Héros a bien combattu mais les monstres ont étaient plus forts !!!")
alert("Vous avez battu : \n"+ gluantKo + " gluants,\n" + loupKo + " loup-garous,\n" + zombieKo + " zombies")
retry = window.prompt("Voulez-vous rejouer ?","Oui")
if (retry.toLowerCase() == "oui") {
    location.reload();
}