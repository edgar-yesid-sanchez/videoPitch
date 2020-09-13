var video1 = document.getElementById("videoid1");
var video2 = document.getElementById("videoid2");
var video3 = document.getElementById("videoid3");
var video4 = document.getElementById("videoid4");
var video5 = document.getElementById("videoid5");
var video6 = document.getElementById("videoid6");
var video7 = document.getElementById("videoid7");
var video8 = document.getElementById("videoid8");
var video9 = document.getElementById("videoid9");
var video10 = document.getElementById("videoid10");


var close = document.querySelectorAll(".clossse");
var v = document.querySelectorAll('.video');

var modalBtns = document.querySelectorAll('.modal-open');
modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = 'block';
    };
});

var closeBtns = document.querySelectorAll('.modal-close');
closeBtns.forEach (function(btn){
    btn.onclick = function(){
        var modal = (btn.closest(".modal").style.display = 'none');
        video1.pause();video1.currentTime = 0;
        video2.pause();video2.currentTime = 0;
        video3.pause();video3.currentTime = 0;
        video4.pause();video4.currentTime = 0;
        video5.pause();video5.currentTime = 0;
        video6.pause();video6.currentTime = 0;
        video7.pause();video7.currentTime = 0;
        video8.pause();video8.currentTime = 0;
        video9.pause();video9.currentTime = 0;
        video10.pause();video10.currentTime = 0;
        
    };
});

window.onclick = function(e){
    if(e.target.className == "modal"){
        e.target.style.display = "none";
        video.pause();
    }
};
