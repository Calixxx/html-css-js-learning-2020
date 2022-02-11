let prodValue = document.querySelectorAll('.input-area');

// let infosValue = document.querySelector('.textarea');

let btn = document.querySelector('.input-btn');

let boxValue = document.querySelector('.container-name');

let prod = document.querySelectorAll('.prod-name');

let divInfos = document.querySelector('.infos-contain');

let divInfosChild = document.querySelector('.infos-contain-con');

let infosSup = document.querySelector('.infos-sup'); 

let nameProduct = document.querySelector('.infos-title span');

var plus = document.querySelector('.span');


var numberOfLi = 0; 

btn.addEventListener('click', function(){

    function inputIsEmpty(){
        let flag = false;
        if (currentName  == '' || currentEmail  == '' || currentNumber  == ''){
            flag = true;
        }
        if (currentInfos == ''){
            currentInfos = 'Désolé Aucun Produit disponible'
        }
        return flag;
    }
    //On parcours tous les input pour récupérer les valeurs
    for (let i = 0; i < prodValue.length; i++){
        var currentName = prodValue[0].value;
        var currentEmail = prodValue[1].value;
        var currentNumber = prodValue[2].value;
        var currentInfos = prodValue[3].value;
    }
    //On crée le li et son contenu
    let li = document.createElement('li');
    let value = 'Nom : ' + currentName + '\n'+'Email : ' +  currentEmail + '\n'+'Contact : ' +  currentNumber;

    // On crée un lien pour accéder au producteur courant
    let a = document.createElement('a');
    a.setAttribute('href', '#'+currentName);
    li.appendChild(a);
    
    if (inputIsEmpty()){
        //cas ou un des champs est vide
        window.alert('Remplissez tous les champs s\'il vous plait');
    }else{        
        //On ajoute la classe prod-name  au a crée dans le li
        a.classList.add('prod-name');

        //LA valeur des élements entrés devient celle du a crée dans le li 
        a.innerText = value;

        //On ajoute les attributs du producteur au container
        boxValue.appendChild(li);

        //On incremente le nombre de producteurs
        numberOfLi += 1;

        //le compteur pour la liste des producteurs
        var span = document.querySelector('.prod-count');
        span.textContent = numberOfLi;
        
        //On supprime tous les champs
        for (let i = 0; i < prodValue.length; i++){
            prodValue[i].value = '';
    }
    }

    // Un écouteur, à chaque fois qu'on clique sur un producteur et on affiche les produits disponibles pour chaque producteur

    li.addEventListener('click', function(){
        // On ajoute le nom et 
        nameProduct.innerText = currentName;
        divInfos.setAttribute('id', '#'+currentName);

        // On crée un element p qu'on ajoute  a divInfos
        p = document.createElement('p');
        divInfos.appendChild(p);

        // On met la valeur de la div infos a jour
        divInfosChild.innerText = currentInfos;

        // On l'a fait apparaitre grace a la classe apperate dans le CSS
        infosSup.classList.add('apperate');
    })

    plus.addEventListener('click', function(){
        //On crée le input et le button de validation et son textContent
        input = document.createElement('input');
        btnSubmit = document.createElement('button');
        btnSubmit.innerText = 'Ajouter';
        
        p = document.createElement('p');
        divInfosChild.appendChild(p);

        //On ajoute le input à la div Infos puis on le stylise 
        input.classList.add('inputAdd');
        p.appendChild(input); 
        
        // On ajoute la classe btnSubmit au bouton pour son positionnement
        btnSubmit.classList.add('btnSubmitAdd');
        p.appendChild(btnSubmit);
        
        //  On ajoute la div contenant le input et le bouton valider
        divInfos.appendChild(divInfosChild);

        // On fait disparaitre le bouton au clic
        plus.style.opacity = '0';
        btnSubmit.addEventListener('click', function(e){

            //On récupère la valeur de l'input saisie par l'user
            let newValue = input.value;

            //On fait disparaitre le bouton et l'input
            input.style.display = 'none';
            btnSubmit.style.display = 'none';

            //On ajoute un nouvel élément p contenant le texte saisi 
            p = document.createElement('p');
            p.innerText = newValue;
            divInfosChild.appendChild(p); 

            //On fait réapparitre le bouton
            plus.style.opacity = '1';   
        })
    })
})




