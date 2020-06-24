const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');


button.addEventListener("click", () => {
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.innerHTML = hexColor;
    color.style.color = hexColor;
    button.style.color = hexColor;
    document.body.style.background = hexColor;
});

let getRandomNumber = () => Math.floor(Math.random() * hex.length);