var conBtn = document.querySelector('.btn-con');

var insBtn = document.querySelector('.btn-ins');

var conDiv = document.querySelector('.connexion');

var insDiv = document.querySelector('.inscription');

var switcher = document.querySelector('.switcher');


conBtn.addEventListener('click', function(){
    switcher.style.transform = 'translateX(0)';
})

insBtn.addEventListener('click', function(){
    switcher.style.transform = 'translateX(-50%)';
})
