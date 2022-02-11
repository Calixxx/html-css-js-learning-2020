"use strict";

var hideContainer = document.querySelector('.hide-container');
var hideContain = document.querySelector('.hide-contain');
var spanMontant = document.querySelector('.hide-span');
var btnValidate = document.querySelector('input[type = "submit"]');
var estAffiche = false;
var inputs = document.querySelectorAll('.normal-input');
btnValidate.addEventListener('click', function () {
  for (var i = 0; i < inputs.length; i++) {
    var currentName = inputs[0].value;
    var currentBank = inputs[1].value;
    var currentMontant = inputs[2].value;
  }

  spanMontant.textContent = 'Merci ' + currentName + ' vous avez fais un don de ' + currentMontant + 'FCFA';

  function inputIsEmpty() {
    var flag = false;

    if (currentName == '' || currentBank == '') {
      flag = true;
    } else {//
    }

    return flag;
  }

  if (inputIsEmpty()) {
    alert('Remplissez tous les champs s\'il vous plait');
  } else {
    estAffiche = true;
    document.body.style.overflowY = "hidden";
    hideContainer.classList.remove('cache');
  }
});

if (estAffiche) {//
} else {
  hideContainer.addEventListener('click', function () {
    hideContainer.classList.add('cache');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  });
}

hideContain.addEventListener('click', function (e) {
  e.stopPropagation();
});