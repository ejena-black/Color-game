 var numSquares = 6 
var colors = [];
var goalColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("span");
var message = document.querySelector("#notify")
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode")

begin()


resetButton.addEventListener("click", function(){
    reset()
})


function begin(){
    difficultyButton()
    squareClick()
    reset()
}
function difficultyButton(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected")
            modeBtns[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6
            reset()
        })
    }
}
function squareClick() {
    for(var i = 0; i < squares.length; i++){
        // click listener for squares
        squares[i].addEventListener("click", function(){
        // select color
        var pickedColor = this.style.background;
        // comparing selected color with the correct one
        if(pickedColor === goalColor){
            message.textContent = "Correct!"
            colorWin(pickedColor);
            h1.style.background = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.background = "#232323";
            message.textContent = "Try Again";
        }
    })
    }
}
function reset(){
    //  generate new colors
    colors = generateColor(numSquares);
    // pick new random color from array
    goalColor = randomColor();
    // change displayed color to match the goalColor
    displayColor.textContent = goalColor;
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    message.textContent = "";
    // change the colors of the squares
    for(i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block'
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
    
}

function colorWin(color){
    // loop through the squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function randomColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Color Randomizer Code
function generateColor(num){
    // make random colors
    var arr = []
    // loop for the color generator
    for(var i= 0; i < num; i++){
        // get random color and push into  the array
        arr.push(colorRandomizer());
    }
    // return that array
    return arr;
}
function colorRandomizer(){
    // Red from 0-255
    var r = Math.floor(Math.random() * 256);
    // Green from 0-255
    var g = Math.floor(Math.random() * 256)
    // Blue from 0-255
    var b = Math.floor(Math.random() * 256)
    // Synthesized string from the variables above
    return "rgb(" + r + ", " + g + ", " + b +")";
}