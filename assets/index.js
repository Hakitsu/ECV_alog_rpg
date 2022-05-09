$(document).ready(function(){
    classe = 'warrior'
})



$(document).on('click','#startGame',function(){
    $('#createGame').hide();
    $('#newGame').show();
    profil = $("#pseudo").val();
    classe = $('#classChoice').val();
    createHero(classe,profil)
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
}

function getMonster(){
    number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        var monstre = LoupGarou;
    }else if (number == 2) {
        var monstre = Zombie;
    }else{
        var monstre = Gluant;
    }
    return monstre;
}



