var btnAbrirPopup;
var overlay;
var psb;
psb = document.getElementById('PsbPoopup');
btnAbrirPopup = document.getElementById('btn-popup1');
overlay = document.getElementById('overlay');
popup = document.getElementById('popup'),
close = document.getElementById('btn-close-popup');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
});     

btnAbrirPopup.addEventListener('click', function(){
    psb.classList.add('active');
});   