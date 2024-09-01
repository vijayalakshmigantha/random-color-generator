let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let buttonElement = document.getElementById("button");
let bgContainerElement = document.getElementById("bgContainer");
bgContainerElement.style.backgroundColor = bgColorsArray[0];

function changeBgColor() {
    let numberOfBgColors = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberOfBgColors);
    if (randomColorIndex === numberOfBgColors) {
        randomColorIndex = numberOfBgColors - 1
    } 
        let randomColor = bgColorsArray[randomColorIndex];
        bgContainerElement.style.backgroundColor = randomColor;
    


}