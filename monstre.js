function getMonster(){
    number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (getMonster() == 1) {
        var monstre = new LoupGarou();
    }else if (getMonster() == 2) {
        var monstre = new Zombie();
    }else{
        var monstre = new Gluant();
    }
    return number;
}



var dmgM = monstre.attack();
hero.touchByAttack(dmgM);
