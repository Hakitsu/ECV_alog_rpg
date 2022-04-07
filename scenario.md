
Scénario Début parti

Choix joueur entre Guerrier ou Mage

select = window.prompt('')
return array.from(select)

Si Guerrier

Call Class = guerrier.

sinon 

Class = mage.



scénario choix

Si Compte monstre = 10 et lv = 5

// Victoire => Code :joy:

Si Guerrier 
Choix = [Cac, Heal]

window.prompt

Si mage
Choix = [Cac, Heal, Fireball ]


Si Choix == C -> Scénario perdre PV

Si choix == H -> Scénario heal

Si choix == S -> Scénario Sort
    




Scénario perdre PV
H = Héros / M = Monstre



Si Tour H 

AttackH - DefM = PvLostM
Monstre.touchByAtk(PvLost) return -> 

Si Monnstre.vivant == faux
=> Scénario XP
=> Scénario spawn monster



Si Tour M
AttackM - DefH = PvLostH

Heros.touchByAtk(PvLost)




Scénario heal

appel de la méthode Heros.heal()


 
Scénario sort

perte de mana + scénario perdre pv 



Scénario xp

H.setExpérience



scénario spawn monster (LG- / Gluant+ / Zombie)

function new_monstre

Si 1 / monstre = LG

Si 2 / monstre Zombie

Si 3 / monstre = Gluant 

