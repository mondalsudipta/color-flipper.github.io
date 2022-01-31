let colors = ["red", "green", "orange", "yellow", "blue", "indigo", "violet"];

//get ui element
let btn = document.getElementById('btn');
let color = document.querySelector('.color');

//event listener
btn.addEventListener('click', function () {

    let randomNumber = getRandomNumber();
    //console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]

    //console.log(document.body);
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}