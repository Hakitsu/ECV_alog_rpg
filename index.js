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

