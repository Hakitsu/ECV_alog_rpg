var vid = document.getElementById("play");
// Create Game

// Game 
$(document).ready(function(){
    classe = 'warrior'
})

function createHero(classe,pseudo) {
    if (classe == "warrior") { 
        sort = [{"name" : "shield"}]
        var hero = null
        hero = new Hero(pseudo,100,0.25,50,40,sort)
        return hero
    }else{
        sort = [{"name" : "Foudre"},{"name" : "Feu" }]
        hero = new Hero(pseudo,80,0.15,30,100,sort) 
        return hero  
    }
}

function getMonster(){
    // appel au début pour savoir le premier monstre à affronté
    number = Math.floor(Math.random() * 3) + 1;
    var monstre = null
    if (number == 1) {
        monstre = new Monstre("Loup-Garou",30,10,30,20);
    }else if (number == 2) {
        monstre = new Monstre("Zombie",50,20,40,30);
    }else{
        monstre = new Monstre("Gluant",80,30,60,50);
    }
    $('#nameMonstre').text(monstre.name)
    $('#pvMonstre').text(monstre.life)
    $('#pvMaxMonstre').text(monstre.lifeMax)
    return monstre;
}

function monsterKO() {
    if (monstre.name == 'Loup-Garou') {
        loupGarouKo += 1;
    }else if (monstre.name == 'Zombie') {
        zombieKo += 1;
        
    }else{
        slimeKo += 1;
    }
    exp += monstre.experience
    po += monstre.po
    while (exp >= expMax) {
        lv++
        exp = exp - expMax;
        shop()

    }
    $('#heroPo').text(po)
    $('#heroExp').text(exp)
    $('#heroLv').text(lv)
}
function shop(){
    $("#shop").show()
    $("#actionPlayer").hide()
}

$(document).on('click','#startGame',function(){
    //Music
    vid.play();
    vid.volume = 0.5
    //Player
    exp = 0
    expMax = 50;
    po = 50;
    lv = 0
    potion = 1;
    slimeKo = 0;
    loupGarouKo = 0;
    zombieKo = 0;
    potion = 1;
    profil = $("#pseudo").val();
    classe = $('#classChoice').val();
    $('#createGame').hide();
    $('#game').show();
    hero = createHero(classe,profil)
    $('#heroName').text(hero.name)
    $('#heroLv').text(lv)
    $('#heroPv').text(hero.life)
    $('#heroPvMax').text(hero.lifeMax)
    $('#heroMana').text(hero.mana)
    $('#heroManaMax').text(hero.mana)
    $('#heroPo').text(po)
    $('#heroPotion').text(potion)
    $('#heroExp').text(exp)
    $('#hero').show()
    monstre = getMonster();
    $('#monstre').show();
})

$(document).on('click',' #newGame',function(){
    $('#createGame').show()
    $('#actionPlayer').show()
    $('#game').hide()
    $('#gameOver').hide()
})


$(document).on('click','#warrior, #mage',function(){
    classe = $(this).val();
    if (classe == "warrior") {
        $("#warrior").addClass('classChoice');
        $("#mage").removeClass('classChoice');
    }else{
        $("#mage").addClass('classChoice');
        $("#warrior").removeClass('classChoice');

    }    
    $('#classChoice').val(classe)

})

// FUNCTION PRINCIPAL
$(document).on('click','.tourPlayer', function(){
    action = $(this).val();
    console.log(action);
    if (action == "sort") {
        inputAction = $("#actionChoice").html();
        $("#actionChoice").html("");
        retourn = '<input class="tourPlayer" type="button" value="retour"></input>'
        $('#actionChoice').append(retourn);
        for (let i = 0; i < hero.sort.length; i++) {
            const element = hero.sort[i]["name"];
            spell = '<input class="tourPlayer" type="button" value="'+element+'"> '
            console.log(spell);
            $('.tourPlayer').last().after(spell);
        }
    }else if(action=="potion"){
        inputAction = $("#actionChoice").html();
        $("#actionChoice").html("");
        retourn = '<span> Utiliser la potion : </span>'
        retourn += '<input class="tourPlayer" type="button" value="oui"></input>'
        retourn += '<input class="tourPlayer" type="button" value="non"></input>'
        $('#actionChoice').append(retourn);

    }
    else if (action == "non" || action == "retour") {
        $("#actionChoice").html("");
        $("#actionChoice").html(inputAction);
        
    }else if (action == "oui") {
        if (hero.life == hero.lifeMax) {
            potion -= 1;
            alert("Génial le gaspi !")
        
        }else if (potion <= 0) {
            alert("Tu vas boire quoi ?! du vide ?! ")

        }else{
            potion -= 1;
            hero.heal();
            $('#heroPv').text(hero.life)
        }
        $('#heroPotion').text(potion)
        
        defense()
        $("#actionChoice").html("");
        $("#actionChoice").html(inputAction);
        
    }else if (action == "attaquer") {
        attaque()
        defense()
    }
      
})

function defense(){
    lifeHit = hero.defenseAttack(monstre.attackCaC);
    $('#heroPv').text(lifeHit)
    if (lifeHit == 0) {
        // game over
        $("#slimeKO").text(slimeKo)
        $("#loupGarouKO").text(loupGarouKo)
        $("#zombieKO").text(zombieKo)
        score = lv*((slimeKo*5) + (zombieKo*3) + (loupGarouKo*1))  
        $("#score").text(score)
        $("#hero, #shop, #monstre, #actionPlayer").hide()
        $("#gameOver").show()
    }
}

function attaque(){
    dommage = hero.attack()
    monstreHit = monstre.takeDommage(dommage)
    if (monstreHit <= 0) {
        monsterKO(exp)
        monstre = getMonster()
    }else{
        $('#pvMonstre').text(monstre.life)
    }
}

$(document).on('click','.buyPotion',function (){
    buyPotion = $(this).val();
    if (buyPotion == "oui" ) {
        if (po >= 100) {
            potion += 1
            po -= 100
            $('#heroPo').text(po)
            $('#heroPotion').text(potion)
        }else{
            alert("Pauvre ! tu me dégoute")
        }
        $("#shop").hide()
        $("#actionPlayer").show()
    }else{
        $("#shop").hide()
        $("#actionPlayer").show()
    }
})

function muteSong(is_muted) {
    if (is_muted == 0) {
        vid.volume=0
        $("#noMute").hide()
        $("#mute").show()
    }else{
        vid.volume=0.5
        $("#mute").hide()
        $("#noMute").show()
    }
}

