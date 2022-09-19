
function scr (){
var top = document.getElementById('top');
var txt = document.getElementById('txt');

top.scrollBy(100,0);
txt.scrollBy(100,0);
}


function scrl (){
    var top = document.getElementById('top');
    var txt = document.getElementById('txt');

    top.scrollBy(-100,0);
    txt.scrollBy(-100,0);
    }

function burger () {
    var burger = document.getElementById('mob');

    burger.style.display = 'flex';
}

function noburger () {
    var burger = document.getElementById('mob');

    burger.style.display = 'none';
}