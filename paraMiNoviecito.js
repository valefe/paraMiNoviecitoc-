
let gifs=["https://media2.giphy.com/media/ZbNf1WwVYwqeOXsLmV/giphy.gif?cid=ecf05e47f4gjsp1pqmz4ejzutk6bl5vcz15plko7d0ahwa7o&rid=giphy.gif&ct=g", 
 "https://media0.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif?cid=ecf05e47cdok3zat2qay98u9joz0pf6dim82i4nmxa3eb6li&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/94EQmVHkveNck/giphy.gif?cid=ecf05e47jpmqkkq843w29vghgzr5y1fvcud4vj68s8qfe517&ep=v1_gifs_search&rid=giphy.gif&ct=g",
   "https://media4.giphy.com/media/obBRY85qHrHIOX7TsF/giphy.gif?cid=ecf05e47g01tgl9ov0hv15occzb2bphprisls03jshtr0d40&rid=giphy.gif&ct=g"];

let FondoPagina = document.querySelector('body');

function ModoNovia(){
    let BotonNovia = document.getElementById("BotonNovia");
    BotonNovia.remove();

    let BotonNovio = document.getElementById("BotonNovio");
    BotonNovio.remove();

    let Intro = document.getElementById("Intro");
    Intro.remove();

    let ContenedorNovio = document.getElementById("ContenedorPrincipal");
    ContenedorNovio.style.display = "block";
}

function ModoNovio(){ 
    BotonNovia.remove();
    BotonNovio.remove();
    Intro.remove();
    FondoPagina.style.backgroundImage = "url('https://i.pinimg.com/564x/c2/13/02/c21302388125314d765cdd3933971040.jpg')";
    let ContenedorNovio = document.getElementById("ContenedorNovio");
    ContenedorNovio.style.display = "block";
}


// Funcion que mueve el boton no aleatoriamente
function moveElmRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btn_si = document.querySelector('#btn_si');
let btn_no = document.querySelector('#btn_no');

btn_no.addEventListener('mouseenter', function(e) { 
    moveElmRandom(e.target);
});

btn_si.addEventListener('click', function(e) { 
    clearInterval(tim);
    alert('Sabía que dirías que SI. Nos casamos? 💖') 
});
const gif = document.getElementById("gif");

 function rogar(){
     const img = document.createElement("img");
     var cambio = Math.floor(Math.random() * gifs.length);  
     img.src = gifs[cambio];
     gif.appendChild(img);

    setTimeout(()=>{
    gif.removeChild(gif.firstElementChild);
    },8000);
}
var tim=setInterval(rogar,8000);

btn_no.addEventListener('click', function(e) {
    alert('¿Cómo de que no? 😥😢😰😭');
});

//Mismo Codigo pero para el modo Novio
let btn_si2 = document.querySelector('#btn_si2');
let btn_no2 = document.querySelector('#btn_no2');

btn_no2.addEventListener('mouseenter', function(e) { 
    moveElmRandom(e.target);
});

btn_si2.addEventListener('click', function(e) { 
    clearInterval(tim2);
    btn_no2.remove();
    alert('Gacias. Te amo muchsisisisissiisissiisiiso c: <3') 
});
const gif2 = document.getElementById("gif2");

 function rogar2(){
     const img = document.createElement("img");
     var cambio = Math.floor(Math.random() * gifs.length);  
     img.src = gifs[cambio];
     gif2.appendChild(img);

    setTimeout(()=>{
    gif2.removeChild(gif2.firstElementChild);
    },8000);
}
var tim2 = setInterval(rogar2,8000);

btn_no2.addEventListener('click', function(e) {
    alert('a 🥺');
});

