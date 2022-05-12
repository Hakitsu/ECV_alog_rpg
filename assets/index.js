$(document).ready(function(){
    classe = 'warrior'
})

function createHero(classe,pseudo) {
    if (classe == "warrior") {
        sort = [{"name" : "shield"}]
            
        var hero = new Hero(pseudo,100,0.25,50,40,sort)
        return hero
    }else{
        sort = [{"name" : "Foudre"},{"name" : "Feu" }]
        var hero = new Hero(pseudo,80,0.15,30,100,sort) 
        return hero  
    }
}

function gameStart() {
    exp = 0
    expMax = 50;
    gold = 0;
    lv = 0
    potion = 1;
    slimeKo = 0;
    loupGarouKo = 0;
    zombieKo = 0;
    tour = "player"
    heroLife = true;
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
    if (monstre.name == 'Loup-Garou') {
        loupGarouKo += 1;
    }else if (monstre.name == 'Zombie') {
        zombieKo += 1;
        
    }else if (monstre.name == 'Gluant') {
        slimeKo += 1;   
    }else{
        console.log("oui");
    }
    exp += monstre.experience
    if (exp > expMax) {
        lvl += 1
        exp = expMax - exp
    }
}

function shop() {
    // Ouverture pour acheter une potion
    
}

$(document).on('click','#startGame',function(){
    $('#createGame').hide();
    $('#newGame').show();
    profil = $("#pseudo").val();
    classe = $('#classChoice').val();
    hero = createHero(classe,profil)
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

})

$(document).on('click','.tourPlayer', function(){
    action = $(this).val();
    console.log(action);
    if (action == "sort") {
        inputAction = $("#actionChoice").html();
        console.log(inputAction);
        retourn = '<input class="tourPlayer" type="button" value="retour"></input>'
        $('.tourPlayer').last().after(retourn);
        for (let i = 0; i < hero.sort.length; i++) {
            const element = hero.sort[i]["name"];
            spell = '<input class="tourPlayer" type="button" value="'+element+'"> '
            console.log(spell);
            $('.tourPlayer').last().after(spell);
        }
    }
      
})