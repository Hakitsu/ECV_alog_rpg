// Create Game

// Game 
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

function getMonster(){
    number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        var monstre = new Monstre("Loup-Garou",30,10,30);
    }else if (number == 2) {
        var monstre = new Monstre("Zombie",50,20,40);
    }else{
        var monstre = new Monstre("Gluant",80,30,60);
    }
    $('#nameMonstre').text(monstre.name)
    $('#pvMonstre').text(monstre.life)
    $('#pvMaxMonstre').text(monstre.lifeMax)
    console.log(monstre.name);
    console.log("monstre life : "+monstre.life); 
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
        lv += 1
        exp = expMax - exp
    }
}

function shop() {
    $('#shop').show
}

$(document).on('click','#startGame',function(){
    exp = 0
    expMax = 50;
    po = 0;
    lv = 0
    potion = 1;
    slimeKo = 0;
    loupGarouKo = 0;
    zombieKo = 0;
    potion = 1;
    profil = $("#pseudo").val();
    classe = $('#classChoice').val();
    $('#createGame').hide();
    $('#newGame').show();
    hero = createHero(classe,profil)
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
    $('#newGame').hide()
})


$(document).on('click','#warrior, #mage',function(){
    //var vid = document.getElementById("play");
    //vid.play();
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
        potion -= 1;
        console.log(hero.life);
        console.log(hero.lifeMax);
        if (hero.life == hero.lifeMax) {
            alert("Génial le gaspi !")
        
        }else if (potion < 0) {
            alert("Tu vas boire quoi ?! du vide ?! ")

        }else{
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

$(document).on('click','.buyPotion',function (potion){
    buyPotion = $(this).val;
    if (buyPotion == "oui" ) {
        
    }
})

function defense(){
    lifeHit = hero.defenseAttack(monstre.attackCaC);
    console.log(lifeHit);
    $('#heroPv').text(lifeHit)
    if (lifeHit == 0) {
        // game over
    }
}

function attaque(){
    dommage = hero.attack()
    monstreHit = monstre.takeDommage(dommage)
    if (monstreHit <= 0) {
        monsterKO(exp)
        getMonster()
    }else{
        $('#pvMonstre').text(monstre.life)
    }
}