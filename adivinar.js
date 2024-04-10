//Variables
let numberRandom;
let attemptsCounterValue = 0;

//Llamada de los elementos en html
const inputNumber = document.getElementById("inputNumber");
const guess = document.getElementById("guess");
const star = document.getElementById("star");
const attempts = document.getElementById("attempts");
const messages = document.getElementById("messages");


const generateRandomNumber = () => {
    numberRandom = Math.floor(Math.random() * 100);
    //console.log("Número aleatorio generado:", numberRandom);
};

generateRandomNumber();

const attemptsCounter = () => {
    attemptsCounterValue = attemptsCounterValue + 1;
}

const guessNumber = () => {

    attemptsCounter();
    attempts.innerHTML = "Intento: " + attemptsCounterValue;
    console.log(attemptsCounterValue);
    messages.innerHTML = "";

    const number = parseInt(inputNumber.value);

    if(isNaN(number) || number < 0 || number >= 101){
        console.log("Debes ingresar un numero entre 0 y 100");
        messages.innerHTML = "Debes ingresar un numero entre 0 y 100";
    }else{
        if (numberRandom === number) {
            console.log("¡Adivinaste!");
            guess.className = "hidden";
            star.className = "";
            messages.innerHTML = "¡Adivinaste, felicitaciones!";
        }else {
            if(number > numberRandom){
                console.log("El numero " + number + " es incorrecto intenta con un numero menor...");
                messages.innerHTML = "El numero " + number + " es incorrecto intenta con un numero menor...";
                inputNumber.value = "";
            }else{
                console.log("El numero " + number + " es incorrecto intenta con un numero mayor...");
                messages.innerHTML = "El numero " + number + " es incorrecto intenta con un numero mayor...";
                inputNumber.value = "";
            }
        }
    }
};

const tryAgain = () => {
    location.reload();
}




console.log(attemptsCounterValue);
