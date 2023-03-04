let AddDes = document.querySelector(".addDes")
let de_1 = document.querySelector('.de_1')
let de_2 = document.querySelector('.de_2')
let de_3 = document.querySelector('.de_3')
let de_4 = document.querySelector('.de_4')
let de_5 = document.querySelector('.de_5')
let de_6 = document.querySelector('.de_6')
let Alerte = document.querySelector('.Alerte')
let comptage = document.querySelector('.comptage')
let paragrapheINFO = document.querySelector('.paragrapheINFO')
let buttonDisable = document.querySelector('.buttonDisable')
let buttonClic_cable = document.querySelector('.buttonClic_cable')
let couverture = document.querySelector('.couverture')

let resultat = Math.floor(Math.random()*6+1)
let resultat2 = Math.floor(Math.random()*6+1)
let resultat3 = Math.floor(Math.random()*6+1)
let resultat4 = Math.floor(Math.random()*6+1)
let resultat5 = Math.floor(Math.random()*6+1)
let resultat6 = Math.floor(Math.random()*6+1)
de_1.innerHTML = resultat
de_2.innerHTML = resultat2
de_3.innerHTML = resultat3
de_4.innerHTML = resultat4
de_5.innerHTML = resultat5
de_6.innerHTML = resultat6


        

let clique = 1

// cette fonction nous permet de compter le nombre de dés ajouté. Si le nombre = 6 on desactiver le button add dés et donne un nombre aléatoire sur le dés
function Compte() {
    clique++
    comptage.textContent = clique

    switch (clique) {
            case 2:
            de_2.classList.add('activer')
            de_2.innerHTML = resultat2
            break;
            case 3:
            de_3.classList.add('activer')
            de_3.innerHTML = resultat3
            break;
            case 4:
            de_4.classList.add('activer')
            de_4.innerHTML = resultat4
            break;
            case 5:
            de_5.classList.add('activer')
            de_5.innerHTML = resultat5
            break;
            case 6:
            de_6.classList.add('activer')
            de_6.innerHTML = resultat6
            buttonDisable.classList.add('activer')
            buttonClic_cable.classList.add('desactiver')
            break;
    
        default:
            paragrapheINFO.textContent = `vous ne pouvez plus ajouter de dés`
            break;
    }
}
// ******************************************** FIN ***********************************

// cette fonction nous permet de donner un nombre aléatoire et afficher la somme des nombres dans un alert 
function ACTION() {
        let resultat = Math.floor(Math.random()*6+1)
        let resultat2 = Math.floor(Math.random()*6+1)
        let resultat3 = Math.floor(Math.random()*6+1)
        let resultat4 = Math.floor(Math.random()*6+1)
        let resultat5 = Math.floor(Math.random()*6+1)
        let resultat6 = Math.floor(Math.random()*6+1)
        de_1.innerHTML = resultat
        de_2.innerHTML = resultat2
        de_3.innerHTML = resultat3
        de_4.innerHTML = resultat4
        de_5.innerHTML = resultat5
        de_6.innerHTML = resultat6
        switch (clique) {
                case 1:
                    resultatFinal = resultat 
                break;
                case 2:
                    resultatFinal = resultat + resultat2
                break;
                case 3:
                    resultatFinal = resultat + resultat2 + resultat3
                break;
                case 4:
                    resultatFinal = resultat + resultat2 + resultat3 + resultat4
                break;
                case 5:
                    resultatFinal = resultat + resultat2 + resultat3 + resultat4 + resultat5
                break;
                case 6:
                    resultatFinal = resultat + resultat2 + resultat3 + resultat4 + resultat5 + resultat6
                break;
        
            default:
                resultatFinal = resultat + resultat2 + resultat3 + resultat4 + resultat5 + resultat6
                break;
        }

    Alerte.textContent = resultatFinal
    couverture.classList.remove('desactiver')
    couverture.classList.add('activer')    
}
// ******************************************** FIN ***********************************

function ClicSurDe(jeuDE) {
    jeuDE.addEventListener('click',ACTION)
}

// appel de la fonction Compte en cliquant sur Ajour un dés
AddDes.addEventListener('click',Compte)
// ******************************************** FIN ***********************************
// appel de la fonction ClicSurDe en passant en parametre les différent dés
ClicSurDe(de_1)
ClicSurDe(de_2)
ClicSurDe(de_3)
ClicSurDe(de_4)
ClicSurDe(de_5)
ClicSurDe(de_6)
// ******************************************** FIN ***********************************


couverture.addEventListener('click', ()=>{
    couverture.classList.remove('activer')
    couverture.classList.add('desactiver')
})