const btn_submite = document.getElementById('submit');
const card__1 = document.querySelector(".card-1");
const card__2 = document.querySelector(".card-2");
const label = document.querySelectorAll('label');
const navegation = document.querySelectorAll('.navegation__pages');
const cont = document.querySelector(".cont");
let cont_inicial = 1;



//const radio = document.querySelectorAll('.radio__button');
//console.log(radio);
//console.log(navegation);


btn_submite.addEventListener("click", enviarSubmit );

function enviarSubmit() {
    card__1.classList.add('active');
    cont.textContent = cont_inicial;
    card__2.classList.remove('active');
};

navegation.forEach(btn_radio =>{
    btn_radio.addEventListener("click", rating )
});

function rating(event) {
    navegation.forEach(btn => {
        btn.classList.remove('active');
    });

    if (event.target.classList.contains('navegation__pages')){
        event.target.classList.add('active');
        
    }else {
        event.target.parentElement.classList.add('active');
    }
    cont_inicial = event.target.textContent;
};

/*
card__1.addEventListener("click", function (){
    mudaBackground();
});

card__2.addEventListener("click", function (){
    mudaBackground();
});

card__3.addEventListener("click", function (){
    mudaBackground();
});

card__4.addEventListener("click", function (){
    mudaBackground();
});

card__5.addEventListener("click", function (){
    mudaBackground();
});

function mudaBackground() {
    for (i in radio) {
        
        if(radio[i].checked){
            navegation[i].style.background = 'hsl(216, 12%, 54%)';
            label[i].style.color = 'hsl(0, 0%, 100%)';

            console.log(navegation[i]);
        }else {
            navegation[i].style.background = 'rgba(149, 158, 172, 0.07)';
            label[i].style.color = 'hsl(217, 12%, 63%)';
        }
        
        
        
    }
};*/