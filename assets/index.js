$(document).ready(function(){
    classe = 'warrior'
})



$(document).on('click','#startGame',function(){
    $('#createGame').hide();
    $('#newGame').show();
    profil = $("#pseudo").val();
    classe = $('#classChoice').val();
    createHero(classe,profil)
    monstre = getMonster()
    console.log(monstre.name);
})

$(document).on('click',' #newGame',function(){
    $('#createGame').show()
    $('#newGame').hide()
})


$(document).on('click','#warrior, #mage',function(){
    //var vid = document.getElementById("play");
    //vid.play();
    classe = $(this).val();    
    $('#classChoice').val(classe)

    console.log(classe);
})

function createHero(classe,pseudo) {
    if (classe == "warrior") {
        var hero = new Hero(pseudo,100,0.25,50,40,classe)
    }else{
        var hero = new Hero(pseudo,80,0.15,30,100,classe)   
    }
}

function gameStart() {
    exp = 0
    expMax = 50;
    gold = 0;
    lv = 0
}

function getMonster(){
    number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        var monstre = new Monstre("Loup-Garou",30,10,30);
    }else if (number == 2) {
        var monstre = new Monstre("Zombie",50,20,40);
    }else{
        var monstre = new Monstre("Gluant",80,30,60);
    }
    return monstre;
}

function monsterKO() {
    exp += monstre.experience
    if (exp > expMax) {
        lvl += 1
        exp = expMax - exp
    }
}

function shop() {
    // Ouverture pour acheter une potion
}