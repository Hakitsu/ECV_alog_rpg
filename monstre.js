function getMonster(){
    number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        var monstre = new LoupGarou();
    }else if (number == 2) {
        var monstre = new Zombie();
    }else{
        var monstre = new Gluant();
    }
    return monstre;
}



