const radio = document.querySelectorAll('.radio__button');
console.log(radio);
const navegation = document.querySelectorAll('.navegation__pages');
const label = document.querySelectorAll('label');
console.log(navegation);

navegation.forEach()

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
};